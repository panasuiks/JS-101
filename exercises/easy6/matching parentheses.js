/*
P:
Input: 
  string
Output:
  true if properly balanced, false if not properly balanced

D: 
input as string
process as characters
return boolean

A:
set string
process through them, open +1, closed -1
return !result



C:
*/

function isBalanced(string) {
  let parenMatchCount = 0;
  let squareMatchCount = 0;
  let squigglyMatchCount = 0;
  for (let char of string) {
    if (char === '(') parenMatchCount += 1;
    if (char === ')') parenMatchCount -= 1;
    if (char === '{') squigglyMatchCount += 1;
    if (char === '}') squigglyMatchCount -= 1;
    if (char === '[') squareMatchCount += 1;
    if (char === ']') squareMatchCount -= 1;
    if ([parenMatchCount] < 0 || squareMatchCount < 0 || squigglyMatchCount < 0) return false;
  }
  return !parenMatchCount && !squareMatchCount && !squigglyMatchCount
}