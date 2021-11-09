//Question 1:
let advice = "Few things in life are as important as house training your pet dinosaur.";
let final = advice.replace('important', 'urgent');
console.log(final);

//Question 2:
let numbers = [1, 2, 3, 4, 5];
numbers.slice().reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
[...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

let result = []
numbers.forEach(number => result.unshift(number))
console.log(result);

//Question 3:
let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

numbers.includes(number1);
numbers.includes(number2);

//Question 4:
let famousWords = 'seven years ago...';

//console.log(('Four score and ').concat(famousWords));
famousWords = 'Four score and ' + famousWords;

//Question 5:
let a = [1, 2, 3, 4, 5]

a.splice(2, 1);
console.log(a);

//Question 6:
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);
console.log(flintstones);
console.log(flintstones.flat());
let a = []
console.log(a.concat(...flintstones))

//Question 7:
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let x = Object.entries(flintstones);

let y = []
for (let [key, value] of x) {
  if (key === 'Barney') {
    y.push(key, value)
  }
}
console.log(y);

Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift();

//Question 8:
let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(numbers);
Array.isArray(table);

//Question 9:
objectWidth = 40;
let title = "Flintstone Family Members";
extraChar = Math.floor((objectWidth - title.length) / 2);
title = (' ').repeat(extraChar) + title;
console.log(title);

let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);

//Question 10:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

statement1.split('').filter(char => char === 't').length;
[...statement2.matchAll(/[t]/g)].length;