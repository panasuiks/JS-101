//Lesson 2 Rock Paper Scissors!

const rlsync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINS_FOR_WIN = 3;

function prompt(message) {
  console.log('=>' + message);
}

function determineWinner(first, second) {
  if (((first === 'rock') && ((second === 'scissors') || (second == 'lizard'))) ||
    ((first === 'paper') && ((second === 'rock') || (second === 'spock'))) ||
    ((first === 'scissors') && ((second === 'paper') || (second === 'lizard'))) ||
    ((first === 'spock') && ((second === 'rock') || (second === 'scissors'))) ||
    ((first === 'lizard') && ((second === 'spock') || (second === 'paper')))) {
    return 1
  } else if (((first === 'rock') && ((second === 'paper') || (second == 'spock'))) ||
    ((first === 'paper') && ((second === 'scissors') || (second === 'lizard'))) ||
    ((first === 'scissors') && ((second === 'rock') || (second === 'spock'))) ||
    ((first === 'spock') && ((second === 'paper') || (second === 'lizard'))) ||
    ((first === 'lizard') && ((second === 'rock') || (second === 'scissors')))) {
    return 2
  } else {
    return 0
  }
}

function convertToValidInput(inpString) {
  let indexIterator = 0
  let matchedEntries = []
  let matchCounter = 0
  let currentSearchArray = copyArrayValues(VALID_CHOICES);
  let match = '';
  while (indexIterator < inpString.length) {
    matchCounter = 0
    matchedEntries = []
    for (index in currentSearchArray) {
      if (currentSearchArray[index][indexIterator] === inpString[indexIterator]) {
        matchCounter += 1;
        matchedEntries.push(currentSearchArray[index]);
      }
    }
    if (matchCounter === 0) { break }
    if (matchCounter === 1) { match = matchedEntries[0]; break }
    currentSearchArray = copyArrayValues(matchedEntries);
    indexIterator += 1;
  }
  return (startMatchString(inpString, match)) ? match : undefined
}

function startMatchString(start, string) {
  let match = true;
  for (index in start) {
    if (start[index] !== string[index]) {match = false; break }
  }
  return match
}

function copyArrayValues(inpArray) {
  let returnArray = [];
  for (entry of inpArray) {
    returnArray.push(entry);
  }
  return returnArray;
}

function maxStringLengthInArray(inpArray) {
  let maxLength = 0
  for (string of inpArray) {
    if (string.length > maxLength) { maxLength = string.length }
  }
  return maxLength
}




console.clear()
let userScore = 0
let compScore = 0
while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let userChoice = convertToValidInput(rlsync.question());
  while (!VALID_CHOICES.includes(userChoice)) {
    prompt(`That\'s not a valid choice. Please choose one: ${VALID_CHOICES.join(', ')}`);
    userChoice = convertToValidInput(rlsync.question());
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${userChoice} and the computer chose ${computerChoice}.`);

  let winner = determineWinner(userChoice, computerChoice);
  if (winner === 1) {
    prompt('You win! Congratulations!');
    userScore += 1;
  } else if (winner === 2) {
    prompt('Computer wins!');
    compScore += 1;
  } else {
    prompt('It\'s a tie');
  }

  prompt('Do you want to play again? (y/n)');
  let answer = rlsync.question().toLowerCase();
  while ((answer[0] !== 'n') && (answer[0] !== 'y')) {
    prompt('Please enter "y" or "n".');
    answer = rlsync.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
  console.clear()

  prompt(`The current score is user: ${userScore} | computer: ${compScore}\n`);

}
