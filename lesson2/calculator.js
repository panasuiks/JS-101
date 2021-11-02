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

const MESSAGES = require('./calculator_messages.json');

const readline = require('readline-sync');
let continueRunning = false;

function prompt(message) {
  console.log(`=> ${message}`);
}

function message(title, lang = 'en') {
  return MESSAGES[lang][title];
}

function calculator() {

  function invalidNumber(number) {
    return ((number.trim() === '') || Number.isNaN(Number(number)));
  }

  prompt(message('welcome', 'fr'));

  prompt(message('requestFirstNumber'));
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(message('invalidNumber'));
    number1 = readline.question();
  }

  prompt(message('requestSecondNumber'));
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(message('invalidNumber'));
    number2 = readline.question();
  }

  prompt(message('requestOperation'));
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt(message('invalidOperation'));
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


  prompt(`${message('result')}${output}.\n`);
  prompt(message('requestRetry'));
  let retry = readline.question();

  while ((retry.toLowerCase() !== 'yes') && (retry.toLowerCase() !== 'no')) {
    prompt(message('invalidRetryEntry'));
    retry = readline.question()
  }

  continueRunning = false
  if (retry.toLowerCase() === 'yes') {
    continueRunning = true
  }


}

do {
  calculator()
} while (continueRunning === true)

prompt(message('thanks'));

