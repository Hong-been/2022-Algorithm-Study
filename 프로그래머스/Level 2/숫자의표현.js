/*
홍빈
time O(N)
space O(1)
*/
function solution(n) {
	if (n === 1) return 1;

	let ans = 1;
	for (let i = Math.ceil(n / 2); i > 0; i--) {
		let j = i - 1;
		let sum = i + j;

		while (j) {
			if (sum === n) ans++;
			if (sum >= n) break;
			j--;
			sum += j;
		}

		if (!j) break;
	}

	return ans;
}
