/*
P:
Input:
  two sorted arrays
Output:
  new output array

E:

D:


A:
slice both array1 array2
result array = []
while (array 1 length > 0 || array2 length > 0)
  if array1[0]>=array2[0]
    resultarray.push(array1.shift())
    else
    resultarray.pop(array2.shift())

return result array
C:
*/
function merge(array1, array2) {
  array1 = array1.slice();
  array2 = array2.slice();
  let result = []
  while (array1.length > 0 && array2.length > 0) {
    if (array1[0] <= array2[0]) {
      result.push(array1.shift());
    } else {
      result.push(array2.shift());
    }
  }
  return result.concat(array1).concat(array2);
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]