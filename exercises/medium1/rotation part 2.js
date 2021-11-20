/*
P:
Input: 
  two numbers
Output:
  number that rotates digit number to the far right

D: 
inp as number
convert to string
convert to array
process as array
convert to string/ number 
return number

A:
set string
set array
set digit
replace digit with nothing
push digit to end
convert to string then number
return number

C:
*/

function rotateRightmostDigits(num, dig) {
  let numString = String(num);
  let indexOfDig = numString.length - dig;
  let start = numString.slice(0, indexOfDig);
  let finish = rotateString(numString.slice(indexOfDig))
  return Number(start + finish);
}

function rotateString(inpString) {
 return inpString.slice(1) + inpString.slice(0,1);
}
