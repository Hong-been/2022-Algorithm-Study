function solution(arr1, arr2) {
	return arr1.map((row) =>
		arr2[0].map((x, i) => row.reduce((a, b, c) => a + b * arr2[c][i], 0))
	);
}
solution(
	[
		[2, 3, 2],
		[4, 2, 4],
		[3, 1, 4],
	],
	[
		[5, 4, 3],
		[2, 4, 1],
		[3, 1, 1],
	]
);
