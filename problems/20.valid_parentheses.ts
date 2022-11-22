// https://leetcode.com/problems/valid-parentheses/
// Difficulty: Easy

/**
 * O(n) Time | O(n) Space
 */
function isValid(s: string): boolean {
  const stack = [];
  const matches = {
    "{": "}",
    "(": ")",
    "[": "]",
  }
  const keys = Object.keys(matches);

  for(const c of s.split("")) {
      if(keys.includes(c)) {
          stack.push(c);    
      } else {
          const matching = stack.pop() as keyof typeof matches;
          if(matches[matching] !== c) {
              return false;
          }
      }
  }
  return !stack.length;
}

export const solution = isValid;