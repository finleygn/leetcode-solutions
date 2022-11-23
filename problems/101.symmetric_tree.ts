// https://leetcode.com/problems/symmetric-tree/
// Difficulty: Easy


import TreeNode from '../lib/TreeNode.ts';

function* t(node: TreeNode | null, inverse: boolean): Generator<number | null> {
  if (!node) {
    yield null;
    return;
  }
  yield node.val;
  yield* t(inverse ? node.left : node.right, inverse);
  yield* t(inverse ? node.right : node.left, inverse);
}

function isSymmetric(root: TreeNode | null): boolean {
  const a = t(root, true);
  const b = t(root, false);
  while(true) {
    const ar = a.next(), br = b.next();

    if(ar.done && br.done) return true;
    if(ar.done !== br.done || ar.value !== br.value) return false;
  }
}

export const solution = isSymmetric;


/**
 * O(n) Time | O(n) Space
 */
function isSymmetric_rc(root: TreeNode | null): boolean {
  if(!root) return true;

  const recurse = (l: TreeNode | null, r: TreeNode | null): boolean => {
    if(!l && !r) return true;
    if(!l || !r) return false;
    if(l.val !== r.val) return false;
    return recurse(l.left, r.right) && recurse(l.right, r.left)
  }

  return recurse(root.left, root.right);
}