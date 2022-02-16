/*
홍빈
N : board.length, M: board[0].length
time O(NM)
space O(1)
 */
function solution(board) {
	if (!board) return 0;
	if (board.length === 1) {
		for (let x of board) {
			if (x) return 1;
		}
		return 0;
	}

	let len = 0;

	for (let i = 1; i < board.length; i++) {
		for (let j = 1; j < board[0].length; j++) {
			if (!board[i][j]) continue;

			board[i][j] =
				Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
			len = Math.max(len, board[i][j]);
		}
	}

	return len * len;
}

/************************************************/

/*
수빈
N: board.length
M: board[0].length
time: O(NM)
space: O(1)
*/
function solution(board)
{
    let max = 0;
    
    // edge case
    if(board.length <= 1 || board[0].length <=1){
        for(let i=0; i<board.length; i++){
            for(let j=0; j<board[0].length; j++){
                return board[i][j]===1 ? 1 : 0;
            }
        }
    }
    
    for(let i=1; i<board.length; i++){
        for(let j=1; j<board[0].length; j++){
            if(board[i][j]===1){
                board[i][j] = Math.min(board[i][j-1], board[i-1][j-1], board[i-1][j]) + 1;
                max = Math.max(board[i][j], max);
            }
        }
    }
    
    return max*max;
}