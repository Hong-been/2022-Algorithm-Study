/**
 * @param {string} s
 * @return {number}
 time O(N) space O(N)
 */
 var numDecodings = function(s) {
  //edge: [0]이 0이면 불가능 ,
  if(s[0]==="0") return 0;
  
  const dp=Array(s.length).fill(0);
  dp[0]=1;
  
  for(let i=1; i<s.length; i++){
      if(s[i]!=="0"){
          dp[i]+=dp[i-1];
      }
      // 이 전꺼랑 합쳐서 10~26 사이면 +1
      const prev = parseInt(s.substring(i-1,i+1));
      if(10<=prev && prev <=26){
          if(i===1) dp[i]++;
          else dp[i]+=dp[i-2];
      }
  }
  
  return dp[s.length-1];
};