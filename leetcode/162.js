/**
 * @param {number[]} nums
 * @return {number}
 
 m 양옆을 보고 더 큰쪽을 선택
 양옆이 다 작으면 정답
 time O(logN)
 space O(1)
 */
 var findPeakElement = function(nums) {
  if(nums.length===1) return 0;
  if(nums.length===2) return nums[0]<nums[1]? 1 : 0;
  
  let l=0;
  let r=nums.length-1;
  while(l<r){
      const m = Math.floor((l+r)/2);
      
      if(nums[m]<nums[m+1]) l=m+1;
      else if(nums[m]<nums[m-1]) r=m-1;
      else return m;
  }
  return l;
};