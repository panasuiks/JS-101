/*
P:
Input:
  string
Output:
  sring logged in a box

E:

  

D:
insert string
process as string
log as string

A:
  GET string from user
  SET stringLengh = length of string
  SET boxlength = string length + 4
  Function(s) to create line strings
  PRINT line strings

  

C:
*/
let rlsync = require('readline-sync');

function prompt(inp) {
  console.log('=> ' + inp);
}

function userStringInput() {
  prompt('Please enter a string:')
  let input = rlsync.question();
  return input
}

function userLengthInput() {
  prompt('Please enter the maximum width in characters:')
  let input = Number(rlsync.question());
  return input
}

function trimString(inpString, maxLength) {
  if (inpString.length > maxLength) {
    return inpString.slice(0, maxLength);
  }
  return inpString
}

function createTopBottom(inpString) {
  let output = '+';
  for (let i = 1; i <= inpString.length + 2; i += 1) {
    output += '-';
  }
  output += '+';
  return output;
}
//function createTopBottom(inpString) {`+${'-'.repeat(inpString.length + 2)}+`}

function createMiddle(inpString) {
  let output = `| ` + inpString + ` |`;
  return output
}

function createBlanks(inpString) {
  let output = '|';
  for (let i = 1; i <= inpString.length + 2; i += 1) {
    output += ' ';
  }
  output += '|';
  return output;
}

let continueFlag = true;

while (continueFlag) {
  let userString = userStringInput();
  let userMaxLength = userLengthInput();
  while ((userMaxLength < 4) && (userMaxLength >0)) {
    prompt('This display does not work with for lengths less than 4.')
    userMaxLength = userLengthInput();
  }

  if ((userMaxLength > 0)  && (userString.length > (userMaxLength - 4))) {
    userString = trimString(userString, (userMaxLength - 4));
  }

  let line1 = createTopBottom(userString);
  let line2 = createBlanks(userString);
  let line3 = createMiddle(userString);
  let line4 = line2;
  let line5 = line1;
  console.log(line1);
  console.log(line2);
  console.log(line3);
  console.log(line4);
  console.log(line5);
}


