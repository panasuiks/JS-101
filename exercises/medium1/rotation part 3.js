/*
P:
Input: 
  number
Output:
 rotated number
 rotate one, keep first digit in place, rotate, keep first 2 in place, rotate, keep first 3 in place, rotate, keep first 4 in place,


D: 
inp as number
convert to string
process as string
return as number

A:
set string
loop through each character
  keep beginning, rotate end
return

C:
*/

function maxRotation(inpNum) {
  let inpString = String(inpNum);
  for (i = 0; i < inpString.length; i += 1) {
    let start = inpString.slice(0, i);
    let finish = inpString.slice(i);
    let finishRotated = rotateString(finish)
    inpString = start + finishRotated;
  }
  return Number(inpString);
}

function rotateRightmostDigits(num, dig) {
  let numString = String(num);
  let indexOfDig = numString.length - dig;
  let start = numString.slice(0, indexOfDig);
  let finish = rotateString(numString.slice(indexOfDig))
  return Number(start + finish);
}

function rotateString(inpString) {
  return inpString.slice(1) + inpString.slice(0, 1);
}
