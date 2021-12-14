/*
P:
Input:
  number
Output:
  difference between sum square and square sum

E:

D:
input as number
process as number
return number


A:
set number
call sum squares
call square sum
return difference

sum squares(number) 
  set number
  set sum = 0
  while number > 0
    sum += number
    number -1
  return  sum squared

sqare sums(number)
  set number
  set sum = 0
  while number > 0
    sum += number * number
    number - 1
  return sum
*/

function sumSquareDifference(number) {
  return sumSquare(number) - squareSum(number) 
}

function sumSquare(number) {
  let sum = 0;
  while (number > 0) {
    sum += number;
    number -= 1;
  }
  return sum * sum;
}

function squareSum(number) {
  let sum = 0;
  while (number > 0) {
    sum += (number * number);
    number -= 1;
  }
  return sum;
}