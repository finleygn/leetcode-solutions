// https://leetcode.com/problems/path-sum/
// Difficulty: Easy

import TreeNode from '../lib/TreeNode.ts';

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if(!root) return false;
  const nv = targetSum - root.val;
  
  if(!root.left && !root.right && nv === 0) {
      return true
  }
  
  return hasPathSum(root.left, nv) || hasPathSum(root.right, nv);
}

export const solution = hasPathSum;