// 홍빈
function solution(n) {
	let dp = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		const fib = (dp[1] % 1234567) + (dp[2] % 1234567);
		dp = [dp[1], dp[2], fib];
	}

	return dp[2] % 1234567;
}
