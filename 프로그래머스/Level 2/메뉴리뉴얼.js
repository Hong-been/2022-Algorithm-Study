/*
홍빈
C: course length, O: orders array length, N: order length
- time O(C*O*N^N)
- space O(N^2) for map + O(N^2) for answer

현재 length가 2개미만이면 break;
나올수있는 2개짜리 조합을 모두 맵에 저장
이미 맵에 있으면 count+1
count max이면 max갱신

map을 돌면서 max에 해당되는 키값을 정답으로 추가.

정답은 오른차순으로 정렬해서 return
*/
function solution(orders, course) {
	const ans = [];

	for (let c of course) {
		const map = new Map();
		let max = 0;

		for (let i = 0; i < orders.length; i++) {
			if (orders[i].length < c) continue;

			const curOrder = orders[i].split("").sort();
			permutate(curOrder, c, map);
		}

		for (let [k, v] of map) {
			if (v > max) max = v;
		}

		if (max < 2) continue;

		for (let [key, val] of map) {
			if (val === max) ans.push(key);
		}
	}
	return ans.sort();
}
// time O(string.length ^ string.length)
function permutate(string, length, map) {
	let max = 0;

	const dfs = (curIdx, curWord) => {
		if (curWord.length === length) {
			if (map.has(curWord)) map.set(curWord, map.get(curWord) + 1);
			else map.set(curWord, 1);

			if (max < map.get(curWord)) max = map.get(curWord);
			return;
		}

		for (let idx = curIdx + 1; idx < string.length; idx++) {
			dfs(idx, curWord + string[idx]);
		}
	};

	for (let i = 0; i <= string.length - length; i++) {
		dfs(i, string[i]);
	}

	return max;
}
