/*
P:
Input:
  two arrays
Output:
  combined array with no duplicate values

E:

D:
input as arrays
process as arrays
compare array entries as strings in object
return array


A:
set array1
set array2
combine array1 and array2
filter (opposite of if object contains key)
return array

C:
*/
function union(...args) {
  let valueMap = {};
  let combinedArray = []
  for (value of args) {
    combinedArray = combinedArray.concat(value)
  }
  let filteredArray = [];  
  for (value of combinedArray) {
    if  (!filteredArray.includes(value)) {
      filteredArray.push(value);
    }
  }
  /*let filteredArray = combinedArray.filter(function(value) {
    if (valueMap.hasOwnProperty(String(value))) {
      return false
    } else {
      valueMap[String(value)] = 1
      return true
    }
  })*/
return filteredArray
}

