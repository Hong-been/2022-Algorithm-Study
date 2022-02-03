// 홍빈
function solution(arr1, arr2) {
	const ans = [...Array(arr1.length)].map((x) => Array(arr2[0].length).fill(0));

	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2[0].length; j++) {
			const row = arr1[i];
			ans[i][j] = row.reduce((acc, v, r) => acc + v * arr2[r][j], 0);
			// for(let a=0;a<arr2.length;a++){
			//     ans[i][j]+=arr1[i][a]*arr2[a][j];
			// }
		}
	}

	return ans;
}
