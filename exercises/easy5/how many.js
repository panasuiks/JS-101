/*
P:
Input:
  array of words/strings
Output:
  console of string => occurence

E:

D:
input as array
generate object
output keys and values
  

A:
set hash ={}
input as array of string
for value or array
  hash = hash or 0
  hash + 1

for key in array
  print key => value
return array

C:
*/
function countOccurences(inpArray) {
  let hash ={}
  for (let value of inpArray) {
    value = value.toLowerCase();
    hash[value] = hash[value] || 0;
    hash[value] += 1;
  }
  for (let key in hash) {
    console.log(`${key} => ${hash[key]}`);
  }
  return
}

