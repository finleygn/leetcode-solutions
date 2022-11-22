// https://leetcode.com/problems/jump-game/
// Difficulty: Medium

/**
 * O(n) time | O(1) space
 */
function canJump(nums: number[]): boolean {
  let target = nums.length - 1;
  
  for(let i = nums.length - 2; i>=0; i--) {
      if(i + nums[i] >= target) {
          target = i;
      }
  }
  
  return target === 0;
}

export const solution = canJump;