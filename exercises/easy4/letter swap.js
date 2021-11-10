/*
P:
Input:
  string of words separated by spaces
Output:
  string with first and last letter of every word swapped.

  E:

D:
input as string
return string


A:
separate into array
set output array
set output string
for maparray entry
  swap first and last characters of word function
    set first char
    set last char
    slice
    outputarray.push(function word
C:
*/
function swapFirstAndLastOfString(inpWord) {
  if (inpWord.length < 2) return inpWord;
  let first = inpWord[0];
  let last = inpWord[inpWord.length - 1];
  return last + inpWord.slice(1,-1) + first;
}

function swap(inpString) {
  inpArray = inpString.split(' ');
  let outArray = inpArray.map( function(word) {
    return swapFirstAndLastOfString(word);
  })
  return outArray.join(' ');
}


function isCapLetter(inpChar) {
  return (inpChar >= 'A' && inpChar <= 'Z');
}
