/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 bfs로 순회하면서 tmp로 이전값 저장해놓고, cur이랑 매번 비교.
 */
 var connect = function(root) {
  if(!root) return root;
 
  const q=[[root,0]];
  const tmp=[root,0];
  
  while(q.length){
      const [curNode, curDep] = q.shift();
      
      if(curNode.left) q.push([curNode.left, curDep+1]);
      if(curNode.right) q.push([curNode.right, curDep+1]);
      
      if(curDep===0) continue;
      
      // tmp랑 비교
      if(tmp[1]!==curDep) tmp[0].next = null;
      else tmp[0].next=curNode;
      
      // tmp갱신
      tmp[0]=curNode;
      tmp[1]=curDep;
  }
  
  return root;
};

/*
수빈
time: O(N)
space: O(N)

bfs 이용, queue에 [현재 노드, 현재 레벨] 넣고
같은 레벨 노드가 있으면 걔를 next로, 없으면 next = null로
*/
var connect = function(root) {
  if(!root) return root;
  
  const queue = [[root, 0]];
  while(queue.length){
      const [curNode, level] = queue.shift();

      if(queue.length && level === queue[0][1] ){
          curNode.next = queue[0][0];
      } else {
          curNode.next = null;
      }
  
      if(curNode.left) queue.push([curNode.left, level+1]);
      if(curNode.right) queue.push([curNode.right, level+1]);
  }
  
  return root;
  
};