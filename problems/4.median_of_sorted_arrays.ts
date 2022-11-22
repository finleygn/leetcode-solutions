// https://leetcode.com/problems/median-of-two-sorted-arrays/
// Difficulty: Hard

/**
 * O(n log n) time | O(n) space
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const sorted = [...nums1, ...nums2].sort((a,b) => a - b);
  const even = sorted.length % 2 === 0;
  const mi = sorted.length / 2 - 1;
  
  if(even) {
      return (sorted[mi] + sorted[mi + 1]) / 2
  } else {
      return sorted[Math.ceil(mi)];
  }
}

export const solution = findMedianSortedArrays;