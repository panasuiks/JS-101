/*
P:
Input: 
  string
Output:
  list of all palindromic substrings of that string sorted by order of appearance
  duplicates included multiple times

D: 
input as string
process as string into array return array of palindromes


A:
set array of substrings
loop through substrings checking to see if they are palindrome

string is palindrome if 
first matches last, second matches second to last etc

C:
*/

function substrings(inpString) {

  let result = [];
  for (let i = 0; i < inpString.length; i += 1) {
    let currentString = inpString.slice(i);
    let newArray = leadingSubstrings(currentString)
    result = result.concat(newArray);
  }
  return result;
  /*
  for (i = 0; i < inpString.length; i += 1) {
    for (j = i + 1; j < inpString.length + 1; j += 1) {
      result.push(inpString.slice(i, j));
    }
  }
  return result;
  */
}

function leadingSubstrings(inpString) {
  let result = [];
  for (let i = inpString.length; i > 0; i -= 1) {
    result.push(inpString.slice(0, i))
  }
  result.sort((a, b) => a.length - b.length);
  return result;
}

function substrings(inpString) {
  let inpArray = inpString.split('')
  let processArray = inpArray.slice();
  let result = processArray.map((value, index) => {
    return leadingSubstrings(inpArray.slice(index).join(''));
  })

  return result.flat()
}

function isPalindrome(inpString) {
  if (inpString.length < 2) return false;
  // could use word.split('').reverse().join('')
  for (i = 0; i < ((inpString.length - 1) / 2); i += 1) {
    if (inpString[i] !== inpString[inpString.length - 1 - i]) {
      return false
    }
  }
  return true
}

function palindromes(inpString) {
  let strings = substrings(inpString)
  return strings.filter(value => isPalindrome(value))
}