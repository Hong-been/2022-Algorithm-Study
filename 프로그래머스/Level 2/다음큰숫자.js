/*
홍빈
하나씩 키우면서 2진수로 바꾸고 거기서 1의갯수를 세서 비교
time O(?)
space O(1)
*/
function solution(n) {
	const getBinaryOneCount = (x) => x.toString(2).match(/1/g).length;

	const origin = getBinaryOneCount(n);
	let ans = n + 1;

	while (origin !== getBinaryOneCount(ans)) {
		ans++;
	}

	return ans[0];
}
