/*
P:
Input:
  string of zero or mor space separated words
Output:
  object shows number of words of different sizes

E:

D:
input as string
separate into array
for each array entry
  if undefined = 1
  else 'length' = 'length' + 1


A:
set return object
for each array entry
  if undefined = 1
  else 'length' = 'length' + 1
return object
  
C:
*/
function isLowerLetter(inpChar) {
  return (inpChar >= 'a' && inpChar <= 'z');
}

function isCapLetter(inpChar) {
  return (inpChar >= 'A' && inpChar <= 'Z');
}

function removeNonLettersNonSpaces(inpString) {
if (typeof inpString !== 'string') return;
let inpArray = inpString.split('');
let outArray = inpArray.filter(function(letter) {
  return (isLowerLetter(letter) || isCapLetter(letter) || letter === ' ');
})
let outString = outArray.join('');
return outString;
}

function wordSizes(inpString) {
  inpString = removeNonLettersNonSpaces(inpString);
  inpArray = inpString.split(' ');
  let resultObj = {}
  for (value of inpArray) {
    if (value.length > 0) {
      if (resultObj[value.length] === undefined) {
        resultObj[value.length] = 1;
      } else {
        resultObj[value.length] += 1;
      }
    }
  }
  return resultObj;
}
