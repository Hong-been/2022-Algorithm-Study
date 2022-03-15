/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}

 작으면 정답+=r-l+1, r++
 크거나 같으면 l로 나누고 l++

 time O(N), spaceO(1)
 */
 var numSubarrayProductLessThanK = function(nums, k) {
  if(k<=1) return 0;
  
  let ans = 0;
  let l=0;
  let r=0;
  let cur = nums[r];
  
  while(r<nums.length){
      if(cur < k){
          ans += r-l+1;
          r++;
          cur *= nums[r];
      }else {
          cur /= nums[l];
          l++;
      }
  }
  
  return ans;
};