/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 
 time O(N) space O(N)
 */
 var coinChange = function(coins, amount) {
  if(amount===0) return 0;
  
  const dp = [...Array(amount+1)].fill(amount+1);
  dp[0]=0;
  
  for(let i=1; i<dp.length; i++){
      for(let coin of coins){
          if(i-coin<0) continue;
          
          dp[i] = Math.min(dp[i],dp[i-coin]+1);
      }   
  }
  // console.log(dp);
  return dp[dp.length-1]>amount ? -1 : dp[dp.length-1];
};