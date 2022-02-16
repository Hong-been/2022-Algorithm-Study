/*
홍빈
N: id_list length, M: report length
- time O(N + M)
- space O(N) + O(N) for answer

map { 
  muzi : { idx: 0, reported : Set[2] }
  frodo : { idx: 1, reported : Set[0,2] }
  apeach: { idx: 2, reported : Set[] }
  neo: { idx: 3, reported : Set[1,0] }
}
map돌면서 
if(reported.length가 k이상이면) result[reported에 있는 애들]++
*/
function solution(id_list, report, k) {
	const map = new Map();
	const result = Array(id_list.length).fill(0);

	for (let i = 0; i < id_list.length; i++) {
		if (!map.has(id_list[i]))
			map.set(id_list[i], { idx: i, reported: new Set() });
	}

	for (let i = 0; i < report.length; i++) {
		const [from, to] = report[i].split(" ");
		map.get(to).reported.add(map.get(from).idx);
	}

	for (let [key, value] of map) {
		if (value.reported.size >= k) {
			for (let r of value.reported) {
				result[r] += 1;
			}
		}
	}

	return result;
}


/*
수빈
*/
function solution(id_list, report, k) {
  //동일유저 신고횟수가 여러번일경우, 1회로 처리되므로 배열에서 중복값을 제거
  const set = new Set(report);
  const newReport = [...set];
  
  //key: 유저ID, value:[id_list에서 유저가 신고한 ID의 index] 맵 생성
  const map = new Map();
  for(let i=0; i<newReport.length; i++){
      let [user, reportedUser] = newReport[i].split(" ");
      const reportedUserIdx = id_list.indexOf(reportedUser); 
      if(map.has(user)){
          map.get(user).push(reportedUserIdx);
      }
      else{
          map.set(user, [reportedUserIdx]);
      }
  }
  
  //신고받은 횟수를 저장하는 배열
  const reportedArr = new Array(id_list.length).fill(0);
  for(let i=0; i<newReport.length; i++){
      let [user, reportedUser] = newReport[i].split(" ");
      let reportedUserIdx = id_list.indexOf(reportedUser);
      reportedArr[reportedUserIdx]++;
  }
  
  //신고받은 횟수가 k회 이상이면 answer 배열-> 신고한 유저아이디의 index자리에 ++
  let answer = new Array(id_list.length).fill(0);
  for(let i=0; i<reportedArr.length; i++){
      for(let [user, reportedUserArr] of map){
          let userIdx = id_list.indexOf(user);
          if(reportedArr[i]>=k && reportedUserArr.includes(i)){
              answer[userIdx]++;
          }
      }
  }
  return answer;
}
