/**
 * @param {number[]} nums
 * @return {number[][]}

time O(N * 2^N) space O(N * 2^N) for answer
 */
var subsets = function(nums) {
  const ans=[];
  
  for(let i=0;i<Math.pow(2,nums.length); i++){
      const cur = i.toString(2).padStart(nums.length,'0');
      const set=[];
      
      for(let b=0; b<nums.length;b++){
          if(cur[b]==='1'){
              set.push(nums[b]);
          }
      }
      ans.push(set);
  }
  
  return ans;
};


/*
수빈
time: O(2^N)
space: O(N * 2^N) for arr
*/
var subsets = function(nums) {
    let result = [];
    backtracking([], 0);
    
    function backtracking(arr, index){
        result.push([...arr]);
        for(let i=index; i<nums.length; i++){
            arr.push(nums[i]);
            backtracking(arr, i+1);
            arr.pop();    
        }        
    }
    return result;
};