/*
수빈
N: s.length
time: O(N)
space: O(N)
*/
function solution(s){
  let stack = [s[0]];
  for(let i=1; i<s.length; i++){
      if(stack[stack.length-1]===s[i]) stack.pop();
      else stack.push(s[i]);
  }
  
  return stack.length ? 0 : 1;
}

/*
홍빈
N: string length
- time O(N)
- space O(1) 으로 optimal 도전하려했으나 ..... 아직 못함

 baabaa
  i
     j

while(s[i]===s[j] && i>=0 && j<s.length){
    i--;
    j++;
    count+=2 // count=6
}
j++;
i=j-1

if(count===s.length) return 1;
return 0;
*/
function optimalUncompleted(s) {
	if (s.length % 2) return 0;

	let count = 0;
	let i = 0;
	let invalid = null;
	for (let j = 1; j < s.length; j++) {
		i = j - 1;

		while (s[i] === s[j]) {
			count += 2;
			i--;
			if (i === invalid) i = invalid - count;
			j++;
			console.log(i, j);
			invalid = j - 1;
			if (i < 0) break;
		}
	}

	if (count === s.length) return 1;
	return 0;
}

/*
홍빈
N: string length
- time O(N)
- space O(N)
 
  짝수인덱스는 짝수 스택에 추가
  홀수인덱스는 홀수 스택에 추가
  while(두 스택의 탑이 같다면) 홀,짝 pop
*/
function brute(string) {
	if (string.length % 2) return 0;

	const even = [];
	const odd = [];

	for (let i = 0; i < string.length; i++) {
		if (i % 2) odd.push(string[i]);
		else even.push(string[i]);

		while (even[even.length - 1] === odd[odd.length - 1]) {
			even.pop();
			odd.pop();
			if (!even.length || !odd.length) break;
		}
	}

	if (even.length || odd.length) return 0;
	return 1;
}
