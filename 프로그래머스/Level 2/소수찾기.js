/*
홍빈
permutation n!, prime number logN
time O(N! * logN)
space O(N! + N)
*/
function solution(numbers) {
	const n = numbers.split("").map((x) => parseInt(x));
	let ans = 0;

	const pers = permutate(n); // string[]

	for (let p of pers) {
		if (p.charAt(0) === "0") continue;
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

/*
수빈
time: O(N! + logN)
space: 
*/
function solution(numbers) {
	var answer = [];
	const numArr = numbers.split("");

	//모든 경우의 수 순열 구하기
	for (let i = 1; i <= numArr.length; i++) {
		let per_res = getPermutation(numArr, i);
		per_res.forEach((el) =>
			isPrime(parseInt(el)) ? answer.push(parseInt(el)) : answer
		);
	}
	answer = [...new Set(answer)];
	//console.log(answer)
	return answer.length;
}

function isPrime(num) {
	if (num <= 1) return false;
	if (num === 2) return true;

	for (let i = 2; i <= Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
}

//순열 구하는 함수
function getPermutation(arr, selectNum) {
	const result = [];
	if (selectNum === 1) return arr.map((el) => el);

	arr.forEach((fixed, index, origin) => {
		//fixed숫자 제외한 배열만듬
		const res = [...origin.slice(0, index), ...origin.slice(index + 1)];
		//고정숫자 뺀 배열에서 순열 구함
		const permu = getPermutation(res, selectNum - 1);
		//고정숫자+제외순열 붙여서 문자열 만들어줌
		const attached = permu.map((pArr) => [fixed, ...pArr].join(""));
		result.push(...attached);
	});
	return result;
}
