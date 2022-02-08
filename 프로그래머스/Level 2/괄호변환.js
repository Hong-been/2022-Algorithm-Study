/*
수빈
*/
function solution(p) {
  var answer = '';
  
  // 올바른 괄호 문자열 아니면 dfs 함수 수행
  if(!correctP(p)){
      answer = dfs(p);
  } else return p;
  
  function dfs(w){
      //1. 입력이 빈 문자열인 경우, 빈 문자열을 반환. 
      if(!w) return w;
      
      // w가 올바른 괄호 문자열이면 w그냥 리턴해줌.
      if(correctP(w)) return w;
      
      //2. w를 "균형잡힌 괄호 문자열" u, v로 분리. 
      let openCnt = 0, closeCnt = 0;
      let u = "", v = "";
      for(let i=0; i<w.length; i++){
          if(i>=2 && openCnt === closeCnt){
              u = w.slice(0, i);
              v = w.slice(i, w.length);
              break;
          }
          if(w[i]==="(") openCnt++;
          else if(w[i]===")") closeCnt++;
      }
      // edge case: v=""인경우
      if(!u && !v){
          u = w;
          v = "";
      }

      let str = "";
      //3. u가 올바른 괄호 문자열이면 v에 대해 다시 재귀수행
      if(correctP(u)){
          str = u + dfs(v);
          return str;
      }
      
      //4. u가 올바른 괄호 문자열 아니면
      else if(!correctP(u)) {
          str += "(";
          str += dfs(v);
          str += ")";
          
          for(let i=1; i<u.length-1; i++){
              if(u[i]==="(") str+=")";
              else if(u[i]===")") str+="(";
          }
      }
      return str;
  }
  return answer;
}
  
function correctP(s){
  let cnt = 0;
  for(let i=0; i<s.length; i++){
      if(s[i]==="(") cnt++;
      else if(s[i]===")") cnt--;
      
      if(cnt < 0) return false;
  }
  return cnt === 0 ? true: false;
}


/*
홍빈
N: input length
- time O()?..
- space O(N?) for answer
*/
function solution(p) {
	const pArr = p.split("");

	const algorithm = (str) => {
		// 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
		if (!str.length) return str;

		// 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
		let u = [];
		let v = [];
		const count = [str[0]];

		for (let i = 1; i < str.length; i++) {
			if (count[count.length - 1] !== str[i]) {
				count.pop();
				if (!count.length) {
					u = str.slice(0, i + 1);
					v = str.slice(i + 1, str.length);
					break;
				}
				continue;
			}
			count.push(str[i]);
		}

		// 3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
		if (isValid(u)) {
			return u.concat(algorithm(v));
		}

		// 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
		const tmp = ["("].concat(algorithm(v));
		tmp.push(")");

		const reversed = tmp.concat(
			u.slice(1, u.length - 1).map((x) => {
				if (x === "(") return ")";
				return "(";
			})
		);

		return reversed;
	};

	const ans = [].concat(algorithm(pArr));

	return ans.join("");
}
function isValid(u) {
	let cnt = 0;

	u.forEach((v) => {
		if (v === "(") cnt++;
		else if (cnt > 0) cnt--;
	});

	return cnt === 0 ? true : false;
}
