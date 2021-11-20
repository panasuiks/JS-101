/*
P:
Input:
  string
Output:
  doubles every character and returns result

E:

D:
input as string
process as string
output as string



A:
set string
reach character and add it twice to new string
return new string

C:
*/
function repeater(inpString) {
  let resultString = ''
  for (let char of inpString) {
    resultString = resultString + char + char
  }
  return resultString
}
