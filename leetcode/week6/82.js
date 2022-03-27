/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
time O(N)
space O(1)
 */
var deleteDuplicates = function(head) {
  if(!head) return head;
  
  let sentinel=new ListNode(); // 2
  let pred=sentinel;
  
  while(head){
      if(head.next && head.val === head.next.val){
          while(head.next && head.val === head.next.val){
              head = head.next;
          }
          pred.next = head.next;
          head = head.next;
          continue;
      }
      pred.next = head;
      pred = pred.next;
      head = head.next;
  }
  
  return sentinel.next;
};


/*
수빈
time: O(N)
space: O(1)
*/
var deleteDuplicates = function(head) {
    //edge case
    if(!head) return head;
    
    let ansList = new ListNode(null);
    ansList.next = head;
    let prevList = ansList;
    /*               
		prevList 2 5
		curNode 4 5
		ansList 0 1 2 5
    */
    while(prevList.next) {
        let curNode = prevList.next;
        
        while(curNode.next && curNode.val === curNode.next.val){
            curNode = curNode.next;
        }
        if(curNode !== prevList.next){
                prevList.next = curNode.next;
        }
        else prevList = prevList.next;
        console.log("curNode:", curNode)
        console.log("prevList:", prevList)
        console.log("answer:", ansList.next)
        
    }
    return ansList.next;
    
};