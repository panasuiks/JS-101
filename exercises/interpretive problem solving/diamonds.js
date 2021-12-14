/*
P:
Input:
  number (odd integer > 1)
Output:
  four pointed diamond in an x by x pattern
E:

D:
input as numbers
convert to array of strings
display array
A:
let resultarray = []
let totalLength = input
let char = 1
for i = 1 to math.ceil(total length /2) 
  let spaces = )(total-char) / 2
  resultarray push(' '.repeat(space) + *.repeat(char))
  char += 2

for i = math.ceil(total length /2) - 1, 1
  push previous

for value of array
  console.logvalue


C:
*/
function diamond(inpNum) {
  let resultArray = [];
  let length = inpNum;
  let centerIndex = Math.floor(length / 2);
  for (let i = 0; i < length; i += 1) {
    resultArray[i] = []
    for (let j = 0; j < length; j += 1) {
      resultArray[i][j] = ' ';
    }
  }
  for (let line = 0; line <= centerIndex; line += 1) {
    let firstIndex = centerIndex - line;
    let secondIndex = centerIndex + line;
    resultArray[line][firstIndex] = '*';
    resultArray[line][secondIndex] = '*'
  }
  for (let line = centerIndex + 1; line < length; line += 1) {
    resultArray[line] = resultArray[centerIndex - (line - centerIndex)]
  }
  for (let values of resultArray) {
    console.log(values.join(''));
  }
}

