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