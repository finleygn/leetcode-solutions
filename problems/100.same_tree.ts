// https://leetcode.com/problems/same-tree/
// Difficulty: Easy

import TreeNode from '../lib/TreeNode.ts';

function* t(node: TreeNode | null): Generator<number | null> {
  if(!node) yield null;
  else {
    yield node.val;
    yield* t(node.left);
    yield* t(node.right);
  }
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const a = t(p);
  const b = t(q);

  while(true) {
    const ar = a.next(), br = b.next();

    if(ar.done && br.done) return true;
    if(ar.done !== br.done || ar.value !== br.value) return false;
  }
}

export const solution = isSameTree;


/**
 * O(n) Time | O(n) Space
 */
function isSameTree_rc(p: TreeNode | null, q: TreeNode | null): boolean {
  if(!p && !q) return true;
  if(!p || !q) return false;
  if(p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

