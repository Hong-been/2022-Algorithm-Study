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


/*
수빈
time: O(N)
space: O(N)
*/
var jump = function(nums) {
    if(nums.length===1) return 0;
    
    const dp = new Array(nums.length).fill(0);
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<=i+nums[i]; j++){
            if(dp[j]===0) dp[j]=dp[i]+1;
            if(j===nums.length-1) break;
        }
    }
    return dp[nums.length-1];
};

/*
수빈
0 1 2 3 4 
2 3 1 1 4

currMax 2 
nextMax 4
cnt 2
 
time: O(N)
space: O(1)
*/
var jump = function(nums) {
    if(nums.length===1) return 0;
    
    let cnt = 0;
    let currMax = 0, nextMax = 0;
    for(let i=0; i<nums.length-1; i++){
        nextMax = Math.max(nextMax, i+nums[i]);
        if(i === currMax){
            cnt++;
            currMax = nextMax;
        }
    }
    return cnt;
};