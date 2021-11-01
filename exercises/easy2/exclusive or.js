/*
P:
Input:
  two inputs (no definition fo string etc)
Output:
  output false if either neither input is truthy or neither input is falsey.  true if only one input it truthy.

E:
Example 1
  input 5 and 0
  output true
Example 2
  input: 5 and '0'
  oupput: false
example 3
  input false and true
  output: true
example 4
  input 1 and 1
  output false
example 5
  input true and true
  output false

D:
input unknown
output boolean

A:
input is unknown.  
convert input to boolean
if one is truthy and other is falsey, true
if one is falsey and other is truthy, true
else false

E:
5 truthy 0 falsy, true
5 truthy '0' truthy, true
false false true true, true
1 true 1 true, false
true true true true, false

C:
*/

function xor (inp1, inp2) {
  return  !((!inp1 && !inp2)  || (!!inp1 && !!inp2)) 
}

console.log(xor(5, 0));
console.log(xor(5, '0'));
console.log(xor(false, true));
console.log(xor(1, -1));
console.log(xor(true, true));
