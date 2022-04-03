/**
 * @param {number} n
 * @return {string[]}
 
time O(2^N) space O(N)
 */
 var generateParenthesis = function(n) {
  const ans = [];
  
  const dfs = (path, open, close)=>{
      if(open===close && open===n){
          ans.push([...path]);
          return;
      }
      
      // open 추가
      if(open+1 <= n){
          path.push("(");
          dfs(path,open+1,close);
          path.pop();    
      }
      
      // close 추가
      if(open >= close+1 && close+1 <= n){
        path.push(")");
        dfs(path,open,close+1);
        path.pop();
      }
  }
  
  dfs(["("],1,0);
  
  return ans.map(i=>i.join(""));
};


/*
수빈
time: O(2^N)
spcae: O(N)
*/
var generateParenthesis = function(n) {
  let result = [];
  backtracking(n, "", 0, 0);
  return result;
  
  function backtracking(n, comb, open, close){
      if(comb.length===2*n) result.push(comb);
      if(n>open) backtracking(n, comb+"(", open+1, close);
      if(open>close) backtracking(n, comb+")", open, close+1);
  }
};