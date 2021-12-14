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
  height = matrix.length;
  for (i = 0; i < matrix.length; i += 1) {
    if (matrix[i].length !== height) {
      return 'error'
    }
  }
  for (i = 0; i < matrix.length; i += 1) {
    for (j = 0; j < matrix.length; j += 1) {
      if (i + j <= 2) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
  }
  return;
}