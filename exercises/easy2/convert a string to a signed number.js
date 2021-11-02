/*
P:
Input:
  string that is a number with a possible plus or minus sign in front of it
Output:
  a signed number dependent on sign

E:
Example 1
  

D:
input string
output number

A:
variable = plus or minus flag = +1
convert string to array of values
if first value is -, variable = -1 and delete first entry from array.



C:
*/

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
  let sign = 1
  let inpArray = inpString.split('');
  let sum = 0
  if (inpArray[0] === '-') {
    sign = -1
    inpArray.shift()
  }

  if (inpArray[0] === '+') {
    inpArray.shift()
  }

  for (let i = 0; i < inpString.length; i += 1) {
    sum += digits[inpString[i]]*(10**(inpString.length - 1 - i))
  }

  return sum

}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

/*
function hexToInt(inpString) {
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
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  }

  let inpArray = inpString.split('');
  let sum = 0
  for (let i = 0; i < inpString.length; i += 1) {
    sum += digits[inpString[i].toLowerCase()]*(16**(inpString.length - 1 - i))
  }

  return sum

}

console.log(hexToInt('4D9f'));
*/