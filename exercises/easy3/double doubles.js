/*
P:
Input:
  number
Output:
  double the number unles it's a "double number" in which case it should return the nnumber itself

E:

  

D:
insert as number 
process as string
return as number

A:
  GET number
  IF isNumberDoubleNumber is true
  return number
  else
  return number * number

  isNumberDoubleNumber(number0)
  if String(number).length % 2 === 0
    first = string.slice(0,length/2)
    second = string.slice(length/2)
    return first === second
  else
    return false

C:
*/

function isNumberDoubleNumber(inpNumber) {
  let stringRepresentation = String(inpNumber);
  if (stringRepresentation.length % 2 === 0) {
    let first = stringRepresentation.slice(0, stringRepresentation.length / 2);
    let second = stringRepresentation.slice(stringRepresentation.length / 2);
    return (first === second);
  }
  return false;
}

function twice(inpNumber) {
  return isNumberDoubleNumber(inpNumber) ? inpNumber: inpNumber * 2; 
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676