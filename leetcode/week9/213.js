/**
 * @param {number[]} nums
 * @return {number}
 * time O(N) space O(1)
 */
 var rob = function(nums) {
  if(nums.length <= 3) return Math.max(...nums);
  
  const getMax = (arr)=>{
      if(arr.length <= 2) return Math.max(...arr);
      
      let rob1=0; //안털떄
      let rob2=0; //털떄 여기에 더한다.
      
      for(let i=0;i<arr.length; i++){
          const temp = Math.max(rob2+arr[i],rob1);
          [rob1, rob2] = [temp,rob1];
          // console.log(rob2,rob1)
      }
      
      return rob1;
  }
  
  return Math.max(getMax(nums.slice(0,nums.length-1)),getMax(nums.slice(1)));
};


/*
수빈
time: O(N)
space: O(1)
*/
var rob = function(nums) {
    // edge case
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    
    return Math.max(helper(nums.slice(0, nums.length-1)), helper(nums.slice(1)));
};

function helper(nums){
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return Math.max(nums[0], nums[1]);
    
    const dp = [nums[0], Math.max(nums[0], nums[1])];
    for(let i=2; i<nums.length; i++){
        dp[i] = Math.max(nums[i]+dp[i-2], dp[i-1]);
    }
    return dp[dp.length-1];
}