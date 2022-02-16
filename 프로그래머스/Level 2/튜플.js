/*
홍빈
N: s length
M: the number of {} groups
- time O(N * MlogM)..?
- space O(...?)
갯수대로 오름차순정렬하고
튜플에 새로운값을 하나씩 추가
*/
function solution(s) {
  const splitted = s.split('},').map(v=>v.match(/[\d]+/g)).sort((a,b)=>a.length - b.length);
  const answer=new Set();
  
  splitted.forEach(s => s.forEach(v=>{
          if(!answer.has(v)) answer.add(v);    
      }));
  
  return [...answer].map(v=>parseInt(v));
}


/*
수빈
*/
/*
튜플 조건
- 중복원소 가능, 원소에 정해진 순서 있음, 원소 개수 유한

input: 원소개수n개 + 중복원소없는 튜플
*/
function solution(s) {
  var tuple = [];

  //s문자열 배열로 변환
  let sArr = [];
  for(let i=1; i<s.length-1; i++){
      if(s[i]==="{"){
          let str = "";
          let j = i+1;
          while(s[j]!=="}"){
              str+=s[j];
              j++;
          }
          sArr.push(str.split(","));
      }
  }
  // 배열 길이대로 정렬
  sArr.sort((a,b)=>a.length-b.length);

  
  // 튜플 만들기
  for(let i=0; i<sArr.length; i++){
      let arr = sArr[i];
      for(let i=0; i<arr.length; i++){
          if(!tuple.includes(arr[i])){
              tuple.push(arr[i]);
          } 
      }
  }
  
  // 문자열 숫자로 바꾸기
  for(let i=0; i<tuple.length; i++){
      tuple[i] = Number(tuple[i]);
  }
  
  return tuple;
}