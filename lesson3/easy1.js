//Question 1:
let numbers = [1, 2, 3,];
number[6] = 5;

//no error

//undefined

//Question 2:
let str1 = 'Come over here!';
let str2 = 'What\'s up, Doc?';

function lastExclamation(str) {
  return str.slice(-1) === '!'
}

str1.endsWith('!');
str2.endsWith('!');

//Question 3:
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 }

function doesObjectContain(object, key) {
  let x = Object.keys(object);
  for (value of x) {
    if (key === value) return true
  }
  return false
}

console.log(doesObjectContain(ages, 'Spot'));

ages.hasOwnProperty('Spot');

//Question 4:
let munstersDescription = 'the Munsters are CREEPY and Spooky.'
let lowerCase = munstersDescription.toLowerCase();
let final = lowerCase[0].toUpperCase() + lowerCase.slice(1);
console.log(final);

//Question 5:
console.log(false == '0');  //true
console.log(false === '0'); //false

//Question 6:
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237};
/*for (key in additionalAges) {
  ages[key] = additionalAges[key];
}
console.log(ages)*/

Object.assign(ages, additionalAges);

console.log(ages);

additionalAges['Marilyn'] = 25

//Question 7:
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes('Dino');
str2.includes('Dino');

//Question 8:
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push('Dino');
console.log(flintstones);

//Question 9;
flintstones.push('Dino', 'Hoppy');

//Question 10:
let advice = "Few things in life are as important as house training your pet dinosaur.";
let index = advice.indexOf('house');
let final = advice.slice(0, index);
console.log(final)
