/*
time O(NlogN + N) space O(1)
*/
function solution(routes) {
  routes.sort((a,b)=>a[1]-b[1]);
  let last = routes[0][1];
  let ans = 1;
  
  for(let i=1; i<routes.length; i++){
      if(routes[i][0]<=last && last <=routes[i][1]) continue;
      
      ans++;
      last = routes[i][1];
  }
  
  return ans;
}