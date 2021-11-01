/*
P:
Input:
  input 1: string
  input 2: string
Output:
  result shorter string concat with longer string concat with shorter string

E:
Example 1
  input = abcd and defgh
  output = abcdefghabc
Example 2
  input = abcde and fgh
  output = fghabcdefgh
Example 3
  input = '' and xyz
  output = xyz

D:
Input redline sync as string
output will be string

A:
if string a length is less than string b length then aba
if string a length is greater than string b length then bab

E:
abc length is less than defgh length so abcdefghabc
abcde is greater than fgh so fghabcdefgh
"" is les than xyz so ''xyz''

C:
*/

const shortLongShort = (string1, string2) => {
  if (!(typeof string1 === 'string') || !(typeof string2 === 'string')) {
    console.log('non-string passed to function')
    return
  }

  if (string1.length === string2.length) {
    console.log('strings are same length')
    return
  }

  return (string1.length < string2.length) ? (string1 + string2 + string1) : (string2 + string1 + string2);
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));