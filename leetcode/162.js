/*
수빈

 1 2 3 1
     ^
       ^
     ^
time: O(logN)
space:O(1)
 */
var findPeakElement = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  
  while(left < right){
      let mid = Math.floor((left+right)/2);
      //console.log(left, right, mid)
      if(nums[mid]<nums[mid+1]){
          left = mid + 1;
      } else {
          right = mid;
      }
  }
  return left;
};