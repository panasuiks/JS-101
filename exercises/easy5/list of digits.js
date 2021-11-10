/*
P:
Input:
  number
Output:
  array of digits (radix 10)

E:

D:
input as number
convert to string
split to array

input as number

return array
  

A:

C:
*/
function digitList(num) {
  stringArray = String(num).split('')
  let output = stringArray.map((value) => {
    return Number.parseInt(value, 10);
  })
  return output;
}

function digitList(num, radix = 10) {
  let result = []
  while (num >= 1) {
    result.unshift(num % radix)
    num = Math.floor(num / radix);
  }
  return result
}