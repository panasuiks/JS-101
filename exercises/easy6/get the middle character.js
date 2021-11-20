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

function centerOf(inpString) {
  let middle = (inpString.length - 1) / 2
  if (inpString.length % 2 === 0) {
    return inpString.slice(Math.floor(middle), Math.floor(middle) + 2);
  } else {
    return inpString[middle];
  }
}