/*
P:
Input: 
  string
Output:
 string with number words converted to numbers
 


D: 
inp as string
convert to array
process as each 
return as string

A:
set string
set array
for each
  if object has key
    convert
  else
    nothing
join
return

C:
*/

let wordObject = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  zero: 0,
}

const wordToDigit = inpString => {
  for (key in wordObject) {
    let regex = new RegExp('\\b' + key + '\\b', 'g');
    inpString = inpString.replaceAll(regex, wordObject[key]);
  }
  return inpString;
}

const wordToDigit = inpString => {
  let inpArray = inpString.split(' ',);
  for (key in inpArray) {
    let word = inpArray[key];
    if (wordObject.hasOwnProperty(word)) {
      inpArray[key] = wordObject[word]
    }
  }
  return inpArray.join(' ');
}