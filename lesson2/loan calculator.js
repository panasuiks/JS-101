//User Interaction Object
const userInteraction = {
  useReadlineSync() {
    return require('readline-sync');
  },

  prompt(inpString) {
    console.log('=> ' + inpString);
  },

  isNonNegativeNumber(inpNum) {
    inpNum = Number(inpNum);
    if ((Number.isNaN(inpNum)) ||
       (inpNum < 0)            ||
       (Math.abs(inpNum) === Infinity)) {
      return false;
    } else {
      return true;
    }
  },

  removeCharactersFromString(inpString) {
    let returnString = inpString.replace('$', '');
    returnString = returnString.replace(',', '');
    return returnString;
  },

  requestNonNegativeNumber(requestMessage, digits = -1) {
    let rlsync = this.useReadlineSync();
    this.prompt(requestMessage);
    let userInput = rlsync.question();
    let returnNumber = Number(this.removeCharactersFromString(userInput));
    while (this.isNonNegativeNumber(returnNumber) === false) {
      this.prompt(`Invalid input. ${requestMessage}`);
      userInput = rlsync.question();
      returnNumber = Number(this.removeCharactersFromString(userInput));
    }

    if ((digits !== -1)         &&
       (Number.isNaN(digits)) &&
       ((Number(digits) >= 0)   &&
       (Number(digits) <= 100))) {
      return Number(returnNumber.toFixed(digits));
    } else {
      return returnNumber;
    }
  },

  requestString(requestMessage, allowable = false) {
    let rlsync = this.useReadlineSync();
    this.prompt(requestMessage);
    let returnString = rlsync.question().trim();
    if (allowable === false) {
      return returnString;
    } else {
      allowable = String(allowable).split(',');
      while (true) {
        for (let entry of allowable) {
          entry = entry.trim();
          if (returnString === entry) {
            return returnString;
          }
        }
        this.prompt(`Invalid input. ${requestMessage}`);
        returnString = rlsync.question().trim();
      }
    }
  },
};

//Finance Tools Object
const financeTools = {
  loanCalcAPR(total, interest, duration) {
    let payment;
    let totalPayment;
    let totalInterest;

    if (duration === 0) {
      payment = total;
      totalPayment = total;
      totalInterest = 0;
    } else if ((interest === 0) || (total === 0)) {
      payment = total / duration;
      totalPayment = total;
      totalInterest = 0;
    } else {
      payment = total * (interest / (1 - ((1 + interest) ** (-duration))));
      totalPayment = this.roundUpToCents(payment * duration);
      totalInterest = totalPayment - total;
    }
    return [payment, totalPayment, totalInterest];
  },

  roundUpToCents(inpNum) {
    return Math.ceil(inpNum * 100) / 100;
  },

  numberToDollarsString(inpNum, digits) {
    let numString = inpNum.toFixed(digits);
    let decimalIndex = numString.indexOf('.');
    let commaIndex = decimalIndex;
    while (commaIndex >= 4) {
      numString = numString.slice(0, commaIndex - 3) + ','
        + numString.slice(commaIndex - 3);

      commaIndex -= 3;
    }

    return '$' + numString;
  },
};

//Main Program
let continueFlag = true;
while (continueFlag === true) {
  console.clear();

  let loanTotal = userInteraction.requestNonNegativeNumber(
    'Please enter your total loan amount in $USD: ', 2);

  let annualInterest = userInteraction.requestNonNegativeNumber(
    'Please enter your loan annual percentage rate (APR):') / 100;

  let loanDurationMonths = userInteraction.requestNonNegativeNumber(
    'Please enter your loan duration in months: ', 0);

  let monthlyInterest = annualInterest / 12;

  let [monthlyPayment, totalPayment, totalInterest] =
    financeTools.loanCalcAPR(loanTotal, monthlyInterest, loanDurationMonths);

  let monthlyPaymentString =
    financeTools.numberToDollarsString(monthlyPayment, 2);

  let totalPaymentString =
    financeTools.numberToDollarsString(totalPayment, 2);

  let totalInterestString =
    financeTools.numberToDollarsString(totalInterest, 2);

  userInteraction.prompt(
    `Your monthly loan payment is ${monthlyPaymentString}.`);

  userInteraction.prompt(
    `Your total payment over ${loanDurationMonths} `
    + `months is ${totalPaymentString}.`);

  userInteraction.prompt(
    `This includes ${totalInterestString} of interest.\n`);

  let continueString = userInteraction.requestString(
    `Would you like to calculate another loan? (y/n)`, 'y, n');

  if (continueString === 'n') {
    continueFlag = false;
  }
}