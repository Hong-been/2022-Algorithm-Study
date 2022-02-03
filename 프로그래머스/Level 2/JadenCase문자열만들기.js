// JadenCase 문자열 만들기

/*
수빈
N: s.length
time: O(N)
space: O(N)
*/
function solution(s) {
  var answer = '';
  for(let i=0; i<s.length; i++){
      if(i===0 || s[i-1]=== " "){
          answer += s[i].toUpperCase();
      } else {
          answer += s[i].toLowerCase();
      }
  }
  return answer;
}