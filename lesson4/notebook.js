//Intro to PEDAC
// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

/*
Input: string
output: substrings from a given string which are palindromes (case sensitive);

explicit requirements
  palindromes must be case sensitive
  palindromes must be added to array
  
implicit requirements  
  no palindromes should be empty array
  empty strings should be empty array
  

*/

//Selection and Transformation
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};



function selectFruit(obj) {
  let entries = Object.entries(obj);
  let result = entries.filter(keyValue => keyValue[1] === 'Fruit');
  return Object.fromEntries(result);
}

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

function doubleNumbers(numbers) {
  for (i = 0; i < numbers.length; i += 1) {
    numbers[i] = numbers[i] * 2;
  }
  return numbers
}

// doubles numbers that have odd indices
// input: array of numbers
// output: array of numbers with the odd indices doubled

// set empty result array
// for i = 1, i < inpArray length-1, i + 1
// if i % 2 === 1
//  result.push inparray[i] * 2
// else
//  result.push inparray[i]
//return result

function doubleOddIndices(inputArray) {
  let result = [];
  for (i = 0; i < inputArray.length; i += 1) {
    if (i % 2 === 1) {
      result.push(inputArray[i] * 2)
    } else {
      result.push(inputArray[i]);
    }
  }
  return result;
}

function multiply(numbers, factor = 2) {
  return numbers.map(number => number * factor)
}

/*Practice Problems
1) [1, 2, 3] - 'hi' is truthy.
2) [undefined, undefined, undefined] - no return
3) [1, 4, 9] - return is assumed for one line function without brackets
4) pop returns caterpillar so 11 is the return.
5) frunction returns num * 2 which is always truthy so return is true.
6) destructive.  replaces specified array entries with the specified value.
  arr will now be [1, 1, 1, 1, 1]
7)
*/

let flintstones = ['Fred', 'Barney', 'Wilma', 'Betty', 'Pebbles', 'Bambam'];
let obj = {};
flintstones.forEach((value, index) => {
  obj[value] = index;
})
console.log(obj);

// 9)

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let age = Object.values(ages);
console.log(age.reduce((previous, current) => previous + current, 0))

// 10)
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let folks = Object.entries(ages);
folks.sort((a, b) => {
  return (a[1] < b[1]) ? -1: 1;
})
console.log(folks[0][1])

let age = Object.values(ages);
console.log(Math.min(...age));

// 11)
let statement = "The Flintstones Rock";
let statementArray = statement.split(' ').join('').split('');
let obj = {};
statementArray.forEach(char => {
  obj[char] = obj[char] || 0;
  obj[char] += 1;
})
