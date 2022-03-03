/**
 * @param {number[][]} mat
 * @return {number[][]}
0인 곳 큐에 넣기
0의 동서남북보면서
    1이 아니면 넘어가고
    1을 만나면 1자리에 dist+1 넣기

N: mat.length, M:mat[0].length
time O(NM)
space O(NM)
*/
var updateMatrix = function (mat) {
	const visited = Array.from({length: mat.length}, (x) =>
		Array(mat[0].length).fill(0)
	);
	const moves = [[1, 0],[-1, 0],[0, 1],[0, -1]];
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

			if (newI < 0 || newJ < 0 || newI >= mat.length || newJ >= mat[0].length || mat[newI][newJ] !== 1 || visited[newI][newJ])continue;

			mat[newI][newJ] = dist + 1;
			visited[newI][newJ] = 1;
			q.push([newI, newJ, dist + 1]);
		}
	}

	return mat;
};
/*
DP로 다시 풀기
*/
var updateMatrix = function(mat) {
	const MAX = mat.length * mat[0].length;
	let dp = JSON.parse(JSON.stringify(mat));
	
	for(let i = 0; i < mat.length; i++) {
			for(let j = 0; j < mat[0].length; j++) {
					if (mat[i][j] === 0) {
							dp[i][j] = 0;
							continue;
					}
					const top = i > 0 ? dp[i - 1][j] : MAX;
					const left = j > 0 ? dp[i][j - 1] : MAX;
					
					dp[i][j] = Math.min(top, left) + 1;
			}
	}
	for (let i = mat.length - 1; i >= 0; i--) {
			for (let j = mat[0].length - 1; j >= 0; j--) {
					if (mat[i][j] === 0) {
							dp[i][j] = 0;
							continue;
					} 
					const bottom = i < mat.length - 1 ? dp[i + 1][j] : MAX;
					const right = j < mat[0].length - 1 ? dp[i][j + 1] : MAX;
					
					dp[i][j] = Math.min((Math.min(bottom, right) + 1), dp[i][j]);
			}
	}
	return dp;
};

/*
수빈
0을 queue에다가 다 넣음.
1은 MAX로 바꿔줌.

queue에서 하나씩 빼면서, MAX만나면 갱신해줌.
algo: BFS
time: O(m*n)
space: O(m*n)
*/
var updateMatrix = function(mat) {
  const queue = [];
  for(let i=0; i<mat.length; i++){
      for(let j=0; j<mat[0].length; j++){
          if(mat[i][j]===0){
              queue.push([i,j]);
          }
          else {
              mat[i][j]=Number.MAX_VALUE;
          }
      }
  }
  const dir = [[-1,0],[0,1],[1,0],[0,-1]];
  let cnt = 0;
  while(queue.length){
      cnt++;
      let qLen = queue.length;
      for(let i=0; i<qLen; i++){
          const [x, y] = queue.shift();
          for(let [dx, dy] of dir){
              let row = x + dx;
              let col = y + dy;
              if(row<0 || col<0 || row>=mat.length || col>=mat[0].length) continue;
              if(mat[row][col]===Number.MAX_VALUE){
                  queue.push([row,col]);
                  mat[row][col]=cnt;
              }   
          }
      }
  }
  return mat;
};