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
