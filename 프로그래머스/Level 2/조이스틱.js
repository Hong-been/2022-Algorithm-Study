/*
이동할횟수 더하기
65 ------> 74 -------> 90
  74-65=9      1+(90-74)=17
  
그리디가 아니다...왜냐면
"ABAAABB" 의 경우,
인덱스 0에서 좌로가나 우로가나 1step으로 가중치가 같음
왼쪽으로 시작할 경우, 왼1, 왼1, 오3으로 총 5가 나옴
오른쪽으로 시작할 경우, 오1, 왼2, 왼1로 총 4가 나옴
개빡쳐ㅠ

0123456
ABAAABB

AAAAABB,1,1 V // 
ABAAABA,1,6 V

AAAAAAB,5,5 V
AAAAABA,3,6 V

AAAAABA,3,2 V
ABAAAAA,2,5

AAAAAAA,6,6 -> continue, 정답 6갱신 성공
AAAAAAA,11,6 -> continue, 정답 11갱신 실패

AAAAAAA,9,6 -> continue, 정답 9갱신 실패
AAAAAAA,4,5 -> continue, 정답 4갱신 성공

AAAAAAA,6,5 -> continue, 정답 6갱신 실패
AAAAAAA,7,5 -> continue, 정답 7갱신 실패

*/
function solution(name) {
	const nameArr = name.split("");
	let ans = 0;
	let min = name.length - 1;

	for (let c of nameArr) {
		const curCode = c.charCodeAt(0);
		const aCode = "A".charCodeAt(0);
		const zCode = "Z".charCodeAt(0);
		ans += Math.min(curCode - aCode, 1 + zCode - curCode);
	}

	nameArr.splice(0, 1, "A");
	const q = [[nameArr, 0, 0]];

	while (q.length) {
		const [curName, curCount, cursor] = q.shift();
		curName[cursor] = "A";

		if (curName.every((x) => x === "A")) {
			min = Math.min(min, curCount);
			continue;
		}

		let right = cursor;
		let rightCount = 0;

		while (curName[right] === "A" && rightCount < name.length) {
			rightCount++;
			right = right + 1 > name.length - 1 ? 0 : right + 1;
		}
		q.push([[...curName], curCount + rightCount, right]);

		let left = cursor;
		let leftCount = 0;

		while (curName[left] === "A" && leftCount < name.length) {
			leftCount++;
			left = left - 1 < 0 ? name.length - 1 : left - 1;
		}
		q.push([[...curName], curCount + leftCount, left]);
	}

	return ans + min;
}


/*
수빈
*/
function solution(name) {
  var answer = 0;
  let len = name.length;
  let idx = 0;
  
  //좌우 움직임 수 체크
  let move = len -1; 
  
  for(let i=0; i<len; i++){
      let a = 'A'.charCodeAt(0);
      let z = 'Z'.charCodeAt(0);
      let curChar = name.charCodeAt(i);
 
      //현재 문자가 A,Z중 어디에 가까운지를 기준으로 상하이동
      answer += Math.min(curChar-a, z-curChar+1);
      
      //커서 이동 수 계산
      //연속된 A확인
      idx = i+1;
      while(idx<len && name.charAt(idx)==='A'){
          idx++;
      }
      //console.log(idx)
      //console.log(answer)
      
      //"ABAAAAAAAAABB" (move:4)
      //오른쪽으로 가다가 왼쪽으로 이동해 시작점 도달
      //시작점에서 왼쪽으로 이동해 끝점 도달하고 ,연속된 A끝점 오는 경우.
      move = Math.min(move, i*2+len-idx);
      
      //"BBBBAAAAAB" (move:5)
      //처음부터 뒷부분 먼저 입력하는것이 더 빠른경우
      //처음부터 왼쪽으로 이동해 역순으로 가다가(맨끝 도달)
      //다시 오른쪽으로 이동해 시작점 도달하고, 연속된 A시작점 오는 경우.
      move = Math.min(move, (len-idx)*2+i);
      //console.log(move)
  }
  return answer + move;
}