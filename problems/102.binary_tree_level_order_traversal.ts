// https://leetcode.com/problems/binary-tree-level-order-traversal/
// Difficulty: Easy

import TreeNode from '../lib/TreeNode.ts';

/**
 * O(n) Time | O(n) Space
 */
function levelOrder(root: TreeNode | null): number[][] {
  if(!root) return [];
  const out = [];
  let currentLevel = [root];

  while(currentLevel.length) {
    const newLevel = [];
    out.push(currentLevel.map(n => n.val));

    for(const node of currentLevel) {
      if(node.left) newLevel.push(node.left);
      if(node.right) newLevel.push(node.right);
    }

    currentLevel = newLevel;
  }

  return out;
}

/**
 * O(n) Time | O(1) Space (Kinda not really)
 */
function levelOrder_dfs(root: TreeNode | null, height = 0, out: number[][] = []): number[][] {
  if(!root) return [];
    
  if(!out[height]) out.push([]);
  out[height].push(root.val);

  levelOrder_dfs(root.left, height+1, out);
  levelOrder_dfs(root.right, height+1, out);

  return out;
}


export const solution = levelOrder_dfs;
