// https://leetcode.com/problems/missing-number/
// Difficulty: Easy

/**
 * O(n) Time | O(1) Space
 */
const triangleNumber = (n: number) => n*(n+1)/2;
function missingNumber(nums: number[]) {
    let total = triangleNumber(nums.length);
    for(const n of nums) {
        total-=n;
    }
    return total;
}

export const solution = missingNumber;