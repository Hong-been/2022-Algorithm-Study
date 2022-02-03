// 홍빈
function solution(a, b) {
	a.sort((a, b) => a - b);
	b.sort((a, b) => b - a);

	let ans = 0;
	a.forEach((v, i) => {
		ans += v * b[i];
	});

	return ans;
}
