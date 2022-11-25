// https://leetcode.com/problems/path-sum-iii/
// Difficulty: Medium

import TreeNode from "../lib/TreeNode.ts";

interface ITraverser {
  root: TreeNode;
  onLeaf?: (s: TreeNode[], n: TreeNode) => void;
  onUnique?: (s: TreeNode[], n: TreeNode) => void;
}

function traverser({ root, onLeaf, onUnique }: ITraverser) {
  const stack: TreeNode[] = [root];
  let popped;

  while (stack.length) {
    const last = stack[stack.length - 1];

    // Leaf notify
    if(!last.left && !last.right && onLeaf) onLeaf(stack, stack[stack.length-1]);

    // Completed right tree traversal
    if (last.right === popped) {
      onUnique && onUnique(stack, stack[stack.length-1]);
      popped = stack.pop();
      continue;
    }

    // left subtree has not been traversed
    if (last.left && last.left !== popped) {
      stack.push(last.left);
      continue;
    }

    // right subtree has not been traversed
    if (last.right) {
      stack.push(last.right);
      continue;
    }

    onUnique && onUnique(stack, stack[stack.length-1]);
    popped = stack.pop();
  }
}

function checkStack(s: TreeNode[], target: number) {
  let total = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    target -= s[i].val;
    if (target === 0) {
      total++;
    }
  }
  return total;
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (!root) return 0;
  let total = 0;

  traverser({
    root,
    onUnique: (stack) => {
      total += checkStack(stack, targetSum)
    }
  });

  return total;
}

export const solution = pathSum;
