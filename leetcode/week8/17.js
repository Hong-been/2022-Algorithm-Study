/**
 * @param {string} digits
 * @return {string[]}
 
 time O(4^N) space O(N)
 */
 var letterCombinations = function(digits) {
  if(!digits) return [];
  const ans=[];
  const alpha=['','','abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
  const dfs = (path,index)=>{
      if(index === digits.length){
          ans.push([...path]);
          return;
      }
      
      const num = digits.charAt(index);
      for(let c of alpha[num]){
          dfs([...path, c], index+1);    
      }
  }
  
  dfs([],0);
  
  return ans.map(v=>v.join(""));
};