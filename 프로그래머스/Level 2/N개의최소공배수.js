// N개의 최소공배수 


/*
수빈
N: arr.length
time: O(N)
space: O(1)
*/
function solution(arr) {
  let answer = arr[0];
  for(let i=1; i<arr.length; i++){
      let gcdNum = gcd(answer, arr[i]);
      let lcmNum = answer * arr[i] / gcdNum;
      answer = lcmNum;
  }
  return answer;
}

function gcd(a, b){
  if(a < b) {
      let temp = a;
      a = b;
      b = temp;
  }
  while(b!==0){
      let n = a%b;
      a=b;
      b=n;
  }
  return a;
}