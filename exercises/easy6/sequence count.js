/*
P:
Input:
  two integers (count and starting)
Output:
  return array containing same number of elements as count and value is a multiple of the starting number
E:

D: 
input as two numbers
process as array
return array

A:
set count
set start num
set result array = []
set iterator = 1
while iterator <= count
  resultArray[iterator-1] = iterator * num
  iterator + 1

C:
*/

function sequence(count, start) {
  let result = [];
  let iterator = 1;
  while (iterator <= count) {
    result[iterator - 1] = iterator * start;
    iterator += 1;
  }
  return result;
}