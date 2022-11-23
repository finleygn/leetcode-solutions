// https://leetcode.com/problems/diameter-of-binary-tree/
// Difficulty: Easy

import TreeNode from '../lib/TreeNode.ts';

/**
 * Inefficient but nice recursive solution
 */

function height(node: TreeNode | null): number {
  if(!node) return 0;
  return 1 + Math.max(height(node.left), height(node.right));
}

function diameterOfBinaryTree(node: TreeNode | null): number {
  if(!node) return 0;
  return Math.max(
      height(node.left) + height(node.right),
      diameterOfBinaryTree(node.left),
      diameterOfBinaryTree(node.right)
  );
}

export const solution = diameterOfBinaryTree;