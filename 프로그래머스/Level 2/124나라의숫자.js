// 124 나라의 숫자

/*
홍빈
나머지가 0이 나오면 0을 4로바꾸고 몫을 하나뺀다.
time O(n)
space O(1) + O(ans.length) for answer
*/
function solution(n) {
	const ans = [];
	const N = 4;

	while (n) {
		let r = n % 3;
		n = Math.floor(n / 3);

		if (r === 0) {
			n--;
			r = N;
		}
		ans.push(r);
	}

	return ans.reverse().join("");
}

/************************************************/

/*
수빈 Solution #1
N: n.length
R: res.length
time: O(log3(N))
space: O(1) + O(R) for answer 
*/
function solution(n) {
  let res = "";
  res = backtracking(n, res);
  
  return res;
}

function backtracking(n, res){
  let tempQ = parseInt(n/3); 
  let tempR = n%3; 
  if(tempR === 0){
      tempQ = tempQ-1; 
      tempR = 3;
  }
  if(tempQ >= 3){
      res = backtracking(tempQ, res);
  }
  
  if(tempR === 3) tempR =4;

  if(tempQ < 3 && tempQ !== 0) res += tempQ.toString();
  res += tempR.toString();

  return res;
}

/*
수빈 Solution #2
time: O(N)
space: O(R)
*/
function change124(n) {
  var src = [4,1,2];

  var result = '';
  while(n) {
    result = src[n%3] + result;
    n = Math.floor((n-1)/3);
  }
  return result;
}
