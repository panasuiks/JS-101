/*
P:
Input:
  string that is a number
Output:
  array with every other element starting at index 0

E:
Example 1
  4321
  output = num 4321

D:
input string
output number

A:
loop through characters and sums ((length - 1) - index )* 10 except if index is length -1, then add value

E:


C:
*/



function stringToInteger(inpString) {
  let sum = 0
  for (let i = 0; i < inpString.length; i += 1) {
    sum += inpString[i]*(10**(inpString.length - 1 - i))
  }

  return sum

}
function stringToInteger(inpString) {
  const digits = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  }

  let inpArray = inpString.split('');
  let sum = 0
  for (let i = 0; i < inpString.length; i += 1) {
    sum += digits[inpString[i]]*(10**(inpString.length - 1 - i))
  }

  return sum

}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true