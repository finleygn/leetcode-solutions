// https://leetcode.com/problems/path-sum-ii/
// Difficulty: Medium

import TreeNode from "../lib/TreeNode.ts";

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
  if (!root) return [];

  const results = [];
  const stack = [root];
  let popped; // keep track of last popped value

  while (stack.length) {
      const last = stack[stack.length - 1];
      
      // Leaf node check
      if(!last.left && !last.right) {
          const sum = stack.reduce((a,s) => s.val+a, 0);
          if(sum === targetSum) results.push(stack.map(s => s.val));
          popped = stack.pop();
          continue;
      }
      
      // Completed right tree traversal
      if(last.right === popped) {
          popped = stack.pop();
          continue;
      }
      
      // left subtree has not been traversed
      if(last.left && last.left !== popped) {
          stack.push(last.left);
          continue;
      }
      
      // right subtree has not been traversed
      if(last.right) {
          stack.push(last.right);
          continue;
      }
      
      popped = stack.pop();
  }

  return results;
}

export const solution = pathSum;
