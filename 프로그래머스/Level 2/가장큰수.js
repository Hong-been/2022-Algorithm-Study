/*
홍빈 - 내가푼거아니고 솔루션찾아봄^^;;;하..
- time O(NlogN)
- space O(N)
3 30 34 5 9 - 9534330
1 3 -> return a-b//이면 (a-b가 양수면 큰수를 뒤로보낸다)
*/
function solution(numbers) {
  const answer = numbers.map(v=>v.toString())
                       .sort((a,b) => parseInt(b+a) - parseInt(a+b))
                       .join('');
   
   return answer[0]==='0'?'0':answer;
}

/*
수빈
time: O(N+NlogN+N)
space: O(N)
*/
/*
[3, 30, 34, 5, 9]
95

330
303
*/
function solution(numbers) {
  var answer = numbers.map(num => num.toString())
                      .sort((a,b) => (b+a) - (a+b))
                      .join("");
  
  return answer[0]==="0" ? "0" : answer;
}