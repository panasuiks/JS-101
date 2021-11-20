/*
P:
Input: 
  string
Output:
  true if all uppercase, false if not 
  

D: 
inp string
return as boolean

A:
set uppercasecharacters string
check to see if each character is included in uppercase character string.
  if not, return false

C:
*/

function isUppercase(inpString) {
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  for (i = 0; i < inpString.length; i += 1) {
    if (inpString[i] === ' ') continue;
    if (!UPPERCASE.includes(inpString[i])) return false;
  }
  return true
}

function isUppercase(inpString) {
  return inpString === inpString.toUpperCase();
}