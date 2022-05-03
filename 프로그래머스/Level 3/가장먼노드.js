/*
뎁스 배열
1 2 3 4 5 6
0 1 1 2 2 2

from이랑 next랑 뎁스가 같거나(사이클 방지, 방향성 제시)
이미 0말고 다른수가 들어가있거나(사이클 방지)
next가 1이면(사이클 방지) 패스
토폴로지 소트(비사이클, directed)를 구현 
-> bfs에서 순회할때 이미 방문한곳은 안가도록 해서 비사이클과 방향을 만들었다

time O(N+E) space O(N)
*/
function solution(n, edge) {
  const dep = Array(n+1).fill(0);
  const map=new Map();
  let max=0;
  const q=[];
  
  for(let i=0; i<edge.length;i++){
      const [a,b]=edge[i];
      
      if(map.has(a)) map.get(a).push(b);
      else map.set(a,[b]);
      
      if(map.has(b)) map.get(b).push(a);
      else map.set(b,[a]);
  }
  
  if(!map.has(1)) return 0;
  for(let e of map.get(1)){
      q.push(e);
      dep[e]=1;
  }
  
  while(q.length){
      const next=q.shift();
      
      for(let c of map.get(next)){
          if(c===1 || dep[next]===dep[c] || dep[c]>0) continue; 
          dep[c]=dep[next]+1;
          max = Math.max(max,dep[c]);
          q.push(c);
      }
  }
  
  // dep에서 최댓값을 가진것들의 수
  return dep.filter(v=> v===max).length
}