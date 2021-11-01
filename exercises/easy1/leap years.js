/*
P:
Input:
  input 1: year in number
Output:
  true or false depending on leap year

E:
Example 1
  input 2016
  output true
Example 2
  input 2015
  output false
Example 3
  input 2000
  output = false
example 4
  input 2300
  ouput = true

D:
input is number
calculations done number
ouput is boolean

A:
(year/4) if (year/100 = 0) then year/400

E:
2016 is divisible by 4 and not by 100. True
2015 is not divisible by 4. False
(2000 is divisble by 4 but is also divisible by 100 so false) or (2000 is divisible by 400 true).  True
2300 is divisible by 4 but is also divisible by 100 so false) or (2300 is not divisible by 400 false). false
C:
*/

/* //Part 1

const isLeapYear = year => ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0)))

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // false
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // false
console.log(isLeapYear(400));       // true

*/

//Part 2
const isLeapYear = year => {
  if (year >= 1752) {
    return ((year % 4 === 0) && ((year % 100 !== 0) || (year % 400 === 0)))
  }

  return (year % 4 === 0)
}


console.log(isLeapYear(2016));      
console.log(isLeapYear(2015));      
console.log(isLeapYear(2100));      
console.log(isLeapYear(2400));      
console.log(isLeapYear(240000));    
console.log(isLeapYear(240001));    
console.log(isLeapYear(2000));      
console.log(isLeapYear(1900));      
console.log(isLeapYear(1752));      
console.log(isLeapYear(1700));      
console.log(isLeapYear(1));         
console.log(isLeapYear(100));       
console.log(isLeapYear(400));      