/*
수빈
N: str1.length
M: str2.length
time: O(N) + O(M) + O(N*M^2) + O(M)
space: O(N) + O(M) + O(Math.min(N, M)) + O(N+M) 
*/
function solution(str1, str2) {
  var answer = 0;
  let arr1 = convertSet(str1);
  let arr2 = convertSet(str2);

  // 교집합, 합집합 구하기
  let intersect = [];
  let union = [];
  for(let i=0; i<arr1.length; i++){
      //arr1[i]가 arr2에도 있으면
      if(arr2.indexOf(arr1[i]) >= 0){
          //교집합에 추가
          intersect.push(arr1[i]);
          //arr2에서 arr1[i] 삭제해줌.
          arr2.splice(arr2.indexOf(arr1[i]), 1);
      }
      union.push(arr1[i]);
  }
  for(let i=0; i<arr2.length; i++){
      union.push(arr2[i]);
  }

  // edge
  if(union.length === 0){
      answer = Math.floor(1 * 65536);
  } else {
      answer = Math.floor((intersect.length / union.length) * 65536);
  }
  
  return answer;
}

function convertSet(str){
  let multiSet = [];
  let strArr = str.split("");
  const regExp = /^[a-zA-Z]*$/;
  for(let i=0; i<strArr.length-1; i++){
      let curWord = strArr[i]+strArr[i+1];
      if(regExp.test(curWord)) multiSet.push(curWord.toUpperCase()); 
  }
  return multiSet;
}


/*
홍빈
N : input max length
- time O(N)
- space O(N)
교집합크기 / 합집합 크기
a,b가 비었다면 1
교: 겹치면 작거나 같은거 갯수의 합
합: 겹치면 큰거 합+안겹쳐도 싹 더하기
*/
function solution(str1, str2) {
	const map1 = getMap(str1);
	const map2 = getMap(str2);

	if (!map1 && !map2) return 1;

	const inter = intersect(map1, map2);
	const uni = union(map1, map2);

	if (!inter && uni) return 0;

	const J = inter + uni ? inter / uni : 1;

	return Math.floor(J * 65536);
}
// 교: 겹치면 작거나 같은거 갯수의 합
function intersect(map1, map2) {
	let count = 0;

	for (let [k, v] of map1) {
		if (map2.has(k)) count += Math.min(v, map2.get(k));
	}

	return count;
}
//합: 겹치면 큰거 합+안겹쳐도 싹 더하기
function union(map1, map2) {
	let count = 0;

	for (let [k, v] of map1) {
		if (map2.has(k)) count += Math.max(v, map2.get(k));
		else count += v;
	}
	for (let [k, v] of map2) {
		if (map1.has(k)) continue;
		count += v;
	}

	return count;
}

function getMap(st) {
	if (!st) return;

	const str = st.split("");
	const map = new Map();

	for (let i = 0; i < str.length - 1; i++) {
		const cur = str
			.slice(i, i + 2)
			.join("")
			.toLowerCase();

		if (cur[0] < "a" || cur[0] > "z") continue;
		if (cur[1] < "a" || cur[1] > "z") continue;

		if (map.has(cur)) map.set(cur, map.get(cur) + 1);
		else map.set(cur, 1);
	}

	return map;
}
