/*
P:
Input: 
  array of strings
Output:
  array of strings with vowels removed
  

D: 
inp array
process as string
return as array

A:
cycle through each string and remove the vowels using the string remove function

C:
*/

function removeVowels(inpArray) {
  return inpArray.map((string) => {
    return deleteVowels(string)
  })
}

function deleteVowels(inpString) {
  let vowels = 'aeiouAEIOU'
  let inpArray = inpString.split('');
  let resultArray = inpArray.filter(char => {
    return (vowels.indexOf(char) < 0)
  })
  return resultArray.join('');
}

function removeVowels(inpArray) {
  return inpArray.map(string => string.replace(/[aeiou]/gi), '')
}