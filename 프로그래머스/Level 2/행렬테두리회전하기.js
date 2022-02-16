/*
홍빈
r: input row, c: input column, q: queries length
- time O(rcq)
- space O(rc) + O(q) for answer
r1,c1에서 r2,c2까지 증가하면서 st에 쌓아놓기
*/
function solution(r, c, queries) {
  const ans=[];
  const board = Array.from({length:r+1},(row,ri)=>[...Array(c+1)].map((v,vi)=>ri ? (ri-1)*c+vi : ri));
  
  const minInOutline = ([r1,c1,r2,c2]) => {
      let min=r*c;
      const st=[];

      // 문제에서 항상 셋팅되어서 주어짐
      // if(r1 > r2) [r1,r2] = [r2,r1];
      // if(c1 > c2) [c1,c2] = [c2,c1];
      
      for(let c=c1;c<c2;c++){
        st.push(board[r1][c]);
        min = Math.min(min, st[st.length-1]);
      }
      for(let r=r1;r<r2;r++){
        st.push(board[r][c2]);
        min = Math.min(min, st[st.length-1]);
      }
      for(let c=c2;c>c1;c--){
        st.push(board[r2][c]);
        min = Math.min(min, st[st.length-1]);
      }
      for(let r=r2;r>r1;r--){
        st.push(board[r][c1]);
        min = Math.min(min, st[st.length-1]);
      }
      
      for(let r=r1;r<r2;r++){
        board[r][c1]=st.pop();
      }
      for(let c=c1;c<c2;c++){
        board[r2][c]=st.pop();
      }
      for(let r=r2;r>r1;r--){
        board[r][c2]=st.pop();
      }
      for(let c=c2;c>c1;c--){
        board[r1][c]=st.pop();
      }
      
      return min;
  }
  
  for(let q of queries){
    ans.push(minInOutline(q));
  }
  
  return ans;
}

/* -------------------------------------------------------------------- */

/*
수빈
R: matrix row, C: matrix column, A: queries.length
- time O(RC + QRC)
- space O(RC) + O(A) for answer
*/
function solution(rows, columns, queries) {
  var answer = [];
  // base case
  const matrix = Array.from(Array(rows), () => new Array(columns));
  let num = 1;
  for(let i=0; i<rows; i++){
      for(let j=0; j<columns; j++){
          matrix[i][j] = num;
          num++;
      }
  }
  // rotate
  for (let rotP of queries) {
      let startX = rotP[0]-1;
      let startY = rotP[1]-1;
      let endX = rotP[2]-1;
      let endY = rotP[3]-1;
      
      let rotate_elem_list = [];
      let min = Number.MAX_VALUE;
      //오른쪽 (startX,startY)~(startX,endY) (1,1)~(1,3)
      for(let i=startY; i<endY; i++){
          rotate_elem_list.push(matrix[startX][i]);
          min = Math.min(min, matrix[startX][i]);
      }
      //아래 (startX,endY)~(endX,endY) (1,3)~(4,3)
      for(let i=startX; i<endX; i++){
          rotate_elem_list.push(matrix[i][endY]);
          min = Math.min(min, matrix[i][endY]);
      }
      //왼쪽 (endX,endY)~(endX,startY) (4,3)~(4,1)
      for(let i=endY; i>startY; i--){
          rotate_elem_list.push(matrix[endX][i]);
          min = Math.min(min, matrix[endX][i]);
      }
      //위 (endX~startY)~(startX,startY) (4,1)~(1,1)
      for(let i=endX; i>startX; i--){
          rotate_elem_list.push(matrix[i][startY]);
          min = Math.min(min, matrix[i][startY]);
      }
      //console.log(rotate_elem_list)
      answer.push(min);
      
      //반대로 pop하며 넣기
      //아래 (startX+1~startY)~(endX~startY) (1,1)~(4,1)
      for(let i=startX; i<endX; i++){
          matrix[i][startY] = rotate_elem_list.pop();
      }
      //오른쪽 (endX~startY)~(endX,endY) (4,1)~(4,3)
      for(let i=startY; i<endY; i++){
          matrix[endX][i] = rotate_elem_list.pop();
      }
      //위 (endX,endY)~(startX,endY) (4,3)~(1,3)
      for(let i=endX; i>startX; i--){
          matrix[i][endY] = rotate_elem_list.pop();
      }
      //왼쪽 (startX,endY)~(startX,startY) (1,3)~(1,1)
      for(let i=endY; i>startY; i--){
          matrix[startX][i] = rotate_elem_list.pop();
      }
      
      //console.log(rotate_elem_list)
  }
  
  return answer;
}