/*
P:
Input:
  number from user (age)
  number from user (age to retire) 
Output:
  current year, what year you will retire, how many years left

E:

D:
input is numbers
processed as numbers

A:
get age
get retirement age
if age < retirement age
  you should already be retired silly
else
  get current year
  working years = subtract current age from retirement age
  add to current year
  report results

C:
*/

const rlsync = require('readline-sync');

function prompt(string) {
  console.log('=> ' + string);
}

function getUserAgeAndRetirementAge() {
  let returnArray = []
  prompt('What is your age?');
  returnArray.push(rlsync.questionInt());
  prompt('At what age would you like to retire?')
  returnArray.push(rlsync.questionInt())
  if (returnArray[0] > returnArray[1]) {
    prompt('Retirement age can\'t be higher than current age');
    getUserAgeAndRetirementAge();
  }

  return returnArray;
}

let [age, retireAge] = getUserAgeAndRetirementAge();
let currentDate = new Date()
let currentYear = currentDate.getFullYear()
workingYears = retireAge - age;
retireYear = currentYear + workingYears;

prompt(`It's ${currentYear}. You will retire in ${retireYear}.`);
prompt(`You have only ${workingYears} years of work to go!`);


