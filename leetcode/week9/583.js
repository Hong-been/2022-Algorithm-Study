/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 
 LCS구해서 차이값 리턴
 
 time O(N^2) space O(N^2)
 */
 var minDistance = function(w1, w2) {
  if(w1===w2) return 0;
  
  w1 = "#"+w1;
  w2 = "#"+w2;
  const dp = [...Array(w1.length)].map(row => Array(w2.length).fill(0));
  
  for(let i=1; i<w1.length; i++){
      for(let j=1; j<w2.length; j++){
          if(w1[i]===w2[j]){
              dp[i][j] = 1 + dp[i-1][j-1];
          }else{
              dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
          }
      }
  }
  
  const LCS = dp[w1.length-1][w2.length-1];
  
  return (w1.length-1)-LCS + (w2.length-1)-LCS;
};


/*
수빈

  0 e a t
0 0 0 0 0
s 0 
e 0 
a 0

time:O(N*M)
space:O(N*M)
*/
var minDistance = function(word1, word2) {
    const dp = Array.from(Array(word1.length+1), () => Array(word2.length+1).fill(0));
    for(let i=1; i<word1.length+1; i++){
        for(let j=1; j<word2.length+1; j++){
            if(word1[i-1] === word2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
            }
        }
    }
    return word1.length + word2.length - 2*dp[word1.length][word2.length];
};