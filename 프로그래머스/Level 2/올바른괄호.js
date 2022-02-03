/**
 * 홍빈, N: s.length
 * time O(N)
 * space O(1)
 * @param {*} s
 * @returns boolean
 */
function solution(s) {
	let count = 0;

	for (let c of s) {
		if (c === "(") count++;
		else {
			count--;
			if (count < 0) return false;
		}
	}
	return count === 0 ? true : false;
}
