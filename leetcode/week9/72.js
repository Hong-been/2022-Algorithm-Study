/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 
 오답없음
 time O(N^2) space O(N^2)
 
 */
 var minDistance = function(w1, w2) {
  if(w1===w2) return 0;
  
  w1="#"+w1;
  w2="#"+w2;
  const dp = [...Array(w1.length)].map(row => Array(w2.length).fill(0));
  
  for(let i=0; i<w1.length; i++){
      for(let j=0; j<w2.length; j++){
          if(i===0){
              dp[0][j]=j;
              continue;
          }
          if(j===0){
              dp[i][0]=i;
              continue;
          }
          
          if(w1[i]===w2[j]){
              dp[i][j]=dp[i-1][j-1];
          }else{
              dp[i][j]=Math.min(dp[i][j-1],dp[i-1][j],dp[i-1][j-1])+1;
          }
      }
  }
  
  // console.log(dp)
  return dp[w1.length-1][w2.length-1];
};


/*
수빈
time: O(n*m)
space: O(n*m)
*/
var minDistance = function(word1, word2) {
    let n = word1.length;
    let m = word2.length;
    
    // edge case
    if(n * m === 0) return n+m;

    const dp = Array.from(Array(n+1), ()=> Array(m+1).fill(0));
    //console.log(dp);
    // top down
    for(let i=0; i< n+1; i++){
        dp[i][0] = i;
    }
    // left to right
    for(let j=0; j<m+1; j++){
        dp[0][j] = j;
    }
    
    for(let i=1; i<n+1; i++){
        for(let j=1; j<m+1; j++){
            let left = dp[i][j-1];
            let top = dp[i-1][j];
            let dia = dp[i-1][j-1];
      
            if(word1[i-1] !== word2[j-1]) dp[i][j]= Math.min(left, top, dia) +1;
            else dp[i][j]=dia;
        }
    }
    return dp[n][m];
    
    
};