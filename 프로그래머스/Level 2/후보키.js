/*
[["100","ryan","music","2"]
,["200","apeach","math","2"]
,["300","tube","computer","3"]
,["400","con","computer","4"]
,["500","muzi","music","3"]
,["600","apeach","music","2"]]

유일성 먼저 하고
최소성
*/
function solution(relations) {
	let ans = 0;
	const map = new Map();
	const combs = getComb(relations[0].length).sort(
		(a, b) => a.length - b.length
	);
	const unique = [];
	const ans = [];

	for (let i = 0; i < combs.length; i++) {
		if (isUnique(combs[i], relations)) unique.push(new Set(combs[i]));
	}

	for (let i = 0; i < unique.length; i++) {
		if (unique[i].size === 1) {
			ans.push(unique[i]);
			continue;
		}
	}

	return ans.length;
}
function isUnique(c, r) {
	const map = new Map();

	for (let i = 0; i < r.length; i++) {
		let k = "";
		for (let j = 0; j < c.length; j++) {
			k += `${r[i][c[j]]}`;
		}
		if (map.has(k)) return 0;
		map.set(k, true);
	}

	return 1;
}

function getComb(x) {
	const comb = [];
	const arr = [...Array(x)].map((v, i) => i);

	const dfs = (curComb, unUsed) => {
		if (curComb.length) comb.push([...curComb]);
		if (unUsed.length === 0) return;

		for (let i = 0; i < unUsed.length; i++) {
			curComb.push(unUsed[i]);
			dfs(curComb, unUsed.slice(i + 1, unUsed.length));
			curComb.pop();
		}
	};

	dfs(["0", "0", "0", "0"], arr);

	return comb;
}

/*
수빈
*/
function solution(relation) {
  //인덱스 조합
  const subset=[]; 
  //후보키 조합 
  const set=new Set();
  
  function comb(cnt,max,start){
      //내가 원하는 개수 조합 만들어졌으면
      if(cnt===max){
          // 최소성 확인 (인덱스 중복 검사)
          let isMin=true;
          let sArr=Array.from(set);

          for(let i=0;i<sArr.length;i++){
              let isContain=true;
              //현재 조합이 후보키에 포함되는지 검사
              for(let j=0;j<sArr[i].length;j++){
                  if(subset.indexOf(sArr[i][j])===-1){
                      isContain=false;
                      break;
                  }
              }
              if(isContain){
                  isMin=false;
                  break;
              }
          }
          if(isMin){
              //유일성 확인
              const dict={};
              let isOnly=true;
              for(let i=0;i<relation.length;i++){
                  //인덱스 조합에 해당하는 속성들 가져오기
                  let temp=relation[i].filter((elem,idx)=>{
                      return subset.indexOf(idx)!==-1;
                  }).join("");
                  if(!dict[temp]){
                      dict[temp]=1;
                  }
                  //겹치면
                  else{
                      isOnly=false;
                      break;
                  }
              }
              if(isOnly){
                  set.add([...subset]);
              }
          }
          
          return;
      }
      
      for(let i=start;i<relation[0].length;i++){
          subset.push(i);
          comb(cnt+1,max,i+1);
          subset.pop();
      }
  }
  
  for(let i=1;i<=relation[0].length;i++){
      comb(0,i,0);
  }
  
  return set.size;
}