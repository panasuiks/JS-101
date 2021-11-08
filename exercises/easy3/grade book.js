/*
P:
Input:
  3 numbers
Output:
  grade

E:

  

D:
insert as number 
process as number
return string

A:
  GET numbers
  calculate average = 1 * 2 * 3 / 3 # of arguments passed
  determine grade using if statements and report

  C:
*/

function getGrade(...grades) {
  let sum = 0
  for (let value of grades) {
    sum += value;
  }
  let avg = sum / grades.length;
  if (avg > 100) return undefined;
  
  switch (Math.floor(avg / 10)) {
    case 10: return 'A'
    case 9: return 'A'
    case 8: return 'B'
    case 7: return 'C'
    case 6: return 'D'
    default: return 'F'
  }
}