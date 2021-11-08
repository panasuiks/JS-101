/*
P:
Input:
  number (year)
Output:
  century
E:

  

D:
insert as number
calculate as number
convet to string
add ending
report as string

A:
  GET number
  century = ceil(num/100)
  if ending in 1, st
  if ending in 2, nd
  if ending in 3, rd
  if ending in 4, 5, 6, 7, 8, 9, 0 th

  return string
C:
*/

function century(year) {
  centuryVal = Math.ceil(year / 100);

  if (Math.floor((centuryVal % 100)/10) === 1) return centuryVal + 'th';
  else if (centuryVal % 10 === 1) return centuryVal + 'st';
  else if (centuryVal % 10 === 2) return centuryVal + 'nd';
  else if (centuryVal % 10 === 3) return centuryVal + 'rd';
  else return centuryVal + 'th';
}



console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));