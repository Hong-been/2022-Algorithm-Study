/**
 * @param {number[]} nums
 * @return {number}
 * time O(N) space O(1)
 */
 var jump = function(nums) {
  let jumpCnt = 0;
  let farthest = 0;
  let jumpMax=0;
  
  for(let i=0; i<nums.length-1; i++){
      farthest = Math.max(farthest, i+nums[i]);
      
      if(i === jumpMax){
          jumpCnt++;
          jumpMax = farthest;
      }
  }
  
  return jumpCnt;
};