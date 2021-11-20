/*
P:
Input:
  number
Output:
  negative number
E:

D:
input as number
process as number
return as number

A:
set number
convert to abs value
multiply by negative 1

C:
*/

function negative(inpNum) {
  return (inpNum < 0) ? inpNum: inpNum * -1;
}