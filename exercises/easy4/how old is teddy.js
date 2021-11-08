/*
P:
Input:
  nothing
Output:
  random age between 20 and 120
E:

  

D:
report as string and number

A:
    SET age using random
    output string with age

  
C:
*/
function randomWholeBetween(min, max) {
  if (min < max) {
    oldMin = min;
    min = max;
    max = oldMin;
  }  
  let num = Math.random()
  num = Math.floor(num * (max - min + 1))
  num += min
  return num
}

const MIN_AGE = 20;
const MAX_AGE = 120;

age = randomWholeBetween(120, 20);

console.log('Teddy is ' + age + ' years old!');