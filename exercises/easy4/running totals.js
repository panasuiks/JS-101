/*
P:
Input:
  array with numbers [1, 2, 3]
Output:
  the array with running totals [1, 3, 5] 

  E:

D:
input array of numbers
handle as array with numbers
output array with numbers

A:
  set sum = 0  
  for (let x in array)
      sum = sum + x
      array[x] = sum
    ]

  
C:
*/
function runningTotal(inpArray) {
  let sum = 0
  let result = []
  for (index in inpArray) {
    sum += inpArray[index];
    result[index] = sum
  }
  return result
}

function runningTotal(inpArray) {
  let sum = 0;
  let result = inpArray.map(function(value) {
    oldSum = sum
    sum += value;
    return value + oldSum;
  })
  return result
}
