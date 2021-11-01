/*
P:
Input:
  input; string with at least two words
Output:
  prints the second to last word

E:
Example 1
  input: this is the end
  output: the
Example 2
  input: this is
  oupput: this

D:
input as string
split into array
return string

A:
input as string
split into array at ' '
return string from 2nd to last array index

E:

C:
*/
const penultimate = sentence => {
  let sentenceArray = sentence.split(' ');
  return sentenceArray[sentenceArray.length -2];
}

console.log(penultimate("last word"));
console.log(penultimate("Launch School is great!"));

//Further Exploration

/*
Odd Cases:
not a string
no word separator
one word
even number of words
*/



function isString(inp) {
  return (typeof inp === 'string')
}

const middleWord = sentence => {
  if (!isString(sentence)) return undefined

  let sentenceArray = sentence.split(' ');
  if ((sentenceArray.length % 2 === 0 ) || (sentenceArray.length < 1))  return undefined

  return sentenceArray[Math.floor(sentenceArray.length / 2)];

}

console.log(middleWord("last word"));
console.log(middleWord("Launch School is great!"));
console.log(middleWord("Launch School is great ish!"));
console.log(middleWord("Launch!"));