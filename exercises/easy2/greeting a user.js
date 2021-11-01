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

function greetingsScreamCheck(inpName) {
  if (inpName[(inpName.length-1)] === '!') {
    inpName = inpName.toUpperCase().slice(0,-1)
    return `HELLO ${inpName}. WHY ARE WE SCREAMING!?`
  }

  return `Hello ${inpName}.`
}

let rlSync = require('readline-sync');
let name = rlSync.question('What is your name? ');
console.log(greetingsScreamCheck(name));