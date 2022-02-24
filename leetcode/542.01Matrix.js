/**
 * @param {number[][]} mat
 * @return {number[][]}
0인 곳 큐에 넣기
0의 동서남북보면서
    1이 아니면 넘어가고
    1을 만나면 1자리에 dist+1 넣기
Runtime: 156 ms, faster than 89.04% of JavaScript online submissions for 01 Matrix.
Memory Usage: 50.3 MB, less than 64.84% of JavaScript online submissions for 01 Matrix.

N: mat.length, M:mat[0].length
time O(NM)
space O(NM)
*/
var updateMatrix = function (mat) {
	const visited = Array.from({length: mat.length}, (x) =>
		Array(mat[0].length).fill(0)
	);
	const moves = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	const q = [];

	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat[0].length; j++) {
			if (mat[i][j] === 1) continue;
			q.push([i, j, 0]);
		}
	}

	while (q.length) {
		const [i, j, dist] = q.shift();
		visited[i][j] = 1;

		for (let [r, c] of moves) {
			const newI = i + r;
			const newJ = j + c;

			if (
				newI < 0 ||
				newJ < 0 ||
				newI >= mat.length ||
				newJ >= mat[0].length ||
				mat[newI][newJ] !== 1 ||
				visited[newI][newJ]
			)
				continue;

			mat[newI][newJ] = dist + 1;
			visited[newI][newJ] = 1;
			q.push([newI, newJ, dist + 1]);
		}
	}

	return mat;
};
