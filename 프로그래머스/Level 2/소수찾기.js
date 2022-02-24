/*
홍빈
permutation n!
prime number logN
*/
function solution(numbers) {
	const n = numbers.split("").map((x) => parseInt(x));
	let ans = 0;

	const pers = permutate(n); // string[]

	for (let p of pers) {
		if (p.charAt(0) === "0") continue;
		// console.log(p);
		if (isPrime(parseInt(p))) ans++;
	}

	return ans;
}
function isPrime(n) {
	if (n <= 1) return false;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}

	return true;
}
function permutate(n) {
	const results = new Set();

	const dfs = (curPath, unUsed) => {
		if (!unUsed.length) {
			results.add(curPath.join(""));
			return;
		}

		if (curPath.length) results.add(curPath.join(""));

		for (let i = 0; i < unUsed.length; i++) {
			curPath.push(unUsed[i]);
			dfs(
				curPath,
				unUsed.slice(0, i).concat(unUsed.slice(i + 1, unUsed.length))
			);
			curPath.pop();
		}
	};

	dfs([], n);

	return [...results];
}
