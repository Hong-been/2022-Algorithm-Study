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

      if(r1 > r2) [r1,r2] = [r2,r1];
      if(c1 > c2) [c1,c2] = [c2,c1];
      
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