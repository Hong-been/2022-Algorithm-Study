// 최솟값 만들기

/*
수빈
N: A.length = B.length
time: O(NlogN+N)
space: O(1)
*/
function solution(A, B) {
	let sum = 0;
	A.sort((a, b) => a - b);
	B.sort((a, b) => b - a);
	for (let i = 0; i < A.length; i++) {
		for (let j = 0; j < B.length; j++) {
			if (i === j) sum += A[i] * B[j];
		}
	}
	return sum;
}

// 홍빈
// time O(NlogN + N)
// space O(1)
function solution(a, b) {
	a.sort((a, b) => a - b);
	b.sort((a, b) => b - a);

	let ans = 0;
	a.forEach((v, i) => {
		ans += v * b[i];
	});

	return ans;
}
