/*
P:
Input: 
  string
Output:
  string with staggered capitalization scheme 
  first and every other should be capitalized
  non-alphabetic characters count for changing

D: 
inp string
convert to array of characters
process characters
return string


A:
set string
convert string to array of characters
cycle through characters if index % 2 is 0, cap, else, lower
convert array to string
return string

C:
*/

function staggeredCase(inpString) {
  return inpString.split('').
         map((char, index) => (index % 2 === 0) ? char.toUpperCase(): char.toLowerCase()).
         join('');
}
