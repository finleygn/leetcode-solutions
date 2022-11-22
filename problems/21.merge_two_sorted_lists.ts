// https://leetcode.com/problems/merge-two-sorted-lists/
// Difficulty: Easy

import ListNode from '../lib/ListNode.ts';

/**
 * O(n) Time | O(1) Space
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const head = new ListNode();
  let p1 = list1, p2 = list2;
  let cur = head;
  
  while(p1 || p2) {
    if(p1 && (!p2 || p1.val <= p2.val)) {
      cur.next = new ListNode(p1.val);
      cur = cur.next;
      p1 = p1.next;
    } else if(p2 && (!p1 || p2.val <= p1.val)) {
      cur.next = new ListNode(p2.val);
      cur = cur.next;
      p2 = p2.next;
    }
  }

  return head.next;
}

export const solution = mergeTwoLists;