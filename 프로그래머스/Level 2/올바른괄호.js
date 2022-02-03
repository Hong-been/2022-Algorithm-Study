// 올바른 괄호

// return count === 0 ? true : false; 효율성 통과
// return count > 0 ? false : true; 효율성 실패

/**
 * 홍빈, N: s.length
 * time O(N)
 * space O(1)
 * @param {*} s
 * @returns boolean
 */
function solution(s) {
	let count = 0;

	for (let c of s) {
		if (c === "(") count++;
		else {
			count--;
			if (count < 0) return false;
		}
	}
	return count === 0 ? true : false;
}

/************************************************/

/*
수빈
time: O(N)
space: O(1)
*/
function solution(s){
  let count = 0;
  // edge case
  if(s[0]===")") return false;
  for(let i=0; i<s.length; i++){
      if(s[i]==="(") count++;
      if(s[i]===")") count--;
      if(count < 0) return false;
  }
  return count===0 ? true: false;
}
