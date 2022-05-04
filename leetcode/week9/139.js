/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 [0]에서 출발해서 갈수있는 곳에 1표시
 dp순회하면서 1인 곳에서 출발해서 가능한 곳 1표시
 indexing 주의...!!!
 time O(S^2 * WS) space O(N)
 */
 var wordBreak = function(s, wordDict) {
  if(s.length===1 && wordDict.indexOf(s)===-1) return false;
  
  const dp = Array(s.length).fill(0);
  
  for(let i=1;i<=s.length; i++){
      const cur=s.substring(0,i);
      if(wordDict.indexOf(cur)>-1) dp[i-1]=1;
  }
  
  for(let i=0; i<dp.length; i++){
      if(!dp[i]) continue;
      
      for(let j=i+1; j<=s.length; j++){
          const cur = s.substring(i+1,j);
          if(wordDict.indexOf(cur)>-1) dp[i+cur.length]=1;
      }
  }
  
  return dp[dp.length-1];
};


/*
수빈
time: O(S^2*W)
space:O(S)
*/
var wordBreak = function(s, wordDict) {
    //base case
    const dp= new Array(s.length+1).fill(false);
    dp[0]=true;
    
    for(let i=0; i<s.length+1;i++){
        for(let j=0; j<wordDict.length; j++){
            const word = wordDict[j];
            const word_len = word.length;
            if(dp[i-word_len] && s.slice(i-word_len,i) === word){
                dp[i]=true;
            }
        }
    }
    //console.log(dp)
    return dp[dp.length-1];
};