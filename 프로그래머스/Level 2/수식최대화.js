/*
홍빈
- time O(logO)?
- space O()...하
Divied and conquer
*/
function solution(ex) {
  let ans=0;
  
  const op = [...new Set(ex.match(/\W/g))];
  const opComb = comb(op);
  
  for(let c of opComb){
      const result = operate(c,ex);
      ans = Math.max(ans, Math.abs(result));
  }
  
  return ans;
}

function operate(order,ex){
  const recursion = (index,curStr)=>{
      if(index === order.length) return parseInt(curStr);
      
      const cur = order[index];
      
      const nums=curStr.split(cur).map(v=>recursion(index+1, v)); 
      
      const result = nums.reduce((acc,v)=>{
          if(cur==='+')
              return acc + v;
          if(cur==='-')
              return acc-v;
          if(cur==='*')
              return acc*v;
      });
      
      return result;
  }

  return recursion(0,ex);
}

function comb(op){
  const combs=[];
  
  const dfs = (curArr,unused)=>{
      if(curArr.length === op.length){
          combs.push([...curArr]);
          return;
      }
      
      for(let i=0; i<unused.length; i++){
          curArr.push(unused[i]);
          dfs(curArr, unused.slice(0,i).concat(unused.slice(i+1,unused.length)));
          curArr.pop();
      }
  }
  
  dfs([],op);
  
  return combs;
}