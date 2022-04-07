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


/*
[-1,0,1,2,-1,-4,-2,-3,3,0,4]

-4 -3 -2 -1 -1 0 0 1 2 3 4
          ^
                   ^
                 ^
                 
time: O(N^2)
space: O(1)
*/
var threeSum = function(nums) {
    if(!nums || nums.length<3) return [];
    let res = [];
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length-2; i++){
        //중복값인 경우 패스
        if(i>0 && nums[i]===nums[i-1]) continue;
        let left = i+1;
        let right = nums.length-1;
        while(left<right){
            let triplet = nums[i]+nums[left]+nums[right];
            //합이 0보다 크면 right를 왼쪽으로 
            if(triplet > 0){
                right--;
            }
            //합이 0보다 작으면 left를 오른쪽으로 
            else if(triplet < 0){
                left++;
            }
            else {
                res.push([nums[i],nums[left],nums[right]]);
                //중복값일때 처리
                while(nums[left]===nums[left+1] && left < right){
                    left++;   
                }
                while(nums[right]===nums[right-1] && left < right){
                    right--;    
                }
                left++;
                right--;
            }
        }
    }
    return res;
};