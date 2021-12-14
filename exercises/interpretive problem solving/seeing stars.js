/*
P:
Input:
  number
Output:
  8 pointed star grid as wide and tall as input number

star(9)
*   *   *
 *  *  *
  * * *
   ***
*********
   ***
  * * *
 *  *  *
*   *   *

E:


D:


A:
set output array = []
set length = number
set center = math.floor(length / 2)
let end = length - 1
for i = 0 to length
  output array[i] = []
  for j = 0 to length
  output array[i][j] = ' '

for line = 0 < center
  array[line][line] = '*'
  array[line][center] = '*'
  array[line][end - line] = '*'

for index = 0 to length
  array[center] = '*'

for line = center + 1, length
  array[line] = array[center = (line -center)]

for array of array
  console.log(array.join(''))



C:
*/
function star(inpNum) {
  let outputArray = [];
  let length = inpNum;
  let centerIndex = Math.floor(length / 2);
  let endIndex = length - 1;
  for (let i = 0; i < length; i += 1) {
    outputArray[i] = [];
    for (let j = 0; j < length; j += 1) {
      outputArray[i][j] = ' '
    }
  }

  for (let line = 0; line < centerIndex; line += 1) {
    outputArray[line][line] = '*';
    outputArray[line][centerIndex] = '*';
    outputArray[line][endIndex - line] = '*';
  }

  for (let index = 0; index < length; index += 1) {
    outputArray[centerIndex][index] = '*';
  }

  for (let line = centerIndex + 1; line < length; line += 1) {
    outputArray[line] = outputArray[centerIndex - (line - centerIndex)];
  }

  for (line of outputArray) {
    console.log(line.join(''));
  }
}