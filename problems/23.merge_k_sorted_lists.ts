// https://leetcode.com/problems/merge-k-sorted-lists/
// Difficulty: Hard

import ListNode from '../lib/ListNode.ts';

const minIndex = (lists: Array<ListNode | null>): number => {
  let min = Infinity, idx = -1;
  for(const [i, v] of lists.entries()) {
      if(v !== null && v.val < min) {
          min = v.val;
          idx = i;
      }
  }
  return idx;
}

/**
 * O(n) Time | O(n) Space
 */
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  const head = new ListNode();
  let cur = head;
  
  while(true) {
      const smallest = minIndex(lists);
      if(smallest === -1) break;
      const sv = lists[smallest]
      if(sv !== null) {
        cur.next = new ListNode(sv.val);
        cur = cur.next;
        lists[smallest] = sv.next;
      }
  }
  
  return head.next;
}

export const solution = mergeKLists;