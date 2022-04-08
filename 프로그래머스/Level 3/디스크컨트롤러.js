/*
지금 수행중인 사이에 들어온 애들 우선처리.
그 중에서 시간이 짧은거부터 처리?

[0]기준으로 정렬하고 [0]가 같으면 [1]로 정렬

현재 시각 전에 요청들어온거 중에 제일 짧은거 수행
없으면 남은거중에 제일 짧은거 수행

1.태스크를 수행한 후, 웨이팅큐에서 now보다 먼저 요청들어온애들을 레디큐에 넣고 sort한다.
2.레디큐가 비었으면 웨이팅큐[0]를 수행하고, 레디큐에 뭔가 있으면 레디큐[0]를 수행시킨다
3.웨이팅큐가 빌때까지 1-2반복

time O(N^3logN) space O(N)
*/
function solution(jobs) {
  jobs.sort((a,b)=>{
      if(a[0]===b[0]) return a[1]-b[1];
      return a[0]-b[0];
  });
  
  let ans=0;
  let now=0;
  const readyq=[]; // now보다 먼저 요청이 들어온 태스트. 웨이팅큐보다 우선으로 [0]를 수행시킨다
  const waitingq=[...jobs]; //레디큐에 비었으면 웨이팅큐[0]에 있는애를 수행시킨다.
  
  while(waitingq.length || readyq.length){
      // 웨이팅큐에서 now보다 [0]값이 작은애들 레디큐에 다 넣어
      for(let i=0; i<waitingq.length; i++){
          if(waitingq[i][0]>=now) continue;
          
          readyq.push(waitingq[i]);
          waitingq.splice(i,1);
          i--;
      }
      
      // 레디큐가 있으면 정렬하고 제일 짧은거 수행
      if(readyq.length){
          readyq.sort((a,b)=>a[1]-b[1]);
          ans += (now-readyq[0][0])+readyq[0][1];
          now +=readyq[0][1];
          readyq.splice(0,1);
      }else{
          //없으면 웨이팅큐에서 먼저들어온거부터 처리
          ans += waitingq[0][1];
          now =waitingq[0][0]+waitingq[0][1];
          waitingq.splice(0,1);
      }
  }
  
  return ans/jobs.length >> 0;
}