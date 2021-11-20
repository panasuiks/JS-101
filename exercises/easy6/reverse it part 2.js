/*
P:
Input: 
  string (letters and spaces. words separated by words)
Output:
  5 letter or more words should have their letters in reverse order. 
E:

D: 
input as string
process as array
return string

A:
input as string


C:
*/

function reverseWords(sentence) {
  let sentenceArray = sentence.split(' ');
  let result = sentenceArray.map((word) => {
    return (word.length >= 5) ? word.split('').reverse().join('') : word
  })
  return result.join(' ');
}