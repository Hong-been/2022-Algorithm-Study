/*
+1 -> +1 -> +1 -> +1 -> +1 (5)
                     -> -1 (3) v
               -> -1 -> +1 (3) v
                     -> -1 (1)
         -> -1
   -> -1
-1

+4 ->
-4
*/

/*
수빈
N: numbers.length
time: O(2^N)
space: O(2^N)
*/
function solution(numbers, target) {
  var answer = 0;
  dfs(numbers, 0, 0);

  function dfs(numbers, numIdx, sum){
      if(numIdx === numbers.length){
          if(sum === target) answer++;
          return;
      }
      dfs(numbers, numIdx+1, sum+numbers[numIdx]);
      dfs(numbers, numIdx+1, sum-numbers[numIdx]);
  }
  return answer;
}