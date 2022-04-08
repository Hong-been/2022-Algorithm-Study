/**
 * @param {number[]} nums
 * @return {number}
 
 nums.length-3까지만 ㅇㅋ
 3칸짜리가 하나씩 추가될때마다 cnt를 누적증가시키고, cnt를 정답에 더한다
 time O(N) space O(1)
 */
 var numberOfArithmeticSlices = function(nums) {
  if(nums.length < 3) return 0;
  
  let ans = 0;
for (let i = 2, cnt = 0; i < nums.length; i++){
      ans += (nums[i] - nums[i-1] === nums[i-1] - nums[i-2]) 
              ? ++cnt 
              : (cnt = 0);
      // console.log(i,cnt,ans)
  }
  
return ans;
};
