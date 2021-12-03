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
set prev1 = 1
set prev2 = 1
set current = 1
temp current = 1
for i = 3 i <= n i++
  current = prev2 + prev1
  prev1 = prev2
  prev2 = current
return current

C:
*/

function fibonacci(n) {
  let prev1 = 1;
  let prev2 = 1;
  let current = 1;
  for (i = 3; i <= n; i++) {
    current = prev2 + prev1;
    prev1 = prev2;
    prev2 = current;
  }
  return current;
}