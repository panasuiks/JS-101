/*
P:
Input:
  array of integers
Output:
  multiplies integers by each other and divides by number of entries
  string value rounded to 3 places

E:

D:
input as array
process as numbers/array
convert to string

A:
set inp array
set total = 1
for each value
  total = total * value
divide total by inp array length
return convert to string decimal places

C:
*/
function multiplicativeAverage(inpArray) {
  let total = 1;
  for (let value of inpArray) {
    total = total * value;
  }
  let average = total / inpArray.length;
  return average.toFixed(3);
}
//not necessary because toFixed rounds
const roundToDecimalPlaces = (value, dec = 0) => {
  return (Math.round(value * (10 ** dec)) / (10 ** dec));
}
