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

function merge(array) {
  if (array.length <= 1) return array;

  let array1 = array.slice(0, array.length/2);
  let array2 = array.slice(array.length/2);
  array1 = merge(array1);
  array2 = merge(array2);
  debugger;
  return sort(array1, array2);
}


function sort(array1, array2) {
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

console.log(merge([6, 4, 5, 1, 2]))