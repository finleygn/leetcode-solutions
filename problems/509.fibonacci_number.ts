// https://leetcode.com/problems/fibonacci-number/
// Difficulty: Easy

/**
 * Crushed solution
 * c={...[0,1]},f=(n)=>c[n]??(c[n]=f(n-1)+f(n-2)),fib=f
 * 
 * f(n)
 */

/**
 * O(n) Time | O(n) Space
 */
function fib_rc_cache(start: number) {
  const c: Record<number, number> = { 0: 0, 1: 1 };
  function fib(n: number) {
    if(n in c) return c[n];
    c[n] = fib(n-1) + fib(n-2);
    return c[n];
  }
  return fib(start);
}

export const solution = fib_rc_cache;