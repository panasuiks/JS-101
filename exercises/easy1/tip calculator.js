/*
P:
Input:
  Bill total (number)
  Tip percentage (number)
Output:
  "The tip is (tip)"
  "The total is (total)"

E:
Example 1
  Input = 10 and 20
  Output = tip is 2 and total is 12
Example 2
  Input = 50 and 5
  Ouput = tip is 2.50 and total is 52.50

D:
Input redline sync (as float).  Process as number.
Console.log will report in the string representation

A:
ask for bill total (round to 2 decimal places)
ask for tip percentage
tip is  bill total times tip percentage/100 rounded to 2 decimal places
report back tip
report back tip plus bill total

E:
Examples:
Example 1
  10 * (20/100) = 2
  report 2
  report 12
Example 2
  50 * (5/100) = 2.50
  report 2.50
  report 52.50

C:
*/  

function calculateAndReportTip() {
  let rlSync = require('readline-sync');
  let bill = Math.round((rlSync.questionFloat('What is the bill? '))*100,2)/100;
  let tipPercentage = rlSync.questionFloat('What is the tip percentage? ');
  let tip = Math.round((bill * tipPercentage /100)*100,2)/100;
  console.log(`\nThe tip is $${tip.toFixed(2)}.\nThe total is $${(bill + tip).toFixed(2)}.`)
}

calculateAndReportTip()
