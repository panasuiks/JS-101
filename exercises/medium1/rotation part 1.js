/*
P:
Input: 
  array
Output:
  return new array  
  rotates array by moving first to last
  undefined if not array

D: 
inp array
process array
return array

A:
set array
check to see if array, if not return
make shallow copy
read first entry, delete first entry, add to end
return shallow copy

C:
*/

function rotateArray(inpArray) {
  if (Array.isArray(inpArray) === false) return undefined;
  if (inpArray.length === 0) return [];
  let copyArray = inpArray.slice()
  copyArray.push(copyArray.shift());
  return copyArray
}
