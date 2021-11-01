/*
P:
Input:
  string 
Output:
  utf string value (sum of utf-16 character values)

E:
Example 1
  input 'four score'
  output = 984
Example 2
  input 'Launch School'
  output 1251
Example 3
  input 'a'
  output = 97
example 4
  input ''
  ouput 0

D:
input is string
charcode outputs number
sum numbers
output is number

A:
string to array with '' split
for each index, add charcode to result
return result

E:


C:
*/

const utf16Value = inpString => {
  let result = 0;
  
  for (i = 0; i < inpString.length; i += 1) {
    result += inpString.charCodeAt(i);
  }

  return result;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a)'));                  // 97
console.log(utf16Value(''));                   // 0

const OMEGA = '\u03A9';
console.log(utf16Value(OMEGA));
console.log(utf16Value(OMEGA + OMEGA + OMEGA));