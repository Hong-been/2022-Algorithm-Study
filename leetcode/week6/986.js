/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 
 각각 [0]을 비교해서 큰거 lo
 각각 [1]을 비교해서 작은거 hi
 
 lo <= hi이면 정답에 [lo,hi] 추가.
 둘 중 끝점이 작은걸 포인터 이동
 */
var intervalIntersection = function(L1, L2) {
	let i=0;
	let j=0;
	const ans=[];
	
	while(i<L1.length && j<L2.length){
			const low = Math.max(L1[i][0], L2[j][0]);
			const high = Math.min(L1[i][1], L2[j][1]);
			
			if(low <= high){
					ans.push([low,high]);
			}
			
			if(L1[i][1] < L2[j][1]) i++;
			else j++;
	}
	
	return ans;
};


/*
수빈
[[0,2],[5,10],[13,23],[24,25]]
                           ^
  
[[1,5],[8,12],[15,24],[25,26]]
                           ^

두 범위를 비교했을때, 
시작점은 둘중 max인거.
끝점은 둘중 min인거. 

time: O(L1+L2)
space: O(1)
*/
var intervalIntersection = function(firstList, secondList) {
	let p1=0, p2=0;
	let res = [];
	
	while(p1 < firstList.length && p2 < secondList.length){
			let maxStart = Math.max(firstList[p1][0], secondList[p2][0]);
			let minEnd = Math.min(firstList[p1][1], secondList[p2][1]);
			
			if(maxStart<=minEnd) res.push([maxStart, minEnd]);
			if(firstList[p1][1]<secondList[p2][1]) p1++;
			else p2++;
	}
	
	return res;
};