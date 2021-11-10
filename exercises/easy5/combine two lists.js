/*
P:
Input:
  two arrays
Output:
  combine interweaved array

E:

D:
input as two arrays
combine into new array


A:
set inp array
set out array
for each index
  push first[index], second[index]
return out array

C:
*/
function interleave(inp1, inp2) {
  outArray = []
  /*//regular
  for (let index in inp1) {
    outArray.push(inp1[index], inp2[index]);
  }*/
  //forEach 
  /*inp1.forEach(function (_, index) {
    outArray.push(inp1[index], inp2[index]);
  })*/
  /*//map
    outArray = inp1.map(function (_, index) {
    return [inp1[index], inp2[index]];
  })
  return outArray.flat();
  */
   //reduce
  const reducer = (previous, _, currentIndex) => {
    return previous.concat(inp1[currentIndex], inp2[currentIndex])
  }
  outArray = inp1.reduce(reducer,[]);
  return outArray
}

