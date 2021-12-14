/*
P:
Input:
  sorted array and search value
Output:
  index of search value (-1 if not found)

E:

D:
process as array until reached -1

A:


C:
*/

function binarySearch(array, value, initialIndex = 0) {
  let middleIndex = Math.floor(array.length / 2);
  debugger;
  if (array[middleIndex] === value) return middleIndex + initialIndex;
  if (array.length === 1) return -1;
  if (array[middleIndex] > value) {
    return binarySearch(array.slice(0, middleIndex), value, initialIndex);
  }
  if (array[middleIndex] < value) {
    return binarySearch(array.slice(middleIndex), value, initialIndex + middleIndex)
  }
}

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];