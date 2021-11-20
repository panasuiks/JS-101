/*
P:
Input: 
  inventory item ID and a list of transactions (array of objects)
Output:
  the list of transactions 
  

D: 
inp array of objects
return as 1D array

A:
set array 

C:
*/

function transactionsFor(id, transactions) {
  return transactions.filter(obj => {
    return obj['id'] === id;
  })
}