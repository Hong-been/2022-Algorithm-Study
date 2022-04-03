/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 
 sorting
 내꺼에서 더하다가 타겟보다 크면 뒤에걸 더할필요가 없음.
 time O(N^target) space O(target)
 */
 var combinationSum = function(cands, target) {
  const ans = [];
  
  // path,sum에 index를 넣어봐서 타겟과 같으면 정답에 추가하고 return
  // 타겟보다 작으면 index를 추가하고 재귀
  const dfs = (path,sum,index)=>{
      for(let i=index; i<cands.length; i++){
          if(sum+cands[i]===target){
              ans.push([...path,cands[i]]);
              return;
          }
          if(sum+cands[i] < target){
              dfs([...path, cands[i]], sum+cands[i], i);    
          }else return;
      }
  }
  
  cands.sort((a,b)=>a-b);
  dfs([],0,0);
  return ans;
};


/*
수빈

target: 7일때
2 선택 -> "5" -> 2 선택 -> "3" -> 2 선택 -> 1 -> 2 선택 -> "-1" 0보다 작으니까 그냥 리턴
                      x       -> 3 선택 -> 0이니까 result에 [2,2,3] push

time: O(C^T)
space: O(C)
*/
var combinationSum = function(candidates, target) {
    let result=[];
    backtracking(0, candidates, target, [], result);
    return result;
};

function backtracking(start, candidates, target, comb){
    if(target<0) return;
    else if(target===0) result.push([...comb]);
    for(let i=start; i<candidates.length; i++){
        comb.push(candidates[i]);
        backtracking(i, candidates, target-candidates[i], comb, result);
        comb.pop();
    }
}