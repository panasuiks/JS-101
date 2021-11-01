/*
P:
Input:
  array
Output:
  array with every other element starting at index 0

E:
Example 1
  input [this, is, the, best]
  output [this, the]

D:
input array
output array

A:
make sure input is array
if array, map through if index % 2 is 0, push to new array


E:
this index 0, push
is index 1, continue
the index 2, push
best index 3, continue

C:
*/



function oddities(inpArray) {
  if (!Array.isArray(inpArray)) return
  let returnArray = []
  //return inpArray.filter((word, index) => (index % 2 === 0))
  for (key in inpArray) {
    if (key % 2 === 0) returnArray.push(inpArray[key]);
  }

  return returnArray;
}

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

//Further exploration
function evens(inpArray) {
  if (!Array.isArray(inpArray)) return
  let returnArray = []
  //return inpArray.filter((word, index) => (index % 2 === 0))
  for (key in inpArray) {
    if (key % 2 !== 0) returnArray.push(inpArray[key]);
  }

  return returnArray;
}

console.log(evens([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evens([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(evens(["abc", "def"])); // logs ['abc']
console.log(evens([123])); // logs [123]
console.log(evens([])); // logs []