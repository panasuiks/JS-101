/*
P:
Input:
  loan amount
  APR
  loan duration (months or years)
Output:
  monthly payment in dollars
E:

  

D:
input numbers string - don't take advanatage of RLsync.questionInt or Float

A:
GET loan amount
GET APR
GET loan duration in months
CALCULATE Monthly loan payment
Round monthly loan payment up by cent
Log monthly loan payment to user


C:
*/

const rlsync = require('readline-sync');

const userInteractionLibrary = {
  prompt(inpString) {
    console.log('=> ' + inpString);
  },
  isNonNegativeNumber(input) {
    if ((Number.isNaN(Number(input))) || (Number(input) < 0)) {
      return false
    } else {
      return true
    }
  },
  getNonNegativeNumber(requestString, digits = -1) {
    this.prompt(requestString);
    let returnNumber = Number(rlsync.question());

    while (this.isNonNegativeNumber(returnNumber) === false) {
      this.prompt(`Invalid input.  ${requestString} `);
      returnNumber = Number(rlsync.question());
    }
    if (digits === -1) {
      return returnNumber
    } else if ((Number(digits) !== NaN) && ((Number(digits) >= 0) & (Number(digits) <= 100))) {
      return Number(returnNumber.toFixed(digits));
    }
  },
}


function loanCalc(total, interest, duration) {
  let payment = total * (interest / (1 - ((1 + interest) ** (-duration))));
  let totalPayment = roundUpToCents(payment * duration);
  let totalInterest = totalPayment - total;
  if (interest === 0) {
    payment = total / duration;
    totalPayment = total;
    totalInterest = 0;
  } 

  return [payment, totalPayment, totalInterest];
}

function roundUpToCents(inp) {
  return Math.ceil(inp * 100) / 100
}

function numberToDollarsString(inpNum, digits) {
  let numString = inpNum.toFixed(digits);
  let decimalIndex = numString.indexOf('.');
  let commaIndex = decimalIndex
  while (commaIndex >= 4) {
    numString = numString.slice(0, commaIndex - 3) + ',' + numString.slice(commaIndex - 3);
    commaIndex -= 3;
  }
  return '$' + numString
}

loanTotal = userInteractionLibrary.getNonNegativeNumber('\
Please enter your total loan amount in $USD: ', 2);

let annualInterest = userInteractionLibrary.getNonNegativeNumber('\
Please enter your loan annual percentage rate (APR): ') / 100;

let loanDurationMonths = userInteractionLibrary.getNonNegativeNumber('\
Please enter your loan duration in months: ', 0);

let monthlyInterest = annualInterest / 12;

loanCalc(loanTotal,monthlyInterest,loanDurationMonths);

let [monthlyPayment, totalPayment, totalInterest] = loanCalc(loanTotal, monthlyInterest, loanDurationMonths);

let monthlyPaymentString = numberToDollarsString(monthlyPayment, 2);
let totalPaymentString = numberToDollarsString(totalPayment, 2);
let totalInterestString = numberToDollarsString(totalInterest, 2);

userInteractionLibrary.prompt(`Your monthly loan payment is \
${monthlyPaymentString}.`);
userInteractionLibrary.prompt(`Your total payment over ${loanDurationMonths} months is ${totalPaymentString}.`);
userInteractionLibrary.prompt(`This includes ${totalInterestString} of interest.`);

