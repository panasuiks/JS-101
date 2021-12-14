/*
P:
Input:
  a) number
Output:
  a) what lights are on after the rounds
E:

D:


A:


C:
*/

function lightsOn(switches) {
  let lightsArray = [];
  for (let i = 1; i <= switches; i += 1) {
    lightsArray[i] = false;
  }
  for (let i = 1; i <= switches; i += 1) {
    for (index in lightsArray) {
      if (index % i === 0) {
        switchLight(lightsArray, index);
      }
    }
  }
  let result = [];
  for (let index in lightsArray) {
    console.log(index);
    if (lightsArray[index]) {
      result.push(index);
    }
  }
  return result;
}

function switchLight(lightsArray, index) {
  lightsArray[index] = !lightsArray[index]
}