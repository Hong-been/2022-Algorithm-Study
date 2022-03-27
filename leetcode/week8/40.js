/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 * time O(N^T) space O(N)
 */
 var combinationSum2 = function(candis, target) {
  const ans = [];
  // index을 썸에 넣어봐서 타겟이랑 같으면 정답, Return
  //타겟보다 작으면 재귀.
  const dfs = (path,sum,index)=>{
      for(let i=index; i<candis.length; i++){
          if(i>0 && i!==index && candis[i]===candis[i-1]) continue;
          
          if(sum+candis[i] === target){
              ans.push([...path,candis[i]]);
              return;
          }
          if(sum+candis[i] < target) dfs([...path,candis[i]],sum+candis[i],i+1);
          else return;
      }
  }
  candis.sort((a,b)=>a-b);
  dfs([],0,0);
  
  return ans;
};