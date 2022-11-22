// https://leetcode.com/problems/climbing-stairs/
// Difficulty: Easy

/**
 * Top down recursive
 * O(2^n) time | O(1) space
 */
function climbStairs__rc(n: number): number {
  if(n === 0) return 1;
  if(n === -1) return 0;
  
  return climbStairs__rc(n-1) + climbStairs__rc(n-2);
}


/**
 * Top down recursive memoization
 * O(n) time | O(n) space
 */
const cc: Record<number, number> = {};
function climbStairs__rcm(n: number): number {
  if(n in cc) return cc[n];
  if(n === 0) return 1;
  if(n === -1) return 0;
  
  cc[n] = climbStairs__rcm(n-1) + climbStairs__rcm(n-2);
  return cc[n];
};


/**
 * Bottom up DP (Iterative)
 * O(n) time | O(n) space
 */
function climbStairs__iterative_dp(n: number): number {
  const dp = new Array(n + 2).fill(0);
  dp[n] = 1;
  for(let i = n-1; i >= 0; i--) {
      dp[i] = dp[i+1] + dp[i+2];
  }
  return dp[0];
};

/**
 * Bottom up DP (Iterative) Constant Space
 * O(n) time | O(1) space
 */
function climbStairs__iterative_dp_constant_space(n: number): number {
  const dp = [1, 0]
  for(let i = n-1; i >= 0; i--) {
      const total = dp[0] + dp[1];
      dp[1] = dp[0];
      dp[0] = total;
  }
  return dp[0];
};

export const solution = climbStairs__iterative_dp_constant_space;