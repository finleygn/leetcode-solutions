// https://leetcode.com/problems/middle-of-the-linked-list/
// Difficulty: Easy

import ListNode from '../lib/ListNode.ts';

/**
 * O(n) Time | O(1) Space
 */
function middleNode(head: ListNode | null): ListNode | null {
  let mid = head;
  let far = head;
  
  while(true) {
      if(mid && far && far.next) {
          mid = mid.next;
          far = far.next.next;
      } else {
          return mid;
      }
  }
}

export const solution = middleNode;