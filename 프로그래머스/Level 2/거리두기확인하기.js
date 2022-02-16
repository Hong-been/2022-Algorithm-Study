/*
홍빈
N=5
- time O(N*(N*N*N))=O(1)
- space O(N) for ans + O(N^2) for p...
동서남북 돌면서 dist 2이하면 큐에 넣기
	P면 return 0;
	X면 더이상 안봄
	O면 동서남북
*/
function solution(ps) {
	const ans=[];
	ps.forEach(p => ans.push(checkDist(p)));
	return ans;
}

function checkDist(place){
	const p = Array.from({length:place.length}, (r,i)=>place[i].split(''));
	const m = [[1,0],[-1,0],[0,1],[0,-1]];

	for(let i=0; i<p.length; i++){
		const q = [];
			
		for(let j=0; j<p[0].length; j++){
			if(p[i][j]==='#') continue;
			if(p[i][j]==='P') q.push([i,j,0]);
					
			while(q.length){
				const [i, j, dist] = q.shift();
							
				if(dist >= 1 && p[i][j]==='P') return 0;			
				if(dist===1 && p[i][j]==='X'){
						p[i][j]='#';
						continue;
				}

				p[i][j]='#';
							
				for(let [r,c] of m){
						const newI = i + r;
						const newJ = j + c;
						
						if(newI<0 || newJ<0 || newI>=p.length || newJ>=p[0].length || p[newI][newJ]==='#') continue;
						if(dist < 2) q.push([newI,newJ,dist+1]);
				}				
			}
		}
	}
	return 1;
}

/* --------------------------------------------- */
/*
수빈
*/
/*
"POOPX", 
"OXPXP", 
"PXXXO", 
"OXXXO", 
"OOOPP"

X 기준 맨해튼거리 2이내인 경우:
    0
  0 0 0
0 0 X 0 0
  0 0 0
    0

brute:
1. P좌표 전부 추출
2. P끼리 비교하면서 맨해튼거리 계산
3. 맨해튼거리 2이내면 거리두기 되어있는지 확인
    - y좌표 같으면 사이에 X(파티션)있는지? ex) PXP
    - x좌표 같으면 사이에 X있는지?
    ex) P
        X
        P
    - x,y 다르면 반대 대각선..?에 X있는지
    ex) PX XP
        XP PX
4. 거리두기 안되어있으면 false리턴
5. 끝까지 확인했으면 거리두기 잘 된거니까 true리턴
*/
function solution(places) {
	var answer = [];
	for(let i=0; i<places.length; i++){
			let room = places[i];
			if(!checkPerson(room)){
					answer.push(0);   
			} else answer.push(1);
	}
	return answer;
}

// P 체크하는 함수
function checkPerson(room){
	// P좌표 넣을 배열
	let person = [];
	for(let i=0; i<room.length; i++){
			for(let j=0; j<room[0].length; j++){
					if(room[i][j]==="P"){
							person.push([i,j]);
					}    
			}
	}
	// 맨해튼 거리 2 이내면 거리두기 검사 필요
	for(let i=0; i<person.length; i++){
			for(let j=i+1; j<person.length; j++){
					if(getManhattan(person[i], person[j]) <= 2){
							// 거리두기 안지키고 있으면
							if(!checkRule(room, person[i], person[j])){
									return false;
							}
					}
			}
	}
	return true;
}

// 맨해튼거리 계산 함수
function getManhattan(p1, p2){
	let distance = Math.abs(p1[0]-p2[0]) + Math.abs(p1[1]-p2[1]);
	return distance;
}

// 거리두기 지키고 있는지 체크하는 함수
function checkRule(room, p1, p2){
	// y좌표 같으면 사이에 X(파티션)있는지?
	// PXP
	if(p1[1]===p2[1]){
			for(let i=p1[0]+1; i<p2[0]; i++){
					if(room[i][p1[1]]==="X") return true;
			}
	}
	// x좌표 같으면 사이에 X있는지?
	/*
	P
	X
	P
	*/
	else if(p1[0]===p2[0]){
			for(let i=p1[1]+1; i<p2[1]; i++){
					if(room[p1[0]][i]==="X") return true;
			}
	}
	// x,y 좌표 다를경우 다른 대각선에 X있는지 확인
	/*
	PX XP
	XP PX
	(0,0) (1,1) <-> (0,1)(1,0)
	(0,1) (1,0) <-> (0,0)(1,1)
	(p1[0],p2[1])(p2[0],p1[1])
	*/
	else {
			if(room[p1[0]][p2[1]] === "X" && room[p2[0]][p1[1]]=== "X"){
					return true;
			}
	}
	return false;
}