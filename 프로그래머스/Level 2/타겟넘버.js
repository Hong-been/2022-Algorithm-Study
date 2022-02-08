/*
수빈
N: numbers.length
time: O(2^N)
space: O(N) for call stack
*/
function solution(numbers, target) {
  var answer = 0;
  dfs(numbers, 0, 0);

  function dfs(numbers, numIdx, sum){
      if(numIdx === numbers.length){
          if(sum === target) answer++;
          return;
      }
      dfs(numbers, numIdx+1, sum+numbers[numIdx]);
      dfs(numbers, numIdx+1, sum-numbers[numIdx]);
  }
  return answer;
}


/*
홍빈
N: numbers length
- time O(2^N)
- space O(N) for call stack

dfs(numbers내의 인덱스, 현재sum){
    if(numbers내의 인덱스 가 마지막인덱스이면)
        if(현재sum===target) 정답++;
        return;
    dfs(numbers내의 인덱스+1, 현재sum+numbers[numbers내의 인덱스+1])
    dfs(numbers내의 인덱스+1, 현재sum-numbers[numbers내의 인덱스+1])
}
*/
function solution(numbers, target) {
	let ans = 0;
	const dfs = (curIdx, curSum) => {
		if (curIdx === numbers.length - 1) {
			if (curSum === target) ans++;
			return;
		}

		dfs(curIdx + 1, curSum + numbers[curIdx + 1]);
		dfs(curIdx + 1, curSum - numbers[curIdx + 1]);
	};
	dfs(-1, 0);
  
	return ans;
}
