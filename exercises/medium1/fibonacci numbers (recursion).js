/*
P:
Input: 
  number
Output:
 fibonacci sequence
 


D: 
inp as number
process as number
return as number

A:
set number
if number < 2
  return number
return function(num-1) + function (num-2)

C:
*/

function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}