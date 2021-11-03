/*
P:
Input:
  noun, verb, adjective, adverb
Output:
  sentences uses input strings

E:

  

D:
insert as string
return as string

A:
  GET noun
  GET verb
  GET adjective
  GET adverb

  create strings with string addition

  PRINT STRINGS
  IF number < 1
    return ''
  For i = 1 to number
    PRINT * repeat

C:
*/

const rlsync = require('readline-sync');

function getUserInput(wordType) {
  return rlsync.question(`Enter a ${wordType}: `)
}

let noun = getUserInput('noun');
let verb = getUserInput('verb');
let adjective = getUserInput('adjective');
let adverb = getUserInput('adverb');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);


