/*
P:
Input:
  string of name
Output:
  either "Hello name" or "HELLO NAME! WHY ARE WE SCREAMING?" if there is an exclamation mark at the end

E:
Example 1
  Bob
  output Hello Bob
Example 2
  Bob!
  output HELLO BOB! WHY ARE WE SCREAMING!?

D:
input is a string. processed as a character. output is a string.

A:
check last character. if ! then change output

E:

C:
*/

const multiply = (number1, number2) => number1 * number2;
const square = number => multiply(number, number);


console.log(multiply(5, 3));
console.log(square(5));
console.log(square(-8));

//further exploration

const powerOfn = (number, n) => {
  let result = number;
  for (i = n; n >= 2; n -= 1) {
    result = multiply(result, number);
  }
  return result
}

console.log(powerOfn(3, 10));