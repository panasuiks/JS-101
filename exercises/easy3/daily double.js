/*
P:
Input:
  string with potential consecutive duplicate characters
Output:
  a string with the consecutive duplicate characters removed

E:

  

D:
insert string
process as array
return as string

A:
  SET inputString
  SET inputArray = inputString split up
  Loop through array
    If character != next character
      add to new array
    If last character
      add to new array

C:
*/

function isStringValid(inpString) {
  return (typeof inpString === 'string') 
}


function crunch(inpString) {
  if (isStringValid(inpString) === false) {
    return
  }
  let inpArray = inpString.split('');
  let outArray = []
  inpArray.forEach((element, index) => {
    if (index >= (inpArray.length - 1)) { //this adds last character
      outArray.push(element);
      return
    }
    if (element !== inpArray[index + 1]) { //this adds character if not equal
      outArray.push(element);
    }
  })
  return outArray.join('');
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""