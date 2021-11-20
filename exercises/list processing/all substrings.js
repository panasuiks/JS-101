/*
P:
Input: 
  string
Output:
  list of all substrings of the string.  starting index 0 first, then 1 and so on.
  shortest to longest

D: 
input as string
process as string into array


A:
set string
set result array
loop through string starting at 0 and finishing at length - 1
  add sustring from index to end to result arrray


C:
*/

function substrings(inpString) {

  let result = [];
  for (let i = 0; i < inpString.length; i += 1) {
    let currentString = inpString.slice(i);
    let newArray = leadingSubstrings(currentString)
    result = result.concat(newArray);
  }
  return result;
  /*
  for (i = 0; i < inpString.length; i += 1) {
    for (j = i + 1; j < inpString.length + 1; j += 1) {
      result.push(inpString.slice(i, j));
    }
  }
  return result;
  */
}

function leadingSubstrings(inpString) {
  let result = [];
  for (let i = inpString.length; i > 0; i -= 1) {
    result.push(inpString.slice(0, i))
  }
  result.sort((a, b) => a.length - b.length);
  return result;
}

function substrings(inpString) {
  let inpArray = inpString.split('')
  let processArray = inpArray.slice();
  let result =  processArray.map((value, index) => {
    return leadingSubstrings(inpArray.slice(index).join(''));
  })

  return result.flat()
}