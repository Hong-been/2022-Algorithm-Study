/*
교집합크기 / 합집합 크기
a,b가 비었다면 1
{1:2, 2:2, 3:1}
{1:1, 2:2, 4:1, 5:1}
교: 겹치면 작거나 같은거 갯수의 합
합: 겹치면 큰거 합+안겹쳐도 싹 더하기
*/
solution("3423", "12--# 343");

function solution(str1, str2) {
	const map1 = getMap(str1);
	const map2 = getMap(str2);
	console.log(map1, map2);

	if (!map1 && !map2) return 1;

	const inter = intersect(map1, map2);
	const uni = union(map1, map2);

	console.log(inter, uni);

	if (!inter) return 0;

	const J = inter + uni ? inter / uni : 1;

	console.log(Math.floor(J * 65536));
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
	for (let [k, v] of map1) {
		if (map2.has(k)) continue;
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
		console.log(cur);
	}

	return map;
}
