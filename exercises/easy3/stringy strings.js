/*
P:
Input:
  number
Output:
  string of alternating 1 and 0 equal to the length of the number

E:
5
10101
6
101010
0
''
  

D:
insert number
process as number
return as string

A:
  GET number - 
  Is number less than or equal to 0?
  SET output = empty string
    return ''
  WHILE i = 1 <= number
    output = output + string(i % 2)
    i = i + 1
  PRINT output

C:
*/

function stringy(dig){
  if (dig <= 0) {
    return ''
  }
  let output = ''
  for (let i = 1; i <= dig; i += 1) {
    output += (i % 2);
  }
  return output;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"

