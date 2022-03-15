/*    
수빈
      0 1 2 3 4 5 6
      4 5 6 7 0 1 2
left          ^        
right             ^
              ^
midIdx 찾기.
target은 0.

        1
      6 7 0 1 2 4 5
left  ^
right       ^
        ^
        
        0 1 2 3 4
        ^
                ^
            ^           
time: O(logN)
space: O(1)
*/
var search = function(nums, target) {
  if(!nums) return -1;
  
  let left = 0, right = nums.length-1;
  
  while(left < right){
      const mid = left + Math.floor((right - left)/2);
      
      if(nums[mid]===target) return mid;
      
      if (nums[mid] < nums[right]) {
          if (target > nums[mid] && target <= nums[right]) {
              left = mid + 1;
          } else {
              right = mid;
          }
      } 
      else {
          if (target > nums[mid] || target < nums[left]) {
              left = mid + 1;
          } else {
              right = mid;
          }
      }
  }
  return nums[left] === target ? left : -1;
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 
 홍빈
 pivot찾고, 이걸 기준으로 오른쪽볼지, 왼쪽볼지 정한다.
 
 time O(logN)
 space O(1)
*/
var search = function(nums, t) {
  let l=0;
  let r=nums.length-1;
  
  while(l<r){
      const m = Math.floor((l+r)/2);
      if(nums[l]>nums[r]){
          if(nums[l]<=nums[m] && nums[m]>nums[r]) l=m+1;
          else r=m;
      } else r=m;
  }
  
  const pivot = l;
  l=0;
  r=nums.length-1;
  
  if(nums[pivot]<=t && t<=nums[r]) l=pivot;
  else r=pivot;
  
  while(l<r){
      const m = Math.floor((l+r)/2);
      
      if(nums[m]===t) return m;
      
      if(nums[m]<t) l=m+1;
      else r=m-1;
  }
  
  if(nums[l]===t) return l;
  return -1;
};