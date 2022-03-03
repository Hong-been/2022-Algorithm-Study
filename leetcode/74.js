/*
수빈
time: O(m*logn)
space: O(1)
*/
var searchMatrix = function(matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  
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