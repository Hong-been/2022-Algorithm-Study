//문자열압축

//홍빈
function solution(s) {
  // edge: s.len 0? return 0, s.len 1? return 1, s.len? return 2.
  if(s.length===0) return 0;
  if(s.length===1) return 1;
  if(s.length===2) return 2;
  
  let min = s.length;
  
  for(let u=1; u<s.length; u++){
      const words=sliceS(s,u);
      
      let i=0;
      let curMin=s.length;
      
      while(i<words.length){
          let sameCnt=1;
          while(words[i]===words[i+1] && i+1<words.length){
              sameCnt++;
              i++;
          }
          
          if(sameCnt>=10) curMin=curMin-u*(sameCnt-1)+2;
          else if(sameCnt > 1) curMin=curMin-u*(sameCnt-1)+1;
          else i++;
      }
      min = Math.min(min,curMin);
  }
  return min;
}

function sliceS(s,unit){
  const words=[];
  
  let i=0;
  while(i<s.length){
      if(i+unit >= s.length) words.push(s.slice(i));
      else words.push(s.slice(i,i+unit));
      i+=unit;
  }
  
  return words;
}

/*-----------------------------------------------*/

//수빈
function solution(s) {
let minCompStrLen=s.length;

for(let i=1; i<s.length; i++){
    let compStr = compressStr(s,i);
    minCompStrLen=Math.min(compStr.length, minCompStrLen);
}
return minCompStrLen;
}

function compressStr(str, cutLen){
let p1 = 0;
let p2 = p1 + cutLen;
let compStr = "";   
while(p1<str.length) {
    let charCnt = 1;
    let curChar = str.slice(p1, p1+cutLen); //a
    let nextChar = str.slice(p2, p2+cutLen); //a
    while(curChar === nextChar){
        charCnt++; //2
        p2+=cutLen;
        nextChar = str.slice(p2, p2+cutLen);
    }
    
    if(charCnt>1){
        compStr+=charCnt.toString();
        compStr+=curChar;
    }
    else {
        compStr+=curChar;
    }
    p1 = p2;
    p2 = p1 + cutLen;
}
return compStr;
}
