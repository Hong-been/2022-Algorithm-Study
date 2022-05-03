/*
그리디 + 유니온파인

비용기준으로 정렬
안이어진거는합치고 비용추가
이어진거면 넘어가
findP time O(logN) : N에서 경로압축 -> 애커만함수 α(N)(사실상 상수를 의미)이지만 대략적으로 logN으로 표현가능하다?
time O(NlogN)
*/
function solution(n, costs) {
  let ans = 0;
  const p = [...Array(n)].map((v,i)=>i);
  const findP=(i)=>{
      if(i===p[i]) return i;
      
      return p[i]=findP(p[i]);
  }
  costs.sort((a,b)=>a[2]-b[2]);
  
  costs.forEach((c)=>{
      const [i1,i2,cost] = c;
      // 최종부모가 같으면 넘어가
      const p1=findP(i1);
      const p2=findP(i2);
      if(p1 === p2) return;
      
      // 다르면 최종부모를 작은 최종부모로 업데이트
      ans += cost;
      p[p1]=Math.min(p1,p2);
      p[p2]=Math.min(p1,p2);
  })
  
  return ans;
}