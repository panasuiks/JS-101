/*
P:
Input:
  six numbers from user
Output:
  wheter the last number appears in the earlier numbers

E:



D:
import as numbers in array



A:
  use array include
  if true, include if false, not include

  
C:
*/

const rlsync = require('readline-sync');

function prompt(string) {
  console.log('=> ' + string)
}

function collectNumbers(howMany) {
  output = []
  if (howMany < 1) return;
  for (i = 1; i <= howMany; i++) {
    if (i === howMany) {
      prompt(`Enter the last number:`)
      output.push(rlsync.questionFloat());
    } else {
      prompt(`Enter the ${numToOrdinal(i)} number:`)
      output.push(rlsync.questionFloat());
    }
  }
  return output;
}

function numToOrdinal(inpNum) {
  if (Math.floor((inpNum % 100) / 10) === 1) return inpNum + 'th';
  else if (inpNum % 10 === 1) return inpNum + 'st';
  else if (inpNum % 10 === 2) return inpNum + 'nd';
  else if (inpNum % 10 === 3) return inpNum + 'rd';
  else return inpNum + 'th';
}

let userInput = collectNumbers(6);
let userInputWithoutLast = userInput.slice(0, -1);
let userInputLast = userInput.slice(-1)[0];
if (userInputWithoutLast.includes(userInputLast)) {
  console.log(`The number ${userInputLast} appears in ${userInputWithoutLast.join()}.`)
} else {
  console.log(`The number ${userInputLast} does not appear in ${userInputWithoutLast.join()}.`)
}