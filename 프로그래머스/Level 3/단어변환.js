/*
bfs
words를 보면서 hit랑 하나차이나는거 큐에 넣어, words에는 쓴거는 #으로 바꿔
큐에서 빼면서 또 words에서 하나차이나는거 큐에넣어
N=words.length
time O(N^2) space O(N)
*/
function solution(begin, target, words) {
  if(words.indexOf(target)===-1) return 0;
  
  let ans=0;
  const q=[[begin,0]];
  
  const isValid = (w1,w2)=>{
      let diff=0;
      for(let i=0; i<w1.length; i++){
          if(w1[i]!==w2[i]) diff++;
          if(diff>1) return false;
      }
      return true;
  }
  
  while(q.length){
      const [cur,count]=q.shift();
      
      for(let i=0; i<words.length; i++){
          const word = words[i];
          if(word==="#") continue;
          if(isValid(word,cur)){
              if(word===target) return count+1;
              words[i]="#";
              q.push([word,count+1]);
          }
      }
  }
  
  return 0;
}