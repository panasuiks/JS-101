/*
P:
Input:
  array of numbers
Output:
  duplicate value

E:

D:
input as array
process as "values", add to second array
return as number


A:
set inp array
set new hash object
for each in array
  if object key exists, return value
  if object key doesn't exist, make key and value same




C:
*/
function findDup(inpArray) {
  /*  let log = {}
    for (let i = 0; i < inpArray.length; i++) {
      if (log[inpArray[i]]) {
        return inpArray[i];
      } else {
        log[inpArray[i]] = true;
      }
    }
    return undefined*/

  let hash = {};
  for (let value of inpArray) {
    hash[value] = hash[value] + 1 || 1;
    if (hash[value] > 1) {
      return value;
    }
  }
  return undefined;
}
