// https://leetcode.com/problems/majority-element/
// Difficulty: Easy

/**
 * Boyer Moore algorithm
 * O(n) time | O(1) space
 * 
 * Optimal Solution
 */
function majorityElement(nums: number[]): number {
  let candidate = 0, counter = 0;

  for(const num of nums) {
    if(counter === 0) {
      candidate = num;
    }
    if(num === candidate) {
      counter++
    } else {
      counter--;
    }
  }

  return candidate;
}

export const solution = majorityElement;

// ALTERNATIVE SOLUTIONS -----

/**
 * Hashmap
 * O(n) time | O(n) space
 */
function majorityElement__hashmap(nums: number[]): number {
  const cache: Record<number, number> = {};
  for(const num of nums) {
      if(!cache[num]) cache[num] = 0;
      cache[num]++;
  }

  let max = 0, key;
  for(const [k, v] of Object.entries(cache)) {
      if(v > max) {
          max = v;
          key = k;
      }
  }
  return Number(key);
}

/**
 * Sort
 * O(n log n) time | O(n) space
 * 
 * My Solution
 */
function majorityElement__sorting(nums: number[]): number {
  nums = nums.sort((a,b) => a - b);
  return nums[Math.floor(nums.length / 2)];
}
