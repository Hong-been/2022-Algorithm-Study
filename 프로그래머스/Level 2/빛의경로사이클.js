/*
S L
L R

If come back to the start point && cycle is full
  return count
*/
// solution(["SL", "LR"]);
function solution(grid) {
	const map = grid.map((str) => str.split(""));
	const ans = [];
	const visited = Array.from({length: map.length}, (x) =>
		Array.from({length: map[0].length}, (x) => Array(4).fill(0))
	);

	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map[0].length; j++) {
			for (let k = 0; k < 4; k++) {
				if (visited[i][j][k]) continue;

				const cycle = getCycle(i, j, k, visited, map, 0);                
				if (cycle) ans.push(cycle);
			}
		}
	}

	return ans.sort((a, b) => a - b);
}

function getCycle(i, j, dir, visited, map, path) {
	let nextI = i;
    let nextJ = j;
    let nextDir = dir;

	const move = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	]; // 동서남북

    while(!visited[nextI][nextJ][nextDir]){
        visited[nextI][nextJ][nextDir] = 1;
        
        if (map[nextI][nextJ] === "S") {
		    [nextI, nextJ] = changeToValidIndex(nextI + move[nextDir][0], nextJ + move[nextDir][1], map);
            path++;
            continue;
	    }
        
        if (map[nextI][nextJ] === "L") {
		    nextDir = changeDir(nextDir, "L");
            [nextI, nextJ] = changeToValidIndex(nextI+ move[nextDir][0], nextJ + move[nextDir][1], map);
            path++;
            continue;
        }
        if (map[nextI][nextJ] === "R") {
            nextDir = changeDir(nextDir, "R");
            [nextI, nextJ] = changeToValidIndex(nextI + move[nextDir][0], nextJ + move[nextDir][1], map);
            path++;
            continue;
	    }
    }
	return path;
}

function changeToValidIndex(i, j, map) {
	let nextI = i;
	let nextJ = j;

	if (nextI < 0) nextI = map.length - 1;
	if (nextJ < 0) nextJ = map[0].length - 1;
	if (nextI > map.length - 1) nextI = 0;
	if (nextJ > map[0].length - 1) nextJ = 0;

	return [nextI, nextJ];
}

function changeDir(dir, char) {
	if (char === "L") {
		if (dir === 3) return 1;
		if (dir === 2) return 0;
		if (dir === 1) return 2;
		if (dir === 0) return 3;
	}
	if (char === "R") {
		if (dir === 3) return 0;
		if (dir === 2) return 1;
		if (dir === 1) return 3;
		if (dir === 0) return 2;
	}
}
