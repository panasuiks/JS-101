/*
P:
Input:
  3 numbers
Output:
  equilateral, isosceles, scalene, invalid depending on numbers

E:
Example 1
  input = 3, 3, 3
  output = equilateral
Example 2
  input 3, 3, 1.5
  output isosceles
Example 3
  input 3, 4, 5
  output scalene
Example 4
  input 0 3 3
  output invalid
Example 5
  input 3, 1, 1
  output invalid

D:
input 3 numbers
handle as numbers
output string

if 

A:
add values to array so we can use tools
check to see if values are numbers and are greater than 0, if not invalid
determine min, max, other (sorting function from min to max)

if min + other > max
  if a === b and b === c
    return equilateral
  if a === b or b === c or a === c
    return isosceles
  return scalene
return invalid

E:
3, 3, 3 equilateral
3, 3, 1.5 isosceles
3, 4, 5 scalene
0, 3, 3 invalid
3, 1, 1 invalid

C:
*/
userArray = [5, 3, 8]

function sortString(inpArray) {
  inpArray.sort(function (a, b) {
    return a - b;
  })
}

function determineTriangleType(sortedInput) {
  //This may not be most efficient way. Could just check if min is > 0 and if all numbers.
  for (value of sortedInput) {
    if ((typeof value !== 'number') || (value < 0)) {
      return 'invalid'
    }
  }
  let short = sortedInput[0]
  let mid = sortedInput[1]
  let long = sortedInput[2]
  if ((short + mid) > long) {
    if (short === mid && mid === long) {
      return 'equilateral';
    } else if (short === mid || mid === long) {
      return 'isosceles';
    }
    return 'scalene'
  }
  return 'invalid';
}

function triangle(a, b, c) {
  let userArray = [a, b, c];
  sortString(userArray);
  return determineTriangleType(userArray);
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
