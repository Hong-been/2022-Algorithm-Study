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


/*
수빈
time: O(N)
space: O(N)
*/
var numDecodings = function(s) {
    //edge case
    if(s[0]==="0") return 0;
    if(s.length===1) return 1;
    
    const dp = new Array(s.length+1).fill(0);
    dp[0]=1;
    dp[1]=1;
    
    for(let i=2;i<s.length+1;i++){
        let oneN=Number(s.slice(i-1,i)); //2
        let twoN=Number(s.slice(i-2,i)); //26
        //앞의 한문자 볼때
        if(1<=oneN && oneN<=9) dp[i]+=dp[i-1];
        //console.log(dp[i]) ->0
        //앞의 두문자 볼때
        if(10<=twoN && twoN<=26) dp[i]+=dp[i-2];
    }
    return dp[s.length];
};