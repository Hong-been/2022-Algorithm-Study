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
