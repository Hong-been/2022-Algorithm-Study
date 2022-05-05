/**
 * @param {number[]} nums
 * @return {boolean}
 
 도달가능한 가장 마지막 인덱스를 갱신하면서 간다.
 이 인덱스랑 차이나는 걸 커버할만큼 점프가능하면 갱신.
 [0]이 가능이면 가능.
 
 time O(N) space O(1)
 */
 var canJump = function(nums) {
  if(nums.length===1) return true;
  if(nums.length===2) return nums[0] ? true : false;
  
  let last = nums.length-1;
  
  for(let i=nums.length-2 ; i>=0; i--){
      const need = last - i;
      
      if(need <= nums[i]){
          last = i;
          if(i===0) return true;
      }
  }
  
  return false;
};


/*
수빈
time: O(N)
space: O(N)
*/
var canJump = function(nums) {
    if(nums.length === 1) return true;
    if(nums[0]===0) return false;
    
    const dp= new Array(nums.length).fill(false);
    let maxIdx = 0;
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]===0 && i>=maxIdx) return false;
        if(nums.length-1 <= i+nums[i]) return true;
        
        dp[i+nums[i]] = true;
        maxIdx = Math.max(maxIdx, i+nums[i]);
    }
    return false;
};