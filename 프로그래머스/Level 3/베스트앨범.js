/*
맵 = {
클래식: {
    sum=500+150+800
    song=[[0,500],[2:150],[3:800]
    }
}

맵의 sum을 기준으로 정렬
정렬하고 맵을 돌면서 song을 [1]기준으로 내림차순정렬하고, [0],[1]의 [0]를 정답에 추가. 1개밖에없으면 정렬안하고 걍 한개만 정답에 추가
time O(N + NlogN + N..?) space O(장르갯수)
*/
function solution(genres, plays) {
  const ans=[];
  const map=new Map();
  
  for(let i=0; i<genres.length; i++){
      const g = genres[i];
      const p = plays[i];
      
      if(map.has(g)) {
          map.get(g).sum+=p;
          map.get(g).songs.push([i,p]);
      }
      else map.set(g,{sum:p, songs:[[i,p]]});
  }
  
  const sortedMap = new Map([...map].sort((a,b)=>b[1].sum - a[1].sum));
  
  sortedMap.forEach((val,key)=>{
      if(val.songs.length===1){
          ans.push(val.songs[0][0]);
          return;
      }
      val.songs.sort((a,b)=>{
          if(a[1]===b[1]) return a[0]-b[0];
          return b[1]-a[1];
      });
      ans.push(val.songs[0][0]);
      ans.push(val.songs[1][0]);
  })
  
  return ans;
}