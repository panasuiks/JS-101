/*
P:
Input: 
  string
Output:
  list of substrings of the string (beginning with first letter)
  

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

function leadingSubstrings(inpString) {
  let result = [];
  for (i = inpString.length; i > 0; i -= 1) {
    result.push(inpString.slice(0, i))
  }
  result.sort((a, b) => a.length - b.length);
  return result;
}

function leadingSubstrings(inpString) {
  let inpArray = inpString.split('');
  let result = inpArray.reduce((prev, current) => {
    if (prev.length === 0) {
      return [current];
    } else {
      let newString = prev[prev.length - 1] + current;
      return prev.concat([newString])
    }
  }, [])
  return result
}