/*
P:
Input:
  one array
Output:
  an array with two arrays inside . Half + 1 in the first and the second half in the second.

E:

D:
input as arrays
process as arrays
return array of arrays


A:
create array 1 (slice)
create array 2 (slice)


C:
*/
function halvsies(inpArray) {
  let halfPlusOne = Math.ceil(inpArray.length / 2 );
  let first = inpArray.slice(0, halfPlusOne);
  let second = inpArray.slice(halfPlusOne);
  return [first, second];
}