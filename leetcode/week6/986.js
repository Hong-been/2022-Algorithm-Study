/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function (a1, a2) {
	if (!a1.length || !a2.length) return [];

	let p1 = 0;
	let p2 = 0;
	const ans = [];

	while (p1 < a1.length && p2 < a2.length) {
		const [s1, e1] = a1[p1];
		const [s2, e2] = a2[p2];
		const stand = s1 <= s2 ? a1[p1] : a2[p2];
		const compt = s1 <= s2 ? a2[p2] : a1[p1];

		// 비교해서 ans에 추가
		// 안겹치는 경우
		if (stand[1] < compt[0]);
		else if (stand[1] === compt[0]) {
			ans.push([stand[1], stand[1]]);
		} else if (stand[1] >= compt[0]) {
			if (stand[1] > compt[1]) ans.push([compt[0], compt[1]]);
			else ans.push([compt[0], stand[1]]);
		}

		// 끝점이 더 작은쪽 포인터++
		if (e1 < e2) p1++;
		else p2++;
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