/*
P:
Input:
  Length in meters
  Width in meters
Output:
  Area logged in both square meters and square feet

E:
Example 1
  Input 1 x 2
  Output = 2M and 21.5278 ft^2

D:
Input redline sync (as float).  Process as float.
Console.log will report in the string representation

A:
ask for length input
ask for width input
calculate square meters by multiplying inputs together.
calculate square feet by multiplying square meters by 10.7639.
report both to console

E:
Examples:

C:
*/  

/* //Code hidden for further exploration//
function calculateArea() {
  let rlSync = require('readline-sync');
  let width = rlSync.questionFloat('Enter the width of the room in meters:\n');
  let length = rlSync.questionFloat('Enter the length of the room in meters:\n');
  let areaMeters = Math.round(((width * length)*100))/100
  let areaFeet = Math.round(areaMeters * 10.7639*100)/100
  return [areaMeters, areaFeet]
}
area1 = calculateArea();
console.log(`The are of the room is ${area1[0]} square meters (${area1[1]} square feet).`)
*/

function calculateArea() {
  let rlSync = require('readline-sync');
  let unit = rlSync.question('Is the unit of measurement meters or feet?:\n').toLowerCase();
  while (!(unit === 'feet' || unit === 'meters')) {
    unit = rlSync.question('Is the unit of measurement meters or feet?:\n').toLowerCase();
  }
  let width = rlSync.questionFloat(`Enter the width of the room in ${unit}:\n`);
  let length = rlSync.questionFloat(`Enter the length of the room in ${unit}:\n`);
  let area = width * length;
  return [area, unit]
}
area1 = calculateArea();
console.log(`The are of the room is ${area1[0].toFixed(2)} square ${area1[1]}.`);
