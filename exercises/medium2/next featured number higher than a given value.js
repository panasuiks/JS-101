/*
P:
Input:
  number integer
Output:
  next featured number greater than integer

E:

D:
input as number
process as number
return number


A:
set number
set iterator = 1
set multiplier = 7
set result = iterator * multiplier
while true
  if result > number and result is special
    return result
  else if result < max
    result += multiplier
  else
    return 'nah'
  C:
*/

function featured(inpNum, multiplier = 7) {
  let iterator = 1
  let result = nextOddMultiple(inpNum, multiplier);
  const MAX = 9876543201;
  while (result <= MAX) {
    if (result > inpNum && isFeatured(result)) return result;
    result += multiplier * 2;
  }
  return 'There is no possible number that fulfills those requirements';
}


function isFeatured(num) {
  if (num % 2 === 0) return false;
  return (!includeDuplicateNumbers(num))
}

function includeDuplicateNumbers(num) {
  let array = String(num).split('');
  let hash = {};
  for (let num of array) {
    if (hash.hasOwnProperty(num)) {
      return true
    } else {
      hash[num] = true;
    }
  }
  return false;
}

function nextOddMultiple(num, multi) {
  let next = (Math.floor(num / multi) + 1) * multi;
  return (next % 2 === 0) ? next + multi : next;
}

