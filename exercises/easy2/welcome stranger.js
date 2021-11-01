/*
P:
Input:
  array with 2 or more elements when combined with spaces will produce name.  \
  object with two keys "title" and "occupation" and the values  
Output:
  return a greeting that states their full name and title

E:
Example 
  input ['steve' 'the' 'magnificent' 'guy']
  input {title: 'master', occupation: 'dude'}
  output = Hello, Steve the magnificent guy! Nice to have a master dude around.

D:
input is an array with 2 to infinity entries and an object with 2 keys
combine name array into a string and then access object values
output will be a string

A:
combine array into string and then log the combination of the string and the values

E:

C:
*/

function greetings(inpArray, inpObj) {
  let name = inpArray.join(' ');
  return `Hello, ${name}! Nice to have a ${inpObj.title} ${inpObj.occupation}.`
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);