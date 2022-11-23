// https://leetcode.com/problems/balanced-binary-tree/
// Difficulty: Easy

import TreeNode from '../lib/TreeNode.ts';

function height(node: TreeNode | null): number {
  if(!node) return 0;
  return 1 + Math.max(height(node.left), height(node.right));
}

function isBalanced(root: TreeNode | null): boolean {
  if(!root) return true;
  
  const lheight = root.left ? height(root.left) : 0;
  const rheight = root.right ? height(root.right) : 0;
  
  return (
    Math.abs(lheight - rheight) < 2 &&
    isBalanced(root.left),
    isBalanced(root.right)
  );
}

export const solution = isBalanced;