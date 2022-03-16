/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 
 root에서 bfs로 돌면서 subRoot의 root를 찾는다.
 못찾으면 바로 false;
 찾으면 함수로 보내서 두 트리를 동시에 bfs순회하며 동시에 끝난다면 true;
 V: the number of vertices
 time O(V) space O(V)
 */
 var isSubtree = function(root, subRoot) {
  const q=[root];
  
  const compareTwoTree = (t1,t2)=>{
      // 동시순회하면서 동시에 끝나면 True;
      const q=[[t1,t2]];
      
      while(q.length){
          const [cur1,cur2]=q.shift();
          
          if(cur1.val!==cur2.val) return false;
          
          if(cur1.left && cur2.left) q.push([cur1.left, cur2.left]);
          else if(!cur1.left && !cur2.left) ; //ok
          else return false;
          
          if(cur1.right && cur2.right) q.push([cur1.right, cur2.right]);
          else if(!cur1.right && !cur2.right) ; //ok
          else return false;
      }
      return true;
  }
  
  while(q.length){
      const cur=q.shift();
      
      if(cur.val === subRoot.val){
          const isSame = compareTwoTree(cur, subRoot);
          if(isSame) return true;
      }
      if(cur.left) q.push(cur.left);
      if(cur.right) q.push(cur.right);
  }
  
  return false;
};
