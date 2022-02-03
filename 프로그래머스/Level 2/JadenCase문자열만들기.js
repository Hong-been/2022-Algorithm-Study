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


// 홍빈
function solution(s) {
	return s
		.split("")
		.map((c, i) => {
			if (c === " ") return c;
			if (i === 0 || s[i - 1] === " ") return c.toUpperCase();
			return c.toLowerCase();
		})
		.join("");
}

