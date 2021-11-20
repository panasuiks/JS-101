/*
P:
Input: 
  array
Output:
  reverses elements in place. Mutates.
E:

D: 
input as string
process as array
return string

A:
input as string


C:
*/

function reverse(list) {
  let index = 0
  while (index < (list.length - 1)) {
    [list[index], list [list.length - 1 - index]] = [list[list.length - 1 - index], list[index]];
    index += 1;
  }
  return list
}