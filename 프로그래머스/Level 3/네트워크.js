/*
dfs
1인게 나오면 방문안한거면 ans--
visited처리하고 재귀들어가

time O(N^2) space O(N)
*/
function solution(n, c) {
  if(n===1) return n;
  
  let ans = n;
  const v = Array(n).fill(0);
  
  const dfs = (row) => {
     for(let j=0; j<n; j++){
          if(c[row][j] && !v[j]){
              ans--;
              v[j]=1;
              dfs(j);
          }
      }
  }
  //이부분 실수함. 주의!
  for(let i=0; i<n; i++){
      v[i]=1;
      dfs(i);    
  }
  return ans;
}