// 피보나치 수

/*
수빈
time: O(N)
space: O(1)
*/
function solution(n) {
  let fibo = [0,1];
  for(let i=2; i<=n; i++){
      fibo[0] %= 1234567;
      fibo[1] %= 1234567;
      
      let sum = fibo[0] + fibo[1];
      fibo[0]= fibo[1];
      fibo[1]= sum;
  }
  return fibo[1]%1234567;
}


// 홍빈
// time O(n)
// space O(1)
function solution(n) {
  let dp = [0, 1, 1];

	for (let i = 3; i <= n; i++) {
		const fib = (dp[1] % 1234567) + (dp[2] % 1234567);
		dp = [dp[1], dp[2], fib];
	}

	return dp[2] % 1234567;
}

