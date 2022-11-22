// https://leetcode.com/problems/add-two-numbers/
// Difficulty: Medium

import ListNode from '../lib/ListNode.ts';

/**
 * O(n) Time | O(1) Space
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const head = new ListNode();
  let cur = head, carry = 0;
  
  while(l1 || l2 || carry) {
      const v1 = l1 ? l1.val : 0;
      const v2 = l2 ? l2.val : 0;
      const total = v1 + v2 + carry;
      const fract = total % 10;
      
      cur.next = new ListNode();
      cur=cur.next;
      cur.val = fract;
      
      if(l1) l1=l1.next;
      if(l2) l2=l2.next;
      
      carry = Math.floor(total / 10);
  }

  return head.next;
}

export const solution = addTwoNumbers