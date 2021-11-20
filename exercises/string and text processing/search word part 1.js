/*
P:
Input: 
  two strings (one a word and other undefined)
Output:
  integer representing how many times it is found.

D: 
inp two strings
search string for word (global)
return array length


A:
set string
search string for word
return length of array

C:
*/

function searchWord(word, string) {
  const re = new RegExp(('\\b' + word + `\\b`), 'gi');
  let matchArray = string.match(re);
  return matchArray ? matchArray.length : 0;
}