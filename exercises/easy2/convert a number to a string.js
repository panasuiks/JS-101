/*
P:
Input:
  number
Output:
  a string depicting the number

E:
Example 1
  

D:
input number
convert to array
output string

A:
number input
divide by 10, if greater than 1, add remainder, rewrite number divided by 10
divide by 10, if less than 1, add remainder,



C:
*/

function integerToString(inpNumber) {
  continueFlag = true
  returnArray = []
  while (continueFlag) {
    if ((inpNumber / 10) >= 1) {
      returnArray.unshift(Math.round(inpNumber % 10))
      inpNumber = Math.floor(inpNumber/10);
      continue
    }

    returnArray.unshift(Math.round(inpNumber % 10));
    continueFlag = false
  }
  return returnArray.join('');
}

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"