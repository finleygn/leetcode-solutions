// https://leetcode.com/problems/minimum-falling-path-sum/
// Difficulty: Medium

/**
 * O(n*n) Time | O(n) Space
 */
function minFallingPathSum(matrix: number[][]): number {
  let dp = matrix[matrix.length-1];
  for(let row = matrix.length - 2; row>=0; row--) {
      const dpn = [...dp];
      for(let col = 0; col <= matrix.length - 1; col++) {
          dpn[col] = matrix[row][col] + Math.min(
              dp[Math.max(0,col-1)],
              dp[col],
              dp[Math.min(matrix.length-1,col+1)]
          );
      }
      dp = dpn;
  }
  return Math.min(...dp);
}

export const solution = minFallingPathSum;