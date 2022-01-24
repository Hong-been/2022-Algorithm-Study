//오픈채팅방

//홍빈
function solution(record) {
	//edge
	if (record.length === 0) return [];

	const user = {};
	const ans = [];
	const ment = { Enter: "님이 들어왔습니다.", Leave: "님이 나갔습니다." };

	for (let i = 0; i < record.length; i++) {
		const s = record[i].split(" ");

		if (s[0] === "Enter") {
			const curID = s[1];
			const curNick = s[2];

			ans.push([curID, ment[s[0]]]);

			user[curID] = curNick;

			continue;
		}
		if (s[0] === "Change") {
			const curID = s[1];
			const curNick = s[2];

			user[curID] = curNick;

			continue;
		}
		if (s[0] === "Leave") {
			const curID = s[1];
			ans.push([curID, ment[s[0]]]);
		}
	}

	return ans.map(([id, ment]) => user[id] + ment);
}

/*-----------------------------------------------*/

//수빈
function solution(record) {
  var answer = [];
  let newRecord = [];
  
  let action, user_id, nickname;
  
  for(let i=0; i<record.length; i++){
      let recordArr = record[i].split(" ");
      newRecord.push(recordArr);
  }
  // id : nickmane 맵 구성
  const id_map = new Map();
  for(let i=0; i<newRecord.length; i++){
      if(newRecord[i][0]==="Leave") continue;
      user_id = newRecord[i][1];
      nickname = newRecord[i][2];
      
      id_map.set(user_id, nickname);
  }
  
  for(let i=0; i<newRecord.length; i++){
      action = newRecord[i][0];
      user_id = newRecord[i][1];
      if(newRecord[i][2]) nickname = newRecord[i][2];
       
      if(action === "Enter" || action === "Change"){
          newRecord[i][2] = id_map.get(newRecord[i][1]);
      }
      else if(action === "Leave"){
          newRecord[i].push(id_map.get(newRecord[i][1]));
      }
  }
  for(let i=0; i<newRecord.length; i++){
      let action = newRecord[i][0];
      let user_id = newRecord[i][1];
      let nickname = newRecord[i][2];
      
      if(action === "Enter") answer.push(nickname + "님이 들어왔습니다.");
      else if(action === "Leave") answer.push(nickname + "님이 나갔습니다.");
      else if(action === "Change") continue;
  }
  return answer;
}
