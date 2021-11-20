/*
P:
Input: 
  string
Output:
  string with staggered capitalization scheme 
  first and every other should be capitalized
  non-alphabetic characters do not count for changing

D: 
inp string
convert to array of characters
process characters
return string


A:
set string
convert string to array of characters
cycle through characters 
  if character is letter
    if cap is true
      capitalize
      set cap to false
    if cap is false
      lowercase
      set cap to true
  else return character

is character letter?
  if char.tolowercase >= a and <= z

C:
*/

function staggeredCase(inpString, countNonCharacters = true) {
  let charArray = inpString.split('');
  if (countNonCharacters) {
    return charArray.
      map((char, index) => (index % 2 === 0) ? char.toUpperCase() : char.toLowerCase()).
      join('');
  } else {
    let capChoice = true
    let resArray = charArray.map(char => {
      if (isLetter(char)) {
        if (capChoice) {
          capChoice = false;
          return char.toUpperCase()
        } else {
          capChoice = true;
          return char.toLowerCase()
        }
      }
      return char;
    })
    return resArray.join('');
  }

}

const isLetter = char => {
  return (char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z') ? true : false
}
