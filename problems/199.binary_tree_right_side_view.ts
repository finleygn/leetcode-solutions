// https://leetcode.com/problems/binary-tree-right-side-view/
// Difficulty: Medium

import TreeNode from '../lib/TreeNode.ts';

function rightSideView(root: TreeNode | null, height = 0, out: number[] = []): number[] {
  if(!root) return [];
    
  if(!out[height]) out.push(root.val);
  out[height] = root.val;

  rightSideView(root.left, height+1, out);
  rightSideView(root.right, height+1, out);

  return out;
}

export const solution = rightSideView;