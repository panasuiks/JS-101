/*
P:
Input: 
  grocery list in two dimensional array
Output:
  returns a one dimensional array with fruit name repeated however many times fruit is wanted
  

D: 
inp as 2d array
return as 1D array

A:
set array 

C:
*/

function buyFruit(fruitArray) {
  let result = []
  fruitArray.forEach(value => {
    let [fruit, qty] = value;
    for (i = qty; i > 0; i -= 1) {
      result.push(fruit);
    }
  })
  return result;
}
