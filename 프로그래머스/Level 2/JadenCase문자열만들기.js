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
