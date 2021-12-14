/*
P:
Input:
  a) rational number
  b) array of numbers as decimals 
Output:
  a) array of denominators
  b) rational number from array of decimals
E:

D:
egyptian(
  process as number
)


A:


C:
*/

const { default: Fraction } = require("fraction.js");

function egyptianx(fraction) {
  let denominator = []
  let iterator = 1;
  while (fraction > 0) {
    let currentFraction = new Fraction(1/ iterator);
    if (fraction >= currentFraction) {
      denominator.push(iterator)
      fraction = new Fraction (fraction - currentFraction);
    }
    iterator += 1;
  }
  return denominator;
}


function unegyptian2(denomArray) {
  let result = new Fraction(0);
  for (denom of denomArray) {
    let currentFraction = new Fraction(1, denom);
    result = new Fraction(result - currentFraction);
  }
  return result.n/result.d;
}

function unegyptian3(denominators) {
  let fraction = denominators.reduce(
    (accum, num) => {
      debugger;
      return new Fraction(accum + new Fraction(1, num))}, new Fraction(0)
  );
}

let Fraction = require("fraction.js");

function egyptian(targetValue) {
  let denominators = [];
  let unitDenominator = 1;
  while (targetValue > 0) {
    let unitFraction = new Fraction(1, unitDenominator);
    if (unitFraction <= targetValue) {
      targetValue = targetValue.sub(unitFraction);
      denominators.push(unitDenominator);
    }
    unitDenominator += 1;
  }
  return denominators;
}

function unegyptian(denominators) {
  return denominators.reduce(
    (accum, num) => {
      debugger;
      accum + new Fraction(1, num)}, new Fraction(0)
  );
}

unegyptian(egyptian(new Fraction(127, 130)))