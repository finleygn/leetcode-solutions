// https://leetcode.com/problems/flood-fill/
// Difficulty: Easy

/**
 * O(n * m) Time | O(1) Space
 */
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
  const test: number = image[sr][sc];
  const rc = (row: number,col: number) => {
      const cc = image[row][col];
      if(cc === test && test !== color) {
          image[row][col] = color;
          if(row - 1 >= 0) rc(row-1, col);
          if(col - 1 >= 0) rc(row, col-1);
          if(row + 1 <= image.length-1) rc(row+1, col);
          if(col + 1 <= image[row].length-1) rc(row, col+1);
      }
  }

  rc(sr,sc);
  return image;
}

export const solution = floodFill;