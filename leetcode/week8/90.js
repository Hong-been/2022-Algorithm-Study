/**
 * @param {number[]} nums
 * @return {number[][]}
 
 time O(N*2^N), space O(N)

 */
 var subsetsWithDup = function(nums) {
  const ans=[];
  const dfs = (path,index)=>{
      if(index===nums.length){
          ans.push([...path]);
          return;
      }
      
      dfs([...path,nums[index]],index+1);
      
      while(nums[index]===nums[index+1]){
          index++;
          if(index === nums.length-1) break;
      }
      
      dfs([...path],index+1);
  }
  
  nums.sort((a,b)=>a-b);
  dfs([],0);
  
  return ans;
};