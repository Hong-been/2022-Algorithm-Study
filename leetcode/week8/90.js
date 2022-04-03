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


/*
수빈
time: O(NlogN)+O(N*2^N)
space: O(N*2^N)
*/
var subsetsWithDup = function(nums) {
    let result = [];
    nums.sort((a,b) => a-b);
    backtracking(nums, [], 0);
    
    function backtracking(nums, subset, start){
        result.push([...subset]);
        for(let i=start; i<nums.length; i++){
            if(i===start || nums[i]!==nums[i-1]){
                subset.push(nums[i]);  
                backtracking(nums, subset, i+1);
                subset.pop();
            }
        }
    }
    return result;
};
