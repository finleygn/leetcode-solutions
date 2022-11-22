// https://leetcode.com/problems/two-sum/
// Difficulty: Easy

/**
 * O(n) Time | O(n) Space
 */
const cc: Record<number, number> = {};
function twoSum(nums: number[], target: number): number[] {
  for(const [index, value] of nums.entries()) {
      if(cc[value] !== undefined) {
          return [cc[value], index];
      } 
      cc[target-value] = index;
  }
  throw new Error("Shouldn't get here...")
}

export const solution = twoSum;