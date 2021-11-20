/*
P:
Input: 
  string
Output:
  array that contains every word followed bya space and the words length 
  if empty string or nothing, return empty array

D: 
inp string
convert to array of words
process words
return array


A:
set string
if variable is undefined
  return empty array
convert string to array of words
cycle through words 
  add " wordlength" to each word
return array

C:
*/

function wordLengths(inpString) {
  if (arguments.length === 0 || inpString.length === 0) return [];
  return inpString.split(' ')
                  .map(word => {
                    return word + ' ' + String(word.length);
                   })
}