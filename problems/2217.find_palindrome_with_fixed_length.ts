// https://leetcode.com/problems/find-palindrome-with-fixed-length/
// Difficulty: Medium

// ...
const kthPalindrome_dumb = (q: number[], i: number) => {
  const s = Math.pow(10, Math.ceil(i / 2) - 1);
  const revadd = (n: number, e: boolean) => +(n + (""+n).split("").reverse().splice(e?0:1).join(""));
  return q.map(x => s + x > s * 10 ? -1 : revadd(s + (x-1), i % 2 === 0));
};

/**
 * O(n) Time | O(n) space
 */
const kthPalindrome = (q: number[], i: number) => {
  function createPalindrome(n: number, extend: boolean) {
    let out = String(n).split("").reverse();
    
    if(extend) {
      out = out.splice(0);
    } else {
      out = out.splice(1);
    }

    return Number(n + out.join(""))
  }

  const start = Math.pow(10, Math.ceil(i / 2) - 1);
  const end = start * 10;
  const out = [];

  for(const query of q) {
    if(start + query > end) {
      out.push(-1)
    } else {
      out.push(createPalindrome(start + query - 1, i%2===0))
    }
  }

  return out;
};

export const solution = kthPalindrome;