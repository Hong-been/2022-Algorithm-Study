/*
8번까지 셋을 모으면서 해당하는 수가 나오면 끝.
*/
function solution(N, number) {
  if(N===number) return 1;
  
  const dp=[...Array(9)].map(v=>new Set());
  
  const operate = (idx1,idx2)=>{
      for(let x of dp[idx1].values()){
          for(let y of dp[idx2].values()){
              dp[idx1+idx2].add(x+y);
              dp[idx1+idx2].add(x-y);
              dp[idx1+idx2].add(y-x);
              dp[idx1+idx2].add(x*y);
              y && dp[idx1+idx2].add(x/y >> 0);
              x && dp[idx1+idx2].add(y/x >> 0);
          }
      }
  }
  
  for(let i=1; i<dp.length; i++){
      dp[i].add('1'.repeat(i) * N);
      
      for(let j=1; j <= i>>1;j++){
          operate(j,i-j);
          if(dp[i].has(number)) return i;
      }
  }
  return -1;
}
