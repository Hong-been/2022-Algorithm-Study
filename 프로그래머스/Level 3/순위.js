/*
^^..뭐뭐 뭐라고 플로이드 와샬이라고 그게뭔데,,,
암튼..
time O(N^3) space O(N^2)
*/
function solution(n, results) {
  let ans=0;
  const result=[...Array(n+1)].map(v=>Array(n+1).fill(0));
  
  for(let [w,l] of results){
      result[w][l]=1;
      result[l][w]=-1;
  }
  
  for(let k=1; k<result.length; k++){
      for(let i=1; i<result.length; i++){
          for(let j=1; j<result.length; j++){
              // i가 k를 이기고 k가 j를 이겼으면, i는 j를 이긴것
              if(result[i][k]===1 && result[k][j]===1){
                  result[i][j]=1;
                  result[j][i]=-1;
              }
          }
      }
  }
  // console.log(result)
  for(let i=1; i<result.length; i++){
      let count=0;
      for(let j=1; j<result.length; j++){
          if(result[i][j]===0) continue;
          count++;
      }
      if(count===n-1) ans++;
  }
  // console.log(result,ans)
  return ans;
}