/*
P:
Input:
  template
Output:
  madlib with inputs

E:

  

D:
object for words
insert template as string
process template into array
replace words
return string

A:
set object noun: ....., verb: ......
insert string
separate into array by ' '
for each word
  if object keys include word
      replace with random word

C:
*/
const WORDSOBJ = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
}

function madlibs(template) {
  let inputArray = template.split(' ');
  for (i = 0; i < inputArray.length; i += 1) {
    wordOptions = WORDSOBJ[inputArray[i]];
    if (wordOptions !== undefined) {
      inputArray[i] = wordOptions[Math.floor((Math.random() * wordOptions.length))];
    }
  } 
  return inputArray.join(' ');
}

console.log(madlibs('this is my favorite noun'));