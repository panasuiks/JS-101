/*
P:
Input:
  name striing first space last
Output:
  name reversed to last, first  
E:

D: 
input as string
convert to array
process as array
return string

A:
set string
split by space
reverse
join with ", "

C:
*/

function swapName(name) {
  let nameArray = name.split(' ');
  let lastName = nameArray.pop();
  return lastName + ', ' + nameArray.join(' ');
}