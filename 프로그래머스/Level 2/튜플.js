/*
홍빈
N: s length
M: the number of {} groups
- time O(N * MlogM)..?
- space O(...?)
갯수대로 오름차순정렬하고
튜플에 새로운값을 하나씩 추가
*/
function solution(s) {
  const splitted = s.split('},').map(v=>v.match(/[\d]+/g)).sort((a,b)=>a.length - b.length);
  const answer=new Set();
  
  splitted.forEach(s => s.forEach(v=>{
          if(!answer.has(v)) answer.add(v);    
      }));
  
  return [...answer].map(v=>parseInt(v));
}