/*
P:
Input: 
  two array arguments each list of numbers
Output:
  array with products of all combinations of number pairs that exist between the arrays
  sorted in ascending numerical order

D: 
input as array
process as array
output as array

A:
set arrays
set result array
loop through first array. multiply each entry by looping through the 2nd array.
  add returned value to result array
sort result array from small to large
return result array



C:
*/

function multiplyAllPairs(array1, array2) {
  let resultArray = [];
  for (i = 0; i < array1.length; i += 1) {
    for (j = 0; j < array2.length; j += 1) {
      resultArray.push(array1[i] * array2[j]);
    }
  }
  resultArray.sort((a, b) => a - b);
  return resultArray;
}