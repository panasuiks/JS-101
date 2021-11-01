/*
P:
Input:
  input 1: integer greater than 0
  input 2: sum or product
Output:
  print either the sum of the intergers between 1 and the input or the product of the integers between 1 and the input.  

E:
Example 1
  input = 5 and sum
  output = 15 sum
Example 2
  input = 5 and product
  output = 180 product

D:
Input redline sync (as integer) and string
calclate as number
output will be string representation in console

A:
ask for integer and sum or product
resultant starts at 1
if it is sum, add input to resultant and cycle down until 1
if it is product, multiply input times resultant and cycle down until 2

E:
Examples:
Example 1
  input = 5 and sum
  output = resultant (1) + 5 + 4 + 3 + 2
Example 2
  input = 6 and p
  output = resultant (1) * 6 * 5 * 4 * 3 * 2

C:
*/

/* //Code hidden for further exploration
let rlSync = require('readline-sync');
let inpString = '';
let inpValue;
do {
  inpValue = rlSync.questionInt('Please enter an integer greater than 0: ');
} while (inpValue <= 0);

do {
  inpString = rlSync.question('Enter "sum" to comput sum or "product" to compute the product: ');
} while (!((inpString.toLowerCase() === 'sum') || (inpString.toLowerCase() === 'product')));

if (inpString.toLowerCase() === 'sum') {
  console.log(`The ${inpString.toLowerCase()} of the integers between 1 and ${inpValue} is ${calculateSum(inpValue)}.`);
} else if (inpString.toLowerCase() === 'product') {
  console.log(`The ${inpString.toLowerCase()} of the integers between 1 and ${inpValue} is ${calculateProd(inpValue)}.`)
}

function calculateSum(value) {
  let result = 1
  for (i = value; i > 1; i -= 1) {
    result += i;
  }

  return result
}

function calculateProd(value) {
  let result = 1
  for (i = value; i > 1; i -= 1) {
    result *= i;
  }

  return result
}
*/

//Futher Exploration
let rlSync = require('readline-sync');
let inpString = '';
let inpValues = '';
let inpValuesArray = [];
let nonIntFlag = false
do {
  inpValues = rlSync.question('Please enter integers greater than 0 separated by a comma: ');
  inpValuesArray = inpValues.split(',');
  nonIntFlag = false
  for (index in inpValuesArray) {
    if (!(Number.isInteger((parseFloat(inpValuesArray[index]))))) {
      nonIntFlag = true
      console.log('An error has occured. Please try again.')
    } else {
      inpValuesArray[index] = parseInt(inpValuesArray[index].trim());
    };

  }
} while (nonIntFlag === true);


do {
  inpString = rlSync.question('Enter "sum" to comput sum or "product" to compute the product: ');
} while (!((inpString.toLowerCase() === 'sum') || (inpString.toLowerCase() === 'product')));

if (inpString.toLowerCase() === 'sum') {
  let sumArray = calculateSum(inpValuesArray);
  for (value in sumArray) {
    console.log(`The ${inpString.toLowerCase()} of the integers between 1 and ${inpValuesArray[value]} is ${sumArray[value]}.`)
  }
} else if (inpString.toLowerCase() === 'product') {
  let prodArray = calculateProd(inpValuesArray);
  for (value in prodArray) {
    console.log(`The ${inpString.toLowerCase()} of the integers between 1 and ${inpValuesArray[value]} is ${prodArray[value]}.`)
  }
}

function calculateSum(valuesArray) {
  let resultArray = []
  for (index in valuesArray) {
    let result = 1
    for (i = valuesArray[index]; i > 1; i -= 1) {
      result += i;
    }
    resultArray.push(result);
  }

  return resultArray
}

function calculateProd(valuesArray) {
  let resultArray = []
  for (index in valuesArray) {
    let result = 1
    for (i = valuesArray[index]; i > 1; i -= 1) {
      result *= i;
    }
    resultArray.push(result);
  }

  return resultArray
}







