/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 
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
