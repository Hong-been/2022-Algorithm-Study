/*
[["100","ryan","music","2"]
,["200","apeach","math","2"]
,["300","tube","computer","3"]
,["400","con","computer","4"]
,["500","muzi","music","3"]
,["600","apeach","music","2"]]

유일성 먼저 하고
최소성
*/
function solution(relations) {
	let ans = 0;
	const map = new Map();
	const combs = getComb(relations[0].length).sort(
		(a, b) => a.length - b.length
	);
	const unique = [];
	const ans = [];

	for (let i = 0; i < combs.length; i++) {
		if (isUnique(combs[i], relations)) unique.push(new Set(combs[i]));
	}

	for (let i = 0; i < unique.length; i++) {
		if (unique[i].size === 1) {
			ans.push(unique[i]);
			continue;
		}
	}

	return ans.length;
}
function isUnique(c, r) {
	const map = new Map();

	for (let i = 0; i < r.length; i++) {
		let k = "";
		for (let j = 0; j < c.length; j++) {
			k += `${r[i][c[j]]}`;
		}
		if (map.has(k)) return 0;
		map.set(k, true);
	}

	return 1;
}

function getComb(x) {
	const comb = [];
	const arr = [...Array(x)].map((v, i) => i);

	const dfs = (curComb, unUsed) => {
		if (curComb.length) comb.push([...curComb]);
		if (unUsed.length === 0) return;

		for (let i = 0; i < unUsed.length; i++) {
			curComb.push(unUsed[i]);
			dfs(curComb, unUsed.slice(i + 1, unUsed.length));
			curComb.pop();
		}
	};

	dfs(["0", "0", "0", "0"], arr);

	return comb;
}
