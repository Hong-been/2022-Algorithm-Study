/*
큐에 넣을때마다 정렬해서 max-heap 만들기
time O(N^2logN) space O(N)
*/
function solution(ops) {
  const q=[];
  
  for(let op of ops){
      if(op==="D 1"){
          q.shift();
          continue;
      }
      if(op==="D -1"){
          q.pop();
          continue;
      }
      q.push(parseInt(op.split(' ')[1]))
      q.sort((a,b)=>b-a);
  }
  
  return q.length ? [q[0],q[q.length-1]] : [0,0];
}