/*
P:
Input:
  number
   
Output:
  true or false depending on if it's a palindrome

E:

D:
input as number
process as string

A:
convert number to string
compare reverse string

C:
*/

const isPalindromicNumber = inpString => {
    inpString = String(Number(inpString));
    return (inpString === inpString.split('').reverse().join(''));
}

/*function convertString8To10(inpNum) {
  iterator = 0;
  newNum = 0;
  while ((inpNum / 8) >= (1 / 8)) {
    newNum += (inpNum % 8) * (10 ** iterator);
    inpNum = Math.floor( inpNum / 8 );
    iterator += 1;
  }
  return newNum
}*/

console.log(isPalindromicNumber('00034543'));        // true
console.log(isPalindromicNumber('123210'));       // false
console.log(isPalindromicNumber('22'));           // true
console.log(isPalindromicNumber('5'));            // true
