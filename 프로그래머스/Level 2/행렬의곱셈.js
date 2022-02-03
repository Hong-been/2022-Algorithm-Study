// 행렬의 곱셈

/*
수빈
time: O()
space: O(A행 * B열)
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