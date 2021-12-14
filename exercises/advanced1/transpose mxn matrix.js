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
function transpose(matrix) {
  inpHeight = matrix.length;  //4
  inpLength = matrix[0].length; //3
  let resultArray = []
  for (let line = 0; line < inpLength; line += 1) {
    resultArray[line] = [];
    for (let column = 0; column < inpHeight; column += 1) {
        [resultArray[line][column] = matrix[column][line]];
    }
  }
  return resultArray;
}