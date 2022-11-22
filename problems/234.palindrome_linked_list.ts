// https://leetcode.com/problems/palindrome-linked-list/
// Difficulty: Easy

import ListNode from '../lib/ListNode.ts';

/**
 * O(n) Time | O(n) Space
 */
function isPalindrome(head: ListNode | null): boolean {
  if(!head) return false;
  const c: number[] = [];
  const rc = (n: ListNode): boolean => {
      let bail = false;
      c.unshift(n.val);
      if(n.next) bail = rc(n.next);
      return c.pop() !== n.val || bail;
  }
  return !rc(head);
}

export const solution = isPalindrome;