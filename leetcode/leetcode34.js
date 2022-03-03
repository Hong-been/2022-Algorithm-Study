/*
수빈
 0 1 2 3 4 5
 5,7,7,8,8,10 target:8
       ^    ^
          ^  
 [1]
[0,0] 리턴

time: O(logN)
space: O(1)
 */
var searchRange = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let res = [-1, -1];
  
  //시작점 찾기
  while(left <= right){
      let mid = Math.floor((left+right)/2);
      if(nums[mid] < target) {
          left = mid + 1;
      } else if(nums[mid] > target){
          right = mid - 1;
      } else {
          if(mid === 0 || nums[mid-1] !== target){
              res[0] = mid;
              break;
          }
          right = mid - 1;
      }
  }
  //console.log(mid)
  //끝점 찾기
  left = 0;
  right = nums.length -1;
  while(left <= right){
      let mid = Math.floor((left+right)/2);
      if(nums[mid] < target) {
          left = mid + 1;
      } else if(nums[mid] > target){
          right = mid - 1;
      } else {
          if(mid === nums.length-1 || nums[mid+1] !== target){
              res[1] = mid;
              break;
          }
          left = mid + 1;
      }
  }
  return res;
}