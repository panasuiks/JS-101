//Lesson 2 Calculator!
/*
P:
  Input is two numbers, type of operation
  Output is the result of the operation on the two  numbers

E:
  Input 1, 2, sum: output 3
  Input 0, 1, divide: output 0
  input 1, 0, divide: output infinity

D:
input as numbers (with decimals) and input a string
process as numbers
Output as number converted to string

A:
Get inputs
Determine operation
Perform operation
Return number

C:
*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return ((number.trim() === '') || Number.isNaN(Number(number)));
}

prompt('Welcome to calculator!');

prompt('What\'s the first number?');
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt(`Hm... that doesn't look like a valid number.  Please input a valid number.`);
  number1 = readline.question();
}

prompt('What\'s the second number? ');
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt(`Hm... that doesn't look like a valid number.  Please input a valid number.`);
  number2 = readline.question();
}

prompt('What operation would you like to perform? \n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt(`Hm... Must choose 1, 2, 3, or 4.\n1) Add 2) Subtract 3) Multiply 4) Divide`);
  operation = readline.question();
}

let output;

switch (operation) {
  case '1': //addition
    output = Number(number1) + Number(number2);
    break;
  case '2': //subtraction
    output = Number(number1) - Number(number2);
    break;
  case '3': //multiplication
    output = Number(number1) * Number(number2);
    break;
  case '4': //division
    output = Number(number1) / Number(number2);
    break;
}

/* This code reduces the output to two decimal places
max but will retain 0 decimal places for integer.*/
let decimalPlaces = 2;
function roundAndDecimal(inpNum, decimals) {
  return Math.round(inpNum * (10 ** decimals)) / (10 ** decimals);
}

output = roundAndDecimal(output, decimalPlaces);


prompt(`The result is: ${output}`);