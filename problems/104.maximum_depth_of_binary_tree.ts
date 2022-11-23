// https://leetcode.com/problems/maximum-depth-of-binary-tree/
// Difficulty: Easy

import TreeNode from '../lib/TreeNode.ts';

function maxDepth(root: TreeNode | null): number {
  if(!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

export const solution = maxDepth;