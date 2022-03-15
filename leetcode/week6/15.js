/**
 * @param {number[]} nums
 * @return {number[][]}
 
 time O(N^2), space O(1)
 */
 var threeSum = function(nums) {
  if(nums.length<3) return [];
  const ans=[];
  
  nums.sort((a,b)=>a-b);
  
  for(let i=0; i<nums.length-2; i++){
      if(i>0 && nums[i]===nums[i-1]) continue;
      
      const need = 0-nums[i];
      let l=i+1;
      let r=nums.length-1;
      
      while(l<r){
          const twoSum = nums[l]+nums[r];
          if(need <= twoSum) {
              if(need===twoSum) ans.push([nums[i],nums[l],nums[r]]);
              while(r>=0 && nums[r]===nums[r-1]){
                  r--;
              }
              r--;
              continue;
          }
          while(l<nums.length && nums[l]===nums[l+1]){
              l++;
          }
          l++;
      }
  }
  return ans;
};