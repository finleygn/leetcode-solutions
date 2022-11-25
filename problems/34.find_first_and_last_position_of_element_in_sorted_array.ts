// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Difficulty: Medium

function seek(nums: number[], start: number): [number,number] {
  let target = nums[start], fi = start, li = start;

  for(let i = start-1; start >= 0; i--) {
    if(nums[i] !== target) {
      fi = i+1; break;
    }
  }

  for(let i = start+1; start <= nums.length-1; i++) {
    if(nums[i] !== target) {
      li = i-1; break;
    }
  }

  return [fi, li]
}

function searchRange(nums: number[], target: number): number[] {
  let lp = 0, rp = nums.length - 1;
  
  while(lp <= rp) {
      const middleI = Math.ceil((rp - lp) / 2) + lp;
      const middleV = nums[middleI];

      if(middleV === target) {
          return seek(nums, middleI)
      }

      if(lp===rp) break;
      
      if(target > middleV) {
          lp = middleI+1;
      } else {
          rp = middleI-1;
      }
  }
  
  return [-1,-1];
}

export const solution = searchRange;