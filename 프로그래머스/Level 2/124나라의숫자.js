/*
홍빈
time O(n)
space O(1)
*/
function solution(n) {
	const nums = [4, 1, 2];
	let ans = [];

	while (n) {
		let r = n % 3;
		n = Math.floor(n / 3);

		ans.push(nums[r]);
		if (r === 0) n -= 1;
	}

	console.log(ans);
	return ans.reverse().join("");
}
