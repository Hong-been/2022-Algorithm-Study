// 최댓값과 최솟값

/*
수빈 Solution #1
S: s.length
N: numArr.length
time: O(S+N)
space: O(N)
*/
function solution(s) {
  const numArr= s.split(" ");
  //base case
  let max = Number(numArr[0]);
  let min = Number(numArr[0]);
  
  for(let i=1; i<numArr.length; i++){
      max = Math.max(max, Number(numArr[i]));
      min = Math.min(min, Number(numArr[i]));
  }
  return String(min)+" "+String(max);
}

/*
수빈 Solution #2
S: s.length
N: arr.length
time: O(S+N)
space: O(N)
*/
// Solution #2
function solution(s) {
  const arr = s.split(" ");
  return Math.min(...arr)+" "+Math.max(...arr);

  
// 홍빈
function solution(s) {
  const nums = s.split(' ');
  return `${Math.min(...nums)} ${Math.max(...nums)}`
}