// 홍빈
function solution(arr) {
	const getLCD = (a, b) => {
		const getGCD = (a, b) => {
			while (b) {
				let r = a % b;
				a = b;
				b = r;
			}
			return a;
		};

		return (a * b) / getGCD(a, b);
	};

	return arr.reduce((lcd, x) => getLCD(lcd, x), 1);
}
