/*
100-93 = 7 
7/1 = 7일

100-30 = 70
70/30 = Math.ceil(2.333) = 3일
-> 앞의 작업이 7일에 배포되기 때문에 얘도 7일에 배포됨.

100-55 = 45
45/5 = 9일

5
10
1
1
20
1

5일: 1개
10일: 3개
20일: 2개
*/

/*
수빈
N: progresses.length === speeds.length === left.length
time: O(N)
space: O(N) + O(A) for answer;
*/
function solution(progresses, speeds) {
  var answer = [];
  let left = [];
  for(let i=0; i<progresses.length; i++){
      left.push(Math.ceil((100 - progresses[i])/speeds[i]));
  }
  //console.log(left)
  // 5 10 1 1 20 1
  let complete = left[0]; //5
  let cnt = 1;
  for(let i=1; i<left.length; i++){
      if(complete>=left[i]) cnt++;
      else{
          answer.push(cnt);
          complete=left[i];
          cnt = 1;
      }
  }
  answer.push(cnt);
  return answer;
}