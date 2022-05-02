/**
 * @param {number} n
 * @return {number}
 
 time O(N^2) space O(N)
 */
 var integerBreak = function(n) {
  const dp = Array(n+1).fill(0);
  dp[1]=1;
  
  for(let i=2; i<=n; i++){
      for(let x=1; x<=i/2; x++){
          // dp[x]에 있는 값이랑 x값중에 큰거
          // dp[i-x]에 있는 값이랑 i-x값중에 큰거를 곱햐
          const candidate = Math.max(dp[x],x) * Math.max(dp[i-x],i-x);
          dp[i]=Math.max(dp[i], candidate);
      }
  }
  
  return dp[dp.length-1];
};