/*
P:
Input:
  array of strings
Output:
  string with longest common prefix

E:

D:


A:
set array
set result = ''
character iterator = 1
while (true)
  iterator = 1 
  let result = ''
  if (slice == slice === slice)
    result = slice
    iterator += 1
  else
    return result
*/

function commonPrefix(inpArray) {
  let testArray = inpArray.slice().sort((a, b) => a.length - b.length)
  let minLength = testArray[0].length;
  let result = ''
  for (i = 0; i < minLength; i += 1) {
    let char = testArray[0][i];
    for (word of testArray) {
      if (word[i] !== char) {
        return result;
      }
    }
    result += char;
  }
  return result;
}

console.log(commonPrefix(['flower', 'flow', 'flight']))
console.log(commonPrefix(['dog', 'racecar', 'car']) === '')
console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']))
console.log(commonPrefix(['throne', 'dungeon']))
console.log(commonPrefix(['throne', 'throne']))

/*
P:
Input:
  array of strings that are numbers
Output:
  boolean (at least three of the elements in the array have digits whose sum is divisible by 3)

E:

D:
input as array of numbers
convert number to string
sum number digits
if number digits divisible by 3, include

A:
set array of numbers
array.filter(
  number => {
    sum = sumnumber
    return sum % 3 === 0
  }
)

sum number
let string = String(number)
length - string.length
let result = 0
for i = 0 to length
  result += string[i]
return result
*/

function threeByThree(numArray) {
  const DIVISOR = 3;
  const TRUE_THRESHOLD = 3;
  let returnArray = numArray.filter(number => {
    let sum = sumNumber(number);
    return (sum % DIVISOR === 0);
  })
  return (returnArray.length >= TRUE_THRESHOLD);
}

function sumNumber(numString) {
  let result = 0;
  for (i = 0; i < numString.length; i += 1) {
    result += Number(numString[i]);
  }
  return result;
}

console.log(threeByThree(['01112', '0111', '00030', '2043','12043']));

console.log(threeByThree(['01112', '2043', '12043']));

console.log(threeByThree(['01112', '2043']));

console.log(threeByThree(['93', '9', '1', '25', '1212']))
