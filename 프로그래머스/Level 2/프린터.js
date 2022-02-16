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

/*
수빈
time: O(N^2 + N)
space: O(N)
*/
/*
대기목록에서 가장 앞 J를 꺼냄.
나머지 대기목록에서 J보다 중요도 높은문서 1개라도 있으면, J를 목록 맨끝에 넣음
아니면 J인쇄.

중요도는 클수록 높음.

A B C D
2 1 3 2

B C D A
1 3 2 2

C D A B
3 2 2 1

input: 중요도 priorities Arr / 내가 뽑고싶은 문서 위치 location Int.
ouput: Int(내가 뽑고싶은 문서 몇번째로 인쇄되는지?)
*/
function solution(priorities, location) {
  let queue = [];
  let printList = [];
  for(let i=0; i<priorities.length; i++){
      queue.push([priorities[i],i]);
  }
  while(queue.length){
      let curDocs = queue.shift();
      for(let i=0; i<queue.length; i++){
          if(curDocs[0] < queue[i][0]){
              queue.push(curDocs);
              break;
          }
          if(i===queue.length-1){
              printList.push(curDocs);    
          }
      }
  }

  let answer = 1;
  for(let docs of printList){
      if(docs[1]===location) return answer;
      else answer++;
  }
  return answer;
}