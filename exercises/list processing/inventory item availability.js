/*
P:
Input: 
  inventory item ID and a list of transactions (array of objects)
Output:
  true or false based on availability 
  

D: 
inp array of objects
return as boolean

A:
set array 
set quantity = 0
cycle through objects
  if id matches
    if in, add to quantity
    if out, subtract from quantity
if quantity > 0, true else, false

C:
*/

function transactionsFor(id, transactions) {
  return transactions.filter(obj => {
    return obj['id'] === id;
  })
}

function isItemAvailable(id, transactions) {
  let filteredTransactions = transactionsFor(id, transactions);
  let result = filteredTransactions.reduce((prev, current) => {
    if (current['movement'] === 'in') {
      return prev + current['quantity'];
    } else if (current['movement'] === 'out') {
      return prev - current['quantity']
    }
  }, 0)

  return result > 0;
}