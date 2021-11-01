/*
P:
Input:
  input number (integer > 1)
Output:
  sum of numbers between 1 and input (inclusive) that are multiples of 3 and 5

E:
Example 1
  input 3
  output = 3
Example 2
  input 5
  output 8
Example 3
  input 10
  output = 33
example 4
  input 1000
  ouput 234168

D:
input is number
calculations done number
ouput is number

A:
initialize at 0
loop through starting at 3 as long as iterator is less than or equal to number.  add if it's divisible by 3 or 5.  iterate by 1.  
return number

E:
0 + 3 = 3
3 + 5 = 8
3 + 5 + 6 + 9 + 10 = 33

C:
*/

const multiSum = inp => {
  let result = 0
  for (let i = 3; i <= inp; i += 1) {
    //    if ((i % 3 === 0) || (i % 5 === 0)) {
    if (isMultiple(i, 3) || isMultiple(i, 5)) {
      result += i;
    }
  }
  return result
}

const isMultiple = (num, divisor) => {
  return (num % divisor === 0);
}

console.log(multiSum(3));       // 3
console.log(multiSum(5));       // 8
console.log(multiSum(10));      // 33
console.log(multiSum(1000));    // 234168