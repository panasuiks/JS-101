/*
P:
Input: 
  string (with at least one character)
Output:
object containing:
  percentage of char lowercase
  percentage of char uppercase
  percentage of others 


D: 
inp as string
convert to array
process as char
return object

A:
set string
set object
cycle through characters of string
  if add one
  if add one
  else add one
return object
C:
*/

const letterPercentages = string => {
  let result = {}
  let lowerArray = string.match(/[a-z]/g) || [];
  let upperArray = string.match(/[A-Z]/g) || [];
  result.lower = lowerArray.length;
  result.upper = upperArray.length;
  result.other = string.length - result.lower - result.upper;
    [result.lower, result.upper, result.other] = 
    convertToPercentage(result.lower, result.upper, result.other);
  return result;
}



const letterPercentages = string => {
  let result = {
    lower: 0,
    upper: 0,
    other: 0,
  }
  let characters = string.split('');
  for (char of characters) {
    if (char >= 'a' && char <= 'z') {
      result.lower += 1;
    } else if (char >= 'A' && char <= 'Z') {
      result.upper += 1;
    } else {
      result.other += 1;
    }
  }
  [result.lower, result.upper, result.other] = 
    convertToPercentage(result.lower, result.upper, result.other);
  return result;
}

const convertToPercentage = (...arg) => {
  let total = 0;
  arg.forEach(value => total += value);
  let result = []
  return arg.map(value => ((value / total) * 100).toFixed(2));
}