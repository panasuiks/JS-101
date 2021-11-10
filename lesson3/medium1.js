//Question 1:
for (let i = 0; i < 10; i++) {
  console.log((' ').repeat(i) + 'The Flintstones Rock!');
}

//Question 2:
let munstersDescription = "The Munsters are creepy and spooky.";

/*let result = ''

for (index in munstersDescription) {
  let charCode = munstersDescription.charCodeAt(index)
  if (munstersDescription[index] >= 'A' && munstersDescription[index] <= 'Z') {
    result += String.fromCharCode(charCode + 32);
  } else if (munstersDescription[index] >= 'a' && munstersDescription[index] <= 'z') {
    result += String.fromCharCode(charCode - 32);
  }
}

console.log(result)
*/

munstersDescription.split('').map(function(char) {
  if (char.toLowerCase() === char) {
    return char.toUpperCase();
  } else if (char.toUpperCase() === char) {
    return char.toLowerCase();
  }
}).join('');

//Question 3:
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(divisor);
    }
    divisor -= 1;
  }
  return factors;
}

//Question 4:
function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);// mutates argument 
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);// does not mutate argument. reassignemnt isn't mutating.
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

//Question 5:
console.log(0.3 + 0.6); // 0.9
console.log(0.3 + 0.6 === 0.9); // true

//Question 6:
let nanArray = [NaN];

console.log(nanArray[0] === NaN);
console.log(Number.isNaN(nanArray[0]));

//Question 7:
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);  //34

//Question 8:
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

//Question 9:
function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}

console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")); //paper

//Question 10:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo()); //'no'