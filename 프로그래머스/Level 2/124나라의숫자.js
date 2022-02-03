/*
홍빈
나머지가 0이 나오면 0을 4로바꾸고 몫을 하나뺀다.
time O(n)
space O(1)
*/
function solution(n) {
	const ans = [];
	const N = 4;

	while (n) {
		let r = n % 3;
		n = Math.floor(n / 3);

		if (r === 0) {
			n--;
			r = N;
		}
		ans.push(r);
	}

	return ans.reverse().join("");
}
