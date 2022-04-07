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

/*
수빈
 
1을 만나면 dfs로 상하좌우 계속 보다가
범위 밖이거나 값이 0이면 dfs종료.
이미 본 값은 0로 바꿔줌.
dfs종료되서 나오면 result++해준다.

time: O(M*N)
space: O(1) +  O(N*M) for call stack
*/
var numIslands = function(grid) {
    let result = 0;
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j]==="1"){
                dfs(grid, i, j);
                result++;
            }
        }
    }
    return result;
};

function dfs(grid, i, j){
    // dfs 종료조건
    if(i<0 || j<0 || i>= grid.length || j >= grid[0].length || grid[i][j]==="0") return;
    
    // 확인한 값은 0으로 바꿔줌
    grid[i][j] = "0";
    
    // 상하좌우 dfs로 보기
    const dir = [[-1,0], [1,0], [0,-1], [0,1]];
    for(let [x,y] of dir){
        dfs(grid, i+x, j+y);   
    }
    return;
}