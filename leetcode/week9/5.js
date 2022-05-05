/**
 * @param {string} s
 * @return {string}
 
짝수 ㄴㄴ O(N^2)
홀수 O(N^2)
 */
var longestPalindrome = function(s) {
  if(s.length===1) return s;
  
  const getEven = (arr)=>{
      const index=[0,0];
      let max=1;
      
      for(let i=0; i<arr.length; i++){
          let l=i;
          let r=i+1;
          while(l>=0 && r<arr.length){
              if(arr[l]!==arr[r]) break;
              
              if(max <= r-l+1){
                  max=r-l+1;
                  index[0]=l;
                  index[1]=r;
              }
              l--;
              r++;
          }    
      }
      
      return [index,max];
  }
  
  const getOdd = (arr)=>{
      const index=[0,0];
      let max=1;
      
      for(let i=1; i<arr.length-1; i++){
          let l=i;
          let r=i;
          while(l>=0 && r<arr.length){
              if(arr[l]!==arr[r]) break;
              
              if(max <= r-l+1){
                  max=r-l+1;
                  index[0]=l;
                  index[1]=r;
              }
              l--;
              r++;
          }    
      }
      
      return [index,max];
  }
  
  const [evenIndex,evenLen] = getEven(s);
  const [oddIndex,oddLen] = getOdd(s);
  
  if(evenLen > oddLen) return s.substring(evenIndex[0],evenIndex[1]+1);
  return s.substring(oddIndex[0],oddIndex[1]+1);
};


/*
수빈
time: O(N^2)
space: O(N^2)
*/
var longestPalindrome = function(s) {
    //edge case
    if(s.length === 1) return s[0];
    
    let answer = "";
    let maxLen = 0;
    const dp = Array.from(Array(s.length), () => Array(s.length).fill(false));
        
    for(let i=s.length-1; i>=0; i--){
        for(let j=i; j<s.length; j++){
            if((s[i]===s[j]) && (j-i<=2 || dp[i+1][j-1])){
                dp[i][j] = true;   
            }
            if(dp[i][j] && j-i >= maxLen){
                maxLen = j-i;
                answer = s.slice(i, j+1);
            }
        }
    }
    return answer;
};