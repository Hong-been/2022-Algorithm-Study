/*
수빈
time: O(m*logn)
space: O(1)
*/
var searchMatrix = function(matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  
  // row 찾는것도 binary search로 풀기
  for(let i=0; i<m; i++){
      if(target<matrix[i][n-1]){
          return binarySearch(matrix,i,target);
      }
      else if(target===matrix[i][n-1]) return true;
      
      // [[1],[3]] , 4
      if(i===m-1) return false;
  }
};

function binarySearch(matrix, idx, target){
  let left = 0;
  let right = matrix[idx].length - 1;
  
  while(left<=right){
      let mid = Math.floor((left+right)/2);
      if(matrix[idx][mid]===target) return true;
      else if(matrix[idx][mid]<target){
          left = mid + 1;
      } else if(matrix[idx][mid]>target) {
          right = mid -1;
      }
  }
  return false;
}


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 
홍빈

m이 작거나 같으면 m뒤를 선택
m이 더 커면 m앞을 선택 -> 최종 row

m===t? return true;
m이 더 작으면 m오른쪽
m이 더 크면 왼쪽

[l]이 정답인지 확인
time O(logN + logM)
spcae O(1)
 */
var searchMatrix = function(matrix, t) {
  let l=0;
  let r=matrix.length-1;
  
  while(l<r){
      const m = Math.ceil((l+r)/2);
      
      if(matrix[m][0]<=t) l=m;
      else r=m-1;
  }
  
  const row = l;
  
  l=0;
  r=matrix[row].length-1;
  
  while(l<r){
      const m = Math.floor((l+r)/2);
      
      if(matrix[row][m]===t) return true;
      
      if(matrix[row][m]<t) l=m+1;
      else r=m;
  }
  
  if(matrix[row][l]!==t) return false;
  return true;
};
