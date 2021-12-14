/*
P:
Input:
  matrix (nested square array)
Output:
  transposed matrix

E:

D:
insert as an array


A:
set array
let returnArray = []
height = array.length;
for (i = 0, array length)
  if length of array[i] != length
    return 'error'
for i = 0 length
  for y = 0 length
    return array [i,y] = array[y,i]

return return array


C:
*/
function rotate90(matrix) {
  inpHeight = matrix.length;  //4
  inpLength = matrix[0].length; //3
  let resultArray = []
  for (let line = 0; line < inpLength; line += 1) {
    resultArray[line] = [];
    for (let column = 0; column < inpHeight; column += 1) {
      debugger;
        [resultArray[line][column] = matrix[Math.abs(column - (inpHeight - 1))][line]];
    }
  }
  return resultArray;
}

let matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

let matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

let newMatrix1 = rotate90(matrix1);