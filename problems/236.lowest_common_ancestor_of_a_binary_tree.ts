// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
// Difficulty: Medium

import TreeNode from "../lib/TreeNode.ts";

type OTNode = TreeNode | null;

function lowestCommonAncestor(root: OTNode, p: OTNode, q: OTNode): OTNode {
  if (!root) return null;

  const leftHas = lowestCommonAncestor(root.left, p, q);
  const rightHas = lowestCommonAncestor(root.right, p, q);

  if (root === p || root === q) return root;
  if (leftHas && rightHas) return root;
  if (leftHas) return leftHas;
  if (rightHas) return rightHas;

  return null;
}

export const solution = lowestCommonAncestor;
