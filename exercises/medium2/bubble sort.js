/*
P:
Input:
  array
Output:
  a mutated array that is sorted using bubble sort

E:

D:
input as array
process as array


A:
set array
let sort = true;
while sort = true;
  sort = false;
  for (i = ...entries except last)
    if current > next
      swap
      sort = true

*/

function bubbleSort(array) {
  let arrayLength = array.length;
  let sort = true;
  while (sort === true) {
    sort = false;
    for (let i = 0; i < arrayLength - 1; i += 1) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]]
        sort = true;
      }
    }
  }
}