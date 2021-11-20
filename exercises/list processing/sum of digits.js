/*
P:
Input: 
  positive integer
Output:
  returns sum of its digits

D: 
input as number
process as number
return number

A:
set number
let sum = 0
if num > 0 1,
sum = num + function(num-1)
else
return 0




C:
*/

function sum(number) {
  let summation = number % 10
  if (number > 10) {
    summation = number % 10 + sum(Math.floor(number / 10));
  }
  return summation
}

function sum(number) {
  let string = String(number);
  let array = string.split('');
  return array.reduce((previous, iterator) => Number(previous) + Number(iterator), 0)
}