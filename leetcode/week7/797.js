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