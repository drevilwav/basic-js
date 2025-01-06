const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i += 1) {
    result.push(new Array(cols).fill(0));
  }

  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      if (matrix[row][col]) {
        for (let i = -1; i <= 1; i += 1) {
          for (let j = -1; j <= 1; j += 1) {
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < rows &&
              newCol >= 0 && newCol < cols &&
              !(i === 0 && j === 0))
              {
                result[newRow][newCol] += 1
              }
            }
          }
        }
      }
    }
    return result;
}

module.exports = {
  minesweeper
};
