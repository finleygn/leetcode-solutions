// https://leetcode.com/problems/subtree-of-another-tree/
// Difficulty: Easy

import TreeNode from '../lib/TreeNode.ts';

function sameTree(l: TreeNode | null, r: TreeNode | null): boolean {
  if(!l && !r) return true;
  if(!l || !r) return false;
  if(l.val !== r.val) return false;
  return sameTree(l.left, r.left) && sameTree(l.right, r.right)
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const recurse = (node: TreeNode | null): boolean => {
    if(!node) return false;
    return (
        recurse(node.left) || 
        recurse(node.right) || 
        sameTree(node, subRoot)
    );
  }

  return recurse(root);
}

export const solution = isSubtree;
