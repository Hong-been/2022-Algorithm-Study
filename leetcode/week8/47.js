/**
 * @param {number[]} nums
 * @return {number[][]}
 
 time O(N! + NlogN) space O()
 */
 var permuteUnique = function(nums) {
  const ans=[];
  
  nums.sort((a,b)=>a-b);
  
  const dfs = (path,unused)=>{
      if(path.length===nums.length){
          ans.push([...path]);
          return;
      }
      
      // console.log(path,unused);
      for(let i=0; i<unused.length; i++){
          if(i===0) {
              path.push(unused[i]);
              dfs(path,unused.slice(1));
              path.pop();
              continue;
          }
          
          if(unused[i]===unused[i-1]) continue;
          
          path.push(unused[i]);
          dfs(path,unused.slice(0,i).concat(unused.slice(i+1)));
          path.pop();
      }
  }
  
  dfs([],nums);
  
  return ans;
};