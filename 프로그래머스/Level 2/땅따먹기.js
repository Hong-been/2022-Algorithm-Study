// 땅따먹기

/*
수빈 Solution #1
time: O(N)
space: O(N)
*/
function solution(land) {
	var answer = 0;
	let dp = Array.from({ length: land.length }, () =>
		new Array(land[0].length).fill(0)
	);

	// base case
	for (let i = 0; i < 4; i++) {
		dp[0][i] = land[0][i];
	}

	for (let i = 1; i < dp.length; i++) {
		for (let j = 0; j < 4; j++) {
			let choiceLand = dp[i - 1][j];

			for (let k = 0; k < 4; k++) {
				//j가 0이라면 1,2,3만 택하고 싶다.
				if (j === k) continue;
				dp[i][k] = Math.max(dp[i][k], choiceLand + land[i][k]);
			}
		}
	}

	for (let i = 0; i < 4; i++) {
		answer = Math.max(answer, dp[dp.length - 1][i]);
	}

	return answer;
}

/*
수빈 Solution #2
time: O(N)
space: O(1)
*/
function solution(land) {
	var answer = [];
	for (let i = 1; i < land.length; i++) {
		land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
		land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
		land[i][2] += Math.max(land[i - 1][1], land[i - 1][0], land[i - 1][3]);
		land[i][3] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][0]);
	}

	answer = land[land.length - 1];

	return Math.max(...answer);
}

// 홍빈
// time O(N)
// space O(1)
function solution(land) {
	let dp = [...land[0]];

	for (let i = 1; i < land.length; i++) {
		const curDp = [];

		for (let j = 0; j < land[0].length; j++) {
			const cur = land[i][j];
			let max = 0;

			// dp에서 j랑 다른인덱스 중 최댓값 찾기
			for (let d = 0; d < dp.length; d++) {
				if (d === j) continue;
				if (max < dp[d]) {
					max = dp[d];
				}
			}
			// 그 최댓값이랑 cur이랑 더해서 dp[i][j]에 갱신
			curDp.push(max + cur);
		}
		dp = [...curDp];
		// console.log(dp);
	}

	return Math.max(...dp);
}
