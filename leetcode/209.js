/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 
 같거나 부족하면 r++ 하면서 늘리고
 크면 l++하면서 줄인다
 time O(N), space O(1)
 */
 var minSubArrayLen = function(target, nums) {
  const sum = nums.reduce((acc,val)=>acc+val,0);
  if(sum < target) return 0;
  
  let l=0;
  let r=0;
  let ans = nums.length;
  let cur = nums[r];
      
  while(r<nums.length){
      if(cur <= target) {
          if(cur===target) ans = Math.min(ans, r-l+1);
          r++;
          cur+=nums[r];
          continue;
      }
      ans = Math.min(ans, r-l+1);
      cur-=nums[l];
      l++;
  }
  
  return ans;
};