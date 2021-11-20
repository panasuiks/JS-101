/*
P:
Input: 
  string
Output:
  every lowercase letter changed to uppercase and vice versa. Leave other characters unchanged

D: 
inp string
convert to array of characters
handle char within array
convert back to string and return


A:
set string
convert string to array of characters
cycle through characters if uppercase, send lowercase, if lowercase, send uppercase
  if uppercase = input
convert array to string
return string


C:
*/

function swapCase(inpString) {
  let charArray = inpString.split('');
  let swappedArray = charArray.map(char => {
    return (char.toUpperCase() === char) ? char.toLowerCase(): char.toUpperCase();
  })
  return swappedArray.join('');
}
