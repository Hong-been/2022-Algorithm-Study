/*
홍빈 하 현타와.....
- time O()
- space
*/
function solution(new_id) {
  const s2 = new_id.replace(/[A-Z]/g, x => x.toLowerCase()).match(/[a-z0-9\-\_\.]/g).join('');
  const s3 = s2.replace(/\.{2,}/g, x=>'.');
  const tmp = s3.charAt(0) === '.' ? s3.slice(1,s3.length) : s3;
  const s4 = tmp.charAt(tmp.length-1) === '.' ? tmp.slice(0,tmp.length-1) : tmp;
  //s5
  let s5=s4;
  if(!s4.length) s5 = s4.concat("a");
  
  let s6 = s5.slice(0,15);
    
  if(s6.charAt(14)==='.') s6 = s6.slice(0,s6.length-1);  
  
  if(s6.length > 2) return s6;
  
  while(s6.length!==3){
      s6 = s6.concat(s6.charAt(s6.length-1));
  }
  return s6;
}

function bestsolution(new_id) {
  const answer = new_id
     .toLowerCase() // 1
     .replace(/[^\w-_.]/g, '') // 2
     .replace(/\.+/g, '.') // 3
     .replace(/^\.|\.$/g, '') // 4
     .replace(/^$/, 'a') // 5
     .slice(0, 15).replace(/\.$/, ''); // 6
  const len = answer.length;
  return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

/*
수빈
*/
function solution(new_id) {
  var answer = '';
  //1단계 대문자 -> 소문자
  new_id = new_id.toLowerCase();
  
  //2단계 소문자, 숫자, -, _, . 제외한 문자 제거
  new_id = new_id.replace(/[^a-z0-9-_.]/g,"");
  
  //3단계 . 연속사용된거 .으로 바꿔줌
  new_id = new_id.replace(/\.+/g, ".");
  
  //4단계 처음 끝 . 삭제
  new_id = new_id.replace(/^\.|\.$/g, "");
  
  //5단계
  new_id = new_id.replace(/^$/, "a");
  
  //6단계
  if(new_id.length>=16) {
      new_id = new_id.slice(0,15).replace(/\.$/,"");
  }
  
  //7단계
  while(new_id.length<=2){
      new_id += new_id.charAt(new_id.length-1);
  }
  
  answer = new_id;
  return answer;
}