// https://leetcode.com/problems/invert-binary-tree/
// Difficulty: Easy

import TreeNode from '../lib/TreeNode.ts';

/**
 * O(n) Time | O(1) Space
 */
function invertTree(root: TreeNode | null): TreeNode | null {
  if(!root) return null;
  
  const invertedLeft = invertTree(root.left);
  const invertedRight = invertTree(root.right);
  
  root.left = invertedRight;
  root.right = invertedLeft;
  
  return root;
};

export const solution = invertTree;