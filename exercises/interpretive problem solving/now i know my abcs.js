/*
P:
Input:
  word
Output:
  true or false whether it can be spelled with the blocks

blocks have two letters per block
cannot use both letters from any given block
cannot use a block more than once



E:



D:


A:
let pairs = [] array of pairs
let obj1 = {}
let obj2 = {}
for pairs
  obj1[0] = 1;
  obj2[1]= 0;

for letter
  if obj1 contains = false and obj2 contains = false
    return false
  if jb1 contains = true
    obj1[obj1][letter] delete
    delete obj1 letter
  if obj2 contains = true
    obj2[obj2][letter] delete
    delete obj2[letter]

return true

C:
*/
function isBlockWord(string) {
  let BLOCK1 = {
    B: 'O', X: 'K', D: 'Q', C: 'P', N: 'A',
    G: 'T', R: 'E', F: 'S', J: 'W', H: 'U',
    V: 'I', L: 'Y', Z: 'M'
  }
  let BLOCK2 = {};
  for (key in BLOCK1) {
    BLOCK2[BLOCK1[key]] = key;
  }

  let letterArray = string.toUpperCase().split('');
  for (let letter of letterArray) {
    if (!BLOCK1.hasOwnProperty(letter) && !BLOCK2.hasOwnProperty(letter)) return false;
    if (BLOCK1.hasOwnProperty(letter)) {
      delete BLOCK2[BLOCK1[letter]];
      delete BLOCK1[letter];
    } else if (BLOCK2.hasOwnProperty(letter)) {
      delete BLOCK1[BLOCK2[letter]];
      delete BLOCK2[letter];
    }
  }
  return true;
}

isBlockWord('BUTCH'); 
