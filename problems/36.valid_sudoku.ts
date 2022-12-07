// https://leetcode.com/problems/valid-sudoku/
// Difficulty: Medium

function isValidSudoku(board: string[][]): boolean {
  const seen = new Set();

  function addIfNotExists(v: string): boolean {
    if (v !== "." && seen.has(v)) return false;
    seen.add(v);
    return true;
  }

  function validateRow(i: number) {
    seen.clear();
    for (const field of board[i]) {
      if(!addIfNotExists(field)) return false;
    }
    return true;
  }

  function validateCol(i: number) {
    seen.clear();
    for (const row of board) {
      if(!addIfNotExists(row[i])) return false;
    }
    return true;
  }

  function validateBox(i: number) {
    seen.clear();
    
    const row = Math.floor(i / 3) * 3 + 1;
    const col = (i % 3) * 3 + 1;

    const valid = (r: number, c: number) => addIfNotExists(board[r][c]);

    return (
      valid(row, col) &&
      valid(row + 1, col) &&
      valid(row - 1, col) &&
      valid(row, col + 1) &&
      valid(row, col - 1) &&
      valid(row - 1, col - 1) &&
      valid(row + 1, col + 1) &&
      valid(row - 1, col + 1) &&
      valid(row + 1, col - 1)
    );
  }

  for (let i = 0; i <= 8; i++) {
    if (!validateBox(i) || !validateRow(i) || !validateCol(i)) {
      return false;
    }
  }

  return true;
}

export const solution = isValidSudoku;