/*
P:
Input:
  input 1: two integers
Output:
  prints =, 0, *, /, % and **

E:
Example 1
23 and 17
Example 2
40, 6, 391, 1, 6, max

D:
input as number
calculate as number
print as string representation of numbers

A:
take inputs, do math

E:

C:
*/

let rlSync = require('readline-sync');
let num1 = rlSync.questionFloat('Enter the first number:\n');
let num2 = rlSync.questionFloat('Enter the second number:\n');

printAll(num1,num2);

function printAll(inpNum1, inpNum2) {
  console.log(num1 + ' + ' + num2 + ' = ' + (num1 + num2));
  console.log(num1 + ' - ' + num2 + ' = ' + (num1 - num2));
  console.log(num1 + ' * ' + num2 + ' = ' + (num1 * num2));
  console.log(num1 + ' / ' + num2 + ' = ' + Math.floor((num1 / num2)));
  console.log(num1 + ' % ' + num2 + ' = ' + (num1 % num2));
  console.log(num1 + ' ** ' + num2 + ' = ' + (num1 ** num2));
}
