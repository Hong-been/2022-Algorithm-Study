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

/*
수빈
time: O(NlogN)+O(C^T)
space: O(C)
*/
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b);
    let result=[];
    backtracking(candidates, target, [], 0);
    return result;
    
    function backtracking(candidates, target, comb, start){
        if(target < 0) return;
        else if(target === 0){
            result.push([...comb]);
            return;
        }
        
        for(let i=start; i<candidates.length; i++){
            if(i>start && candidates[i] === candidates[i-1]) continue;
            comb.push(candidates[i]);
            backtracking(candidates, target-candidates[i], comb, i+1);
            comb.pop();
        }
    }
};