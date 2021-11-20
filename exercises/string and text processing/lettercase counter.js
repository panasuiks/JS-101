/*
P:
Input: 
sting
Output:
object with lower, upper and neither keys with their values   

D: 
inp string
process as char
write to object

A:
set string
is lowercase
  add one to lower case
is uppercase?
  add one to uppercase
is neither?
  add one to neither


also could regex search and get a number?

C:
*/

function letterCaseCount(string) {
  let length = string.length
  let lower = string.match(/[a-z]/g) || []
  let upper = string.match(/[A-Z]/g) || []
  let output = {}
  output.lowercase = lower.length;
  output.uppercase = upper.length;
  output.neither = string.length - upper.length - lower.length;
  return output
}