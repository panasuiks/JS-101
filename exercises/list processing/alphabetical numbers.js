/*
P:
Input: 
  array of integers between 0 and 19
Output:
  return array of integers sorted based on english words for each number

E:
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

D: 
input as array
process as array/string
return array

A:
set letters array [zero, one, two...]
array sort() first el < second el






C:
*/
const LETTERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];

function alphabeticNumberSort(array) {
  resultArray = array.slice();
  resultArray.sort((first, second) => {
    if (LETTERS[first] < LETTERS[second]) return -1;
    if (LETTERS[first] > LETTERS[second]) return 1;
    return 0;
  })
  return resultArray
}
