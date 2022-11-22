// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
// Difficulty: Medium

import TreeNode from '../lib/TreeNode.ts';

/**
 * O(n) Time | O(1) Space
 */
function lowestCommonAncestor(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode | null {
  let n: TreeNode | null = root;
  
  while(n) {
      if(p.val > n.val && q.val > n.val) {
          n = n.right;
      } else if(p.val < n.val && q.val < n.val){
          n = n.left;
      } else {
          return n;
      }
  }

  return null;
}

export const solution = lowestCommonAncestor;