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