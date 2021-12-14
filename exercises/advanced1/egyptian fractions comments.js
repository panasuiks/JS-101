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

function unegyptian2(denominators) {
  let resultFraction =  denominators.reduce(
    (accum, num) => {
      debugger;
      accum.add(1, num)}, new Fraction(0)
  );
  return resultFraction.n / resultFraction.d;
}

console.log(unegyptian2(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142