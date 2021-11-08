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

/*const isPalindrome = inpString => {
  for (i = 0; i <= ((inpString.length / 2) - 1); i += 1) {
    if (inpString[i] !== inpString[inpString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
*/
const isPalindrome = inpString => {
  return inpString === inpString.split('').reverse().join('');
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));  
