/*
P:
Input:
  two arrays
Output:
  multiply index by index, return on array same length with multiples

E:

D:
input as array
process as numbers/array
return array

A:
set inp arrays
set output = []
for each index
  output(index) = inp1 index  * inp2 index
return output

C:
*/
function multiplyList(inp1, inp2) {
  let output = []
  for (index in inp1) {
    output[index] = inp1[index] * inp2[index]
  }
  return output
}