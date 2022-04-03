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

/*
수빈
time: O((3||4)^D)
space: O(D)
*/
var letterCombinations = function(digits) {
    //edge case
    if(!digits.length) return [];
    
    const map = {
        "2": ["a", "b", "c"],  
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    
    let result = [];
    backtracking([],0);
    return result;
    
    function backtracking(comb, idx){
        if(comb.length===digits.length){
            result.push(comb.join(""));
            return;
        }    
        for(let c of map[digits[idx]]){
            comb.push(c);
            backtracking(comb, idx+1);
            comb.pop();
        }
    }
};