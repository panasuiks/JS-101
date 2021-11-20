/*
P:
Input: 
  string
Output:
  reverse order
E:

D: 
input as string
process as array
return string

A:
input as string


C:
*/

function reverseSentence(sentence) {
  let sentenceArray = sentence.split(' ');
  let sentenceArrayReverse = sentenceArray.reverse()
  return sentenceArrayReverse.join(' ');
}