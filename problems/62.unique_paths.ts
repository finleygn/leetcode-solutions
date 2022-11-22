// https://leetcode.com/problems/unique-paths/
// Difficulty: Medium

/**
 * Bottom up DP
 * O(n*n) time | O(1) space
 * 
 * Proud of this one c:
 */
function uniquePaths_dp_constant(x: number, y: number) {
  const stack = new Array(x).fill(1);
  for(let row = y - 2; row >= 0; row--) {
    for(let col = x - 2; col >= 0; col--) {
      stack[col] = stack[col] + stack[col + 1];
    }
  }
  return stack[0];
}

export const solution = uniquePaths_dp_constant;
