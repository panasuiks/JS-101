/*
P:
Input: 
  two strings (one a word and other a string of words)
Output:
  the string with the word replaced with **CAPS**

D: 
inp two strings
replace  word in string (global)
return array length


A:
set string
replace word in string with **allcaps**
return string

C:
*/

function searchWord(word, string) {
  const re = new RegExp(('\\b' + word + `\\b`), 'gi');
  return string.replace(re, match => '**' + match.toUpperCase() + '**');
}