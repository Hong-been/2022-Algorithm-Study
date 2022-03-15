/**
 * @param {character[][]} grid
 * @return {number}
 time O(NM), space O(1) + O(NM) for call stack
 
 */
 var numIslands = function(grid) {
  let ans=0;
  const moves = [[0,1],[0,-1],[1,0],[-1,0]];
  
  const dfs = (i,j)=>{
      // grid[i][j] 방문처리
      grid[i][j]='-1';
      
      // 동서남북보면서 1인곳으로 재귀들어감
      for(let [r,c] of moves){
          const I = i+r;
          const J = j+c;
          
          //check index is valid
          if(I<0 || J<0 || I>=grid.length || J>=grid[0].length || grid[I][J]!=='1') continue;
          
          // if valid, dfs(newI,newJ)
          dfs(I,J);
      }
  }
  
  for(let i=0; i<grid.length; i++){
      for(let j=0; j<grid[0].length; j++){
          if(grid[i][j]==='1'){
              dfs(i,j);
              ans++;
          }
      }
  }
  
  return ans;
};