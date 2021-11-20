/*
P:
Input: 
  string
Output:
  string with first letter capitalized and all subsequent lower case
  word word is any sequence of non-whitespace character

D: 
inp string
convert to array
handle strings within array
convert back to string and return


A:
set string
convert string to array of "words"
cycle through the words and capitalize the first letter and lowercase the rest of the letters
  What happens when you lowercase "non letters" - non letter.
  how to handle one letter words?

C:
*/

function wordCap(inpString) {
  let wordArray = inpString.split(' ');
  resultArray = wordArray.map(word => word[0].toUpperCase() + word.slice(1).toLowerCase());
  return resultArray.join(' ');
}