/*
P:
Log odd numbers from 1 to 99 (including 1 and 99) to the console on a separate line

E:
No input/output

D:
Console.log will report in the string representation

A:
Loop starting with number 1.  If the number is odd, log to console.  move onto next number. Exit if next number is > 99.

Examples:
  Expected outcome is logged:
  1
  3
  5
  ....
  97
  99

C:
  */
for (let i = 1; i <= 99; i += 1) {
  if (i % 2) console.log(i);
}


//Further Exploration
/*
P:
Input:
  Lower limit (string) inclusive
  Upper limit (string) inclusive
Output:
  Logged odd values between low limit and high limit

E:
Example 1:
  Low input  = 0
  High input = 10
  Output = log 1, 3, 5, 7, 9 with lines in between.
Example 2:
  low input = -5
  High input = 0
  Output = log -5, -3, -1 with lines in between.
Example 3:
  low input = -5
  high input = 5
  Ouput = -5, -3, -1, 1, 3, 5
Example 4
  low input = 5
  high input = -5
  output = -5, -3, -1, 1, 3, 5
Example 5
  low input = 6
  high input = 2
  output = 3, 5
Example 6
  low input = 2.6
  high input = 6.2
  output = 3, 5


D:
User inputs strings which are then converted to numbers to do math. Console logs string representation of numbers.

A:
Get low and high limits from the user.  
convert to numbers and round.
check to see if low is lower than high. If it's not then swap the values.
loop starting with the number at low and adding one until reaching high.  
  if the number divided by 2 has a remainder then log the number.

*/

let lowLimit = 0
let highLimit = 0

function getInputs() {
  let rlSync = require('readline-sync');
  lowLimit = Math.round(rlSync.questionFloat('What is the lower limit (inclusive)? '));
  highLimit = Math.round(rlSync.questionFloat('What is the upper limit (inclusive)? '));
  let lowLimitKeep = lowLimit
  if (lowLimit > highLimit) {
    lowLimit = highLimit
    highLimit = lowLimitKeep
  }
}

function reportOddNumbers(min, max) {
  iterator = min;
  while (iterator <= max) {
    if (iterator % 2) console.log(iterator);
    iterator += 1;
  }

}
getInputs()
reportOddNumbers(lowLimit, highLimit)




