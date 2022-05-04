/**
 * @param {number[]} nums
 * @return {number}
 
 1차오답 [1,2,4,3,5,4,7,2]
 2차오답 [1,1,1,2,2,2,3,3,3]
 3차오답 [1,2,3,1,2,3,1,2,3]
 
 time O(N^2) space O(N)
 */
 var findNumberOfLIS = function(nums) {
  const dp=Array(nums.length).fill(1);
  const count=Array(nums.length).fill(1);
  
  for(let i=nums.length-1; i>=0; i--){
      for(let j=i+1; j<nums.length; j++){
          if(nums[i]>=nums[j]) continue;
          
          if(dp[i]-1 === dp[j]) count[i]+=count[j];
          else if(dp[i]-1 < dp[j]){
              dp[i] = dp[j]+1;
              count[i] = count[j];
          }
      }
  }
  // console.log(dp,count)
  // max값이 하나라면 그 count값이 정답
  // Max가 여러개면 max의 카운트를 모두 더한값이 정답
  const max = Math.max(...dp);
  const maxCount = dp.filter(x=>x===max).length;
  
  if(maxCount===1) return count[dp.indexOf(max)];
  let acc=0;
  for(let i=0; i<dp.length; i++){
      if(dp[i]===max) acc+=count[i];
  }
  return acc;
};


/*
수빈
0 1 2 3 4
1 3 5 4 7
        ^ 
      ^

1 2 3 3 4
1 1 1 1 2

time: O(N^2)
space: O(N)
*/
var findNumberOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(1);
    const count = new Array(nums.length).fill(1);
    let max = 1;
    let answer = 0;
    
    for(let i=1; i<nums.length; i++){
        for(let j=0; j<i; j++){
            if(nums[i]>nums[j]){
                if(dp[j]+1 > dp[i]){
                    dp[i] = dp[j]+1;
                    count[i] = count[j];
                } else if(dp[j]+1 === dp[i]){
                    count[i] += count[j];
                }
            }
        }
        max = Math.max(max, dp[i]);
    }
    
    for(let i=0; i<dp.length; i++){
        if(dp[i]===max) answer+=count[i];
    }

    return answer;
};