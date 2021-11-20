/*
P:
Input:
  number
Output:
  the reverse number (leading zeros get dropped)

E:

D:
input as number
convert to string
reverse string
convert to number
output as number

A:
set number
convert to string
reverse string
convert to number
output as number

C:
*/

function reverseNumber(inpNum) {
  let inpArray = String(inpNum).split('');
  let outArray = inpArray.reverse();
  let outString = outArray.join('');
  let outNumber = Number(outString);
  return outNumber;
}