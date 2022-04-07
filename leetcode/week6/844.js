/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
       
둘다 밖으로 나오면 true
둘중하나라도 안끝났으면 false - 포인터가 #이었으면 계속 while돌테니까 ㅇㅇ
 */
var backspaceCompare = function(s, t) {
  let p1=s.length-1;
  let p2=t.length-1;

  while(p1>=0 || p2>=0){
      let cnt1=0;
      let cnt2=0;
      
      if(s[p1]===t[p2] && s[p1]!=='#'){
          p1--;
          p2--;
          continue;
      }
      
      if(s[p1]!==t[p2] && s[p1]!=='#' && t[p2]!=='#') break;
      
      while(p1>=0 && (s[p1]==='#' || cnt1>0)){
          if(s[p1]==='#') cnt1++;
          else cnt1--;
          p1--;
          if(p1<0) break;
      }
      
      while(p2>=0 && (t[p2]==='#' || cnt2>0)){
          if(t[p2]==='#') cnt2++;
          else cnt2--;
          p2--;
          if(p2<0) break;
      }
  }
  
  if(p1<0 && p2<0) return true;
  return false;
}


/*
수빈(stack사용)
time: O(N)
space: O(1)
*/
var backspaceCompare = function(s, t) {
    return backspace(s) === backspace(t) ? true : false;
};

function backspace(str){
    let stack=[];
    for(let i=0; i<str.length; i++){
        if(str[i]==="#") stack.pop();
        else stack.push(str[i]);
    }
    return stack.join("");
}
//-> two pointer로 다시풀기,,