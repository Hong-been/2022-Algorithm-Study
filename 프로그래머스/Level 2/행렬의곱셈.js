// 행렬의 곱셈

/*
수빈
N1 :arr1.length, M1 : arr1[0].length
N2 : arr2.length, M2: arr2[0].length
time: O(N1 * M2 * (M1*N2))
space: O(N1 * M2)
*/
function solution(arr1, arr2) {
  var answer = Array.from(Array(arr1.length), ()=> Array(arr2[0].length).fill(0));
  for(let i=0; i<arr1.length; i++){
      for(let j=0; j<arr1[0].length; j++){
          for(let k=0; k<arr2[0].length; k++){
              answer[i][k] += arr1[i][j] * arr2[j][k];
          }
      }
  }
  return answer;
}


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
