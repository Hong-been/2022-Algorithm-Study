/**
 * @param {number[]} nums
 * @return {number}
  dp: 내 앞에서 가장 작은수랑 이었을때 가장 길게 이어질 수 있는 길이
  time O(N^2) space O(N)
 */
  var lengthOfLIS_me = function(nums) {
    const dp = Array(nums.length).fill(1);
    
    for(let i=1; i<nums.length; i++){
        // 0~i-1중에서 nums[i]보다 작은 수 중 dp값이 가장 큰거 +1
        let max=0;
        for(let j=i-1; j>=0; j--){
            if(nums[j] < nums[i]) max = Math.max(max, dp[j]);
        }
        dp[i]=max+1;
    }
    
    return Math.max(...dp);
};