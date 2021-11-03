/*
P:
Input:
  number
Output:
  index of fibonacci that has at least that many digits 

E:
2
3
10
16
100
1000
100000
  

D:
insert number
process as number
return as number

A:
  GET number - 
  SET iterator = 1
  SET value = 1
  SET prevValue = 0
  SET tempPrevValue = 0
  WHILE flag = true 
    tempPrevValue = value
    value += prevValue
    IF (value / 10 ** number) > 1
      return iterator
    prevValue = tempPrevValue
    iterator = iterator + 1
C:
*/

function findFibonacciIndexByLength(digits) {
  let iterator = 2n
  let value = 1n
  let prevValue = 0n
  let tempPrevValue = 0n
  while (2>1) {
    tempPrevValue = value
    value += prevValue
    if (value / (10n ** (digits - 1n)) >= 1n) {
      return iterator
    }

    prevValue = tempPrevValue;
    iterator += 1n;
  }
}

console.log(findFibonacciIndexByLength(2n));
console.log(findFibonacciIndexByLength(3n));
console.log(findFibonacciIndexByLength(10n)); 
console.log(findFibonacciIndexByLength(16n));
console.log(findFibonacciIndexByLength(100n));
console.log(findFibonacciIndexByLength(1000n));
console.log(findFibonacciIndexByLength(10000n));