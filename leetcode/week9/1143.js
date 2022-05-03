/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 
  오답없음
  time O(N^2) space O(N^2)
 */
  var longestCommonSubsequence = function(t1, t2) {
    if(t1===t2) return t1.length;
    
    t1 = "#"+t1;
    t2 = "#"+t2;
    const dp=[...Array(t1.length)].map(row => Array(t2.length).fill(0));
    
    for(let i=1; i<t1.length; i++){
        for(let j=1; j<t2.length; j++){
            if(t1[i]===t2[j]){
                dp[i][j] = 1 + dp[i-1][j-1];
            }else{
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        }
    }
    
    return dp[t1.length-1][t2.length-1];
};