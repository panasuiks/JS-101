/*
P:
Input: 
  grocery list in two dimensional array
Output:
  returns a one dimensional array with fruit name repeated however many times fruit is wanted
  

D: 
inp as 2d array
return as 1D array

A:
set array 

C:
*/

function sumOfSums(numbers) {
  let result = []
  for (i = 0; i < numbers.length; i += 1) {
    if (i === 0) {
      result[i] = numbers[i];
    } else {
      result[i] = result[i - 1] + numbers[i]
    }
  }
  return result.reduce((prev, current) => {
    return prev + current
  }, 0)
}

