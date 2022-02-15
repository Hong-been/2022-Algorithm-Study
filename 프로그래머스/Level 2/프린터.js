/*
홍빈
N: p length
- time O(N*N)
- space O(N)
*/
function solution(p, location) {
  const q=Array.from({length:p.length},(v,i)=>i);
  let printed=0;
  
  while(q.length){
      const cur = q.shift(); // O(N)?
      
      if(p[cur] === Math.max(...p)){
          printed++;
          p[cur]=0;
          if(cur===location) return printed;
          continue;
      }
      q.push(cur);
  }
  
  return p.length-1;
}