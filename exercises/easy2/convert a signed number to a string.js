/*
P:
Input:
  number (positive or negative)
Output:
  a string depicting the number

E:
Example 1
  

D:
input number
add digits to string
output string

A:
number input
check if negative, if negative then multiply by -1 and set negative flag
divide by 10, if greater than 1, add remainder, rewrite number divided by 10
divide by 10, if less than 1, add remainder,



C:
*/


function integerToString(inpNumber) {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  let returnString = ''
  let inpNumberAbs = Math.abs(inpNumber);
  do {
    returnString = digits[Math.round(inpNumberAbs % 10)] + returnString
    inpNumberAbs = Math.floor(inpNumberAbs / 10);
  } while (inpNumberAbs / 10 >= .1)

  return returnString
}

function signedIntegerToString(inpNumber) {
  switch (Math.sign(inpNumber)) {
    case 1:
      return '+' + integerToString(inpNumber);
    case -1:
      return '-' + integerToString(inpNumber);
    default:
      return integerToString(inpNumber);
  }
}

console.log(signedIntegerToString(4321));        // "4321"
console.log(signedIntegerToString(0));           // "0"
console.log(signedIntegerToString(-5000));        // "5000"
console.log(signedIntegerToString(1234567890));  // "1234567890"