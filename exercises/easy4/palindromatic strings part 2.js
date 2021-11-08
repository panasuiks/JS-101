/*
P:
Input:
  string
   
Output:
  true or false depending on if it's a palindrome

E:

D:
input as string
process as string

A:
set string
set stringLength
for i = 0, i < stringlength/2, i++
compare string[i] and string[string length - 1 - i]
if not same, false break
C:
*/

const ZERO_CHAR_CODE = 48;
const NINE_CHAR_CODE = 57;
const CAP_A_CHAR_CODE = 65;
const CAP_Z_CHAR_CODE = 90;
const LOW_A_CHAR_CODE = 97;
const LOW_Z_CHAR_CODE = 122;

const isNumber = char => {
  return (char >= '0') && (char <= '9');
}
const isLowLetter = char => {
  return (char >= 'a') && (char <= 'z');
}

const removeNonAlphaNumeric = inpString => {
  let inpArray = inpString.toLowerCase().split('');
  let trimmedArray = inpArray.filter(char => {
    return isNumber(char) || isLowLetter(char);
  })
  return trimmedArray.join('');
}

const isRealPalindrome = inpString => {
  let testString = removeNonAlphaNumeric(inpString);
  return isPalindrome(testString)
}

const isPalindrome = inpString => {
  return inpString === inpString.split('').reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));   