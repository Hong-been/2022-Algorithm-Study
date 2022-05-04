/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 
 (m+n-2)! / m-1! / n-1!
 time O(M+N) space O(M+N) for call stack
 
 */
 var uniquePaths = function(m, n) {
  if(m===1 || n===1) return 1;
  
  const getFac = (num)=>{
      if(num === 1) return 1;
      
      return num * getFac(num-1);
  }
  
  return getFac(m+n-2) / getFac(m-1) / getFac(n-1);
  
};

/**
  time O(MN) space O(MN)
 */
 var uniquePaths = function(m, n) {
  if(m===1 || n===1) return 1;
 
  const dp = [...Array(m)].map(v => Array(n).fill(0));
  
  for(let i=m-1; i>=0; i--){
      for(let j=n-1; j>=0; j--){
          if(i===m-1 || j===n-1){
              dp[i][j]=1;
              continue;
          }
          
          dp[i][j] += dp[i+1][j] + dp[i][j+1];
      }
  }
  
  return dp[0][0];
};


/*
수빈

0 1
1 2
1 3

0 1 1 1  1  1  1
1 2 3 4  5  6  7
1 3 6 10 15 21 28

time: O(m*n)
space: O(m*n)
*/
var uniquePaths = function(m, n) {
    const dp = Array.from(Array(m), () => Array(n).fill(1));
    
    for(let i=1; i<m; i++){
        for(let j=1; j<n; j++){
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
        }
    }
    return dp[m-1][n-1];
};