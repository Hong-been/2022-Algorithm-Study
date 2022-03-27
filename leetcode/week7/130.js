/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 
 테두리를 보면서 v처리
 비짓처리된 O는 냅두고,
 방문안한 O를 만나면 X로 바꾼다.
 */
 var solve = function(board) {
  const move = [[0,1],[0,-1],[1,0],[-1,0]];
  const visited = [...Array(board.length)].map((v,i)=>[...Array(board[0].length)].fill(0));
  
  const dfs = (i,j) => {
      for(let m of move){
          const I = i+m[0];
          const J = j+m[1];
          
          if(I<0 || J<0 || I >=board.length || J>=board[0].length || board[I][J]==="X" || visited[I][J]) continue;
          
          visited[I][J]=1;
          dfs(I,J);
      }
  }
  
  for(let j=0; j<board[0].length; j++){
      if(board[0][j]==="O" && visited[0][j]===0){
          visited[0][j]=1;
          dfs(0,j);
      }
  }
  for(let j=0; j<board[0].length; j++){
      if(board[board.length-1][j]==="O" && visited[board.length-1][j]===0){
          visited[board.length-1][j]=1;
          dfs(board.length-1,j);
      }
  }
  for(let i=0; i<board.length; i++){
      if(board[i][0]==="O" && visited[i][0]===0){
          visited[i][0]=1;
          dfs(i,0);
      }
  }
  for(let i=0; i<board.length; i++){
      if(board[i][board[0].length-1]==="O" && visited[i][board[0].length-1]===0){
          visited[i][board[0].length-1]=1;
          dfs(i,board[0].length-1);
      }
  }
  
  for(let i=0; i<board.length; i++){
      for(let j=0; j<board[0].length; j++){
          if(board[i][j]==="O" && visited[i][j]===0){
              board[i][j]="X";
          }
      }
  }
  
};

/*
수빈
4방향이 X로 둘러싸여진 O들을 다 X로 바꿔버리자.
테두리 O는 못바꿈. 테두리에 있는 O랑 이어져있는 애들도 못바꿈.
-> 테두리 O를 찾아서 걔랑 이어져있는 애들만 O로 남기고 나머지는 다 X로 바꾸자.

*/
var solve = function(board) {
    const m = board.length;
    const n = board[0].length;
    
    //세로 두줄
    for(let i=0; i<m; i++){
        if(board[i][0]==="O") dfs(board, i,0);
        if(board[i][n-1]==="O")  dfs(board, i, n-1);
    }
    //가로 두줄
    for(let i=0; i<n; i++){
        if(board[0][i]==="O") dfs(board, 0, i);
        if(board[m-1][i]==="O") dfs(board, m-1, i);
    }
    //console.log(board)
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if(board[i][j]==="#") board[i][j]="O";
            else if(board[i][j]==="O") board[i][j]="X";
        }
    }
    
    function dfs(board, i, j){
        if(i<0 || j<0 || i>=board.length || j>=board[0].length || board[i][j]!=="O") return;
        board[i][j]="#";
        const dir=[[-1,0],[1,0],[0,-1],[0,1]];
        for(let [dx, dy] of dir){
            dfs(board, i+dx, j+dy);
        }
    }
    
    return board;
};