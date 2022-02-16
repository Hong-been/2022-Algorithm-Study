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