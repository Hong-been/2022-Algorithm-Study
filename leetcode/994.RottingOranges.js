/**
 * @param {number[][]} grid
 * @return {number}
 
 2이면 bfs시작, #으로 바꿈
 4방향에 1이 있다면 #으로 바꾸고 curMin+1
 4방향 어디에도 1이 없으면 curMin을 정답에 맥스인지 체크하여 갱신, return
 
 2를 찾는 순회가 끝나고,
 1이 남아있으면 return -1;
 아니면 return max
 
 time O(MN)
 space O(MN)
 */
var orangesRotting = function (grid) {
	let max = 0;
	const move = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];
	const q = [];

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 2) q.push([i, j, 0]);
		}
	}

	while (q.length) {
		const [i, j, min] = q.shift();

		if (grid[i][j] === "#") continue;
		grid[i][j] = "#";
		max = Math.max(max, min);

		for (let [r, c] of move) {
			const newI = i + r;
			const newJ = j + c;

			if (
				newI < 0 ||
				newJ < 0 ||
				newI >= grid.length ||
				newJ >= grid[0].length ||
				grid[newI][newJ] !== 1
			)
				continue;

			q.push([newI, newJ, min + 1]);
		}
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[0].length; j++) {
			if (grid[i][j] === 1) return -1;
		}
	}

	return max;
};
