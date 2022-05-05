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


/*
수빈
어떤 숫자를 합으로 구성하는 숫자들중 곱이 최대로 나올수 있을때 곱!

10
5 5 = 25 (5구성 최대곱 6, 6*6 = 36)
4 6 = 24 (4구성 최대곱 4, 6구성 최대곱 9 4*9 = 36)
3 7 = 21
2 8 = 16
1 9 = 9


0 1 2 3 4 5 6 7  8  9  10
0 1 1 2 4 6 0 0. 0  0.  0 
i           ^
j         ^

time: O(N^2)
space: O(N)
*/
var integerBreak = function(n) {
    //최대곱 저장배열
    const dp = new Array(n+1).fill(0);
    dp[1]=1;
    dp[2]=1;
    for(let i=3; i<n+1; i++){
        for(let j=1; j<i; j++){
            dp[i] = Math.max(j*dp[i-j], Math.max(dp[i], j*(i-j)));
        }
    }
    return dp[n];
};