//Question 1:
let numbers = [1, 2, 3, 4];

numbers.length = 0;

while (numbers.length >= 1) {
  numbers.reduce();
}

while (numbers.length >= 1) {
  numbers.pop();
}

numbers.splice(0,numbers.length);

//Question 4:
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
//arr1 object is changed

//Question 5:
const isColorValid = color => color === "blue" || color === "green"; 

const isColorValid = color => ['blue','green'].includes(color);

function isColorValid(color) {
  return (color !== "blue" && color !== "green")
}