/**
 * @param {number[][]} graph
 * @return {number[][]}
 
 [[1,2],[3],[3],[]]
 
 0->1,2
    1->3 V(path추가)
    2->3 V(path추가)
    
dfs
 */
var allPathsSourceTarget = function(graph) {
  const ans = [];
  
  const dfs = (curNode, path)=>{
      if(curNode===graph.length-1){
          // console.log(path);
          ans.push([...path]);
          return;
      }
      
      //curNode에 대해 for문돌며 dfs재귀
      for(let i=0; i<graph[curNode].length; i++){
          path.push(graph[curNode][i]);
          dfs(graph[curNode][i],path);
          path.pop();
      }
  }
  
  dfs(0,[0]);
  
  return ans;
};


/*
수빈
time: O(N^2)
space: O(N) + O(N^2) for result
*/
var allPathsSourceTarget = function(graph) {
    let result = [];
    let path = [];
    
    function dfs(curList){
        path.push(curList); //[0,1]
        //마지막 노드라면
        if(curList === graph.length-1){
            result.push([...path]);
            path.pop();
            return;
        }
        else {
            for(let i=0; i<graph[curList].length; i++){
                dfs(graph[curList][i]);   
            }   
        }
        path.pop();
    }
    dfs(0);
    return result;
};