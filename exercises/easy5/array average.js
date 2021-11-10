/*
P:
Input:
  array of integers
Output:
  outputs the average in number

E:

D:
input as array
process as number
output as number
  

A:
set input
set total = 1
for value in input
  total = total * value
set average = total / input length
return average

C:
*/
function average(inpArray) {
  let total = 1
  /*//regular
  for (value of inpArray) {
    total += value;
  }
  */
  /*//for each
  inpArray.foreach((value) => {
    total += value;
  })
  */
  //reduce
  const reducer = (current, previous) => {
    return current + previous
  }
  total = inpArray.reduce(reducer, 1)
  let average = total / inpArray.length;
  return Math.floor(average);
}