/*
P:
Input:
  string with non-alphabetic characters
Output:
  string with spaces in place

E:

  

D:
insert as string 
process as string or array
return string

A:
  GET string
  determine if character is alpha numeric (char code)
  if not, replace with space
  if yes, next character

C:
*/
const ZERO_CHAR_CODE = 48;
const NINE_CHAR_CODE = 57;
const CAP_A_CHAR_CODE = 65;
const CAP_Z_CHAR_CODE = 90;
const LOW_A_CHAR_CODE = 97;
const LOW_Z_CHAR_CODE = 122;

function cleanUp(inpString) {
  let inpArray = inpString.split('');
  for (index in inpArray) {
    let charCode = inpArray[index].charCodeAt();
    if (((charCode >= ZERO_CHAR_CODE) && (charCode <= NINE_CHAR_CODE)) ||
      ((charCode >= CAP_A_CHAR_CODE) && (charCode <= CAP_Z_CHAR_CODE)) ||
      ((charCode >= LOW_A_CHAR_CODE) && (charCode <= LOW_Z_CHAR_CODE))) {

    } else {
      if ((inpArray[index - 1] === ' ')  || (inpArray[index-1] === '')) {
        inpArray[index] = '';
      } else
        inpArray[index] = ' ';

    }
  }
  return inpArray.join('');
}

console.log(cleanUp("---what's my +*& line?"));