/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 L: word length
 time O(NM*4^L) space O(1)
 */
 var exist = function(board, word) {
  if(board.length * board[0].length < word.length) return false;
  
  const moves = [[0,1],[0,-1],[1,0],[-1,0]];
  // [r][c]의 동서남북에서 word[index]를 찾아야 함.
  const dfs = (r,c,index)=>{
      if(index === word.length) return true;
      
      const need = word[index];
      
      for(let m of moves){
          const R = r+m[0];
          const C = c+m[1];
          
          if(R<0 || C<0 || R>=board.length || C>=board[0].length || board[R][C]!==need) continue;
          
          const origin = board[R][C];
          board[R][C]='#';
          if(dfs(R,C,index+1)) return true;
          board[R][C]=origin;
      }
      
  }
  
  for(let i=0; i<board.length; i++){
      for(let j=0; j<board[0].length; j++){
          if(board[i][j]!==word.charAt(0)) continue;
          
          const origin = board[i][j];
          board[i][j]='#';
          if(dfs(i,j,1)) return true;
          board[i][j]=origin;
      }
  }
  
  return false;
};

/*
수빈
time: O(M*N*4^W)
space: O(1)
*/
var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;
    //edge
    if(m*n < word.length) return false;
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            //첫번째 문자 찾으면 찾아보기
            if(board[i][j]===word[0]){
                if(backtracking(i, j, 0)) return true;   
            }
        }
    }
    return false;
    
    function backtracking(i, j, wIdx){
        if(i<0 || j<0 || i>=m || j>=n || word[wIdx] !== board[i][j]) return false;
        if(wIdx === word.length-1) return true;
        
        let curCell = board[i][j];
        board[i][j] = "#";
        
        //상하좌우 보기
        const result = 
        backtracking(i-1, j, wIdx+1) ||
        backtracking(i, j+1, wIdx+1) ||
        backtracking(i+1, j, wIdx+1) ||
        backtracking(i, j-1, wIdx+1);
        
        board[i][j] = curCell;
        return result;
    }
}
