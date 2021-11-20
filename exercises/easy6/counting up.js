/*
P:
Input:
  integer
Output:
  array counting up to that integer
E:

D:
input as number
add numbers to output array

A:
set number
while number > 0
  reverseshift

C:
*/

function sequence(inpNum) {
  let result = [];
  while (inpNum > 0) {
    result.unshift(inpNum);
    inpNum -= 1;
  }
  return result
}

//Can you use foreach or map?
//I suppose you could make an array pf enmpties that is the length of the inpNum and add one to each?
//This does not work. Doesn't iterate through undefined portions of array. Neat!
function sequence(inpNum) {
  let result = []
  result[inpNum] = inpNum;
  let test = []
  result.forEach((value, index) => test[index] = index + 1);
  return test
}

