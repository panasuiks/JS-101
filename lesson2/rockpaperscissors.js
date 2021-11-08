//Lesson 2 Rock Paper Scissors!

const rlsync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINS_FOR_WIN = 3;

function prompt(message) {
  console.log('=>' + message);
}

function determineWinner(arg1, arg2) {
  if (arg1 === arg2) {
    return 0;
  } else if (
    ((arg1 === 'rock') && ((arg2 === 'scissors') || (arg2 === 'lizard'))) ||
    ((arg1 === 'paper') && ((arg2 === 'rock') || (arg2 === 'spock'))) ||
    ((arg1 === 'scissors') && ((arg2 === 'paper') || (arg2 === 'lizard'))) ||
    ((arg1 === 'spock') && ((arg2 === 'rock') || (arg2 === 'scissors'))) ||
    ((arg1 === 'lizard') && ((arg2 === 'spock') || (arg2 === 'paper')))) {
    return 1;
  } else {
    return 2;
  }
}

function convertToValidInput(inpString) {
  let searchArray = copyArrayValues(VALID_CHOICES);
  let match = '';
  for (let stringIndex = 0; stringIndex < inpString.length; stringIndex += 1) {
    let matchedEntries = [];
    for (let arrayIndex in searchArray) {
      if (searchArray[arrayIndex][stringIndex] === inpString[stringIndex]) {
        matchedEntries.push(searchArray[arrayIndex]);
      }
    }
    if (matchedEntries.length === 0) break;
    if (matchedEntries.length === 1) {
      match = matchedEntries[0];
      break;
    }
    searchArray = copyArrayValues(matchedEntries);
  }
  return (doesStartMatchString(inpString, match)) ? match : undefined;
}

function doesStartMatchString(start, string) {
  let match = true;
  for (let index in start) {
    if (start[index] !== string[index]) {
      match = false;
      break;
    }
  }
  return match;
}

function copyArrayValues(inpArray) {
  let returnArray = [];
  for (let entry of inpArray) {
    returnArray.push(entry);
  }
  return returnArray;
}

function getRandomChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[randomIndex];
}

//Main Logic
console.clear();
let userScore = 0;
let compScore = 0;

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let userChoice = convertToValidInput(rlsync.question());
  while (!VALID_CHOICES.includes(userChoice)) {
    prompt(`That's not a valid choice. Please choose one: ${VALID_CHOICES.join(', ')}`);
    userChoice = convertToValidInput(rlsync.question());
  }

  let computerChoice = getRandomChoice();

  prompt(`You chose ${userChoice} and the computer chose ${computerChoice}.`);

  let roundWinner = determineWinner(userChoice, computerChoice);


  if (roundWinner === 1) {
    userScore += 1;
    prompt('You win this round! Congratulations!\n');
    prompt(`The score is user: ${userScore} | computer: ${compScore}\n`);
  } else if (roundWinner === 2) {
    compScore += 1;
    prompt('Computer wins this round!\n');
    prompt(`The score is user: ${userScore} | computer: ${compScore}\n`);
  } else {
    prompt('It\'s a tie\n');
    prompt(`The score is user: ${userScore} | computer: ${compScore}\n`);
  }

  let didSomeoneWin = false;

  if (userScore >= WINS_FOR_WIN) {
    prompt(`You won the series!`);
    prompt('CONGRATULATIONS!\n');
    didSomeoneWin = true;
  } else if (compScore >= WINS_FOR_WIN) {
    prompt(`You lost the series. Beter luck next time.\n`);
    didSomeoneWin = true;
  }

  if (didSomeoneWin) {
    prompt('Do you want to play again? (y/n)');
    let answer = rlsync.question().toLowerCase();
    while ((answer[0] !== 'n') && (answer[0] !== 'y')) {
      prompt('Please enter "y" or "n".');
      answer = rlsync.question().toLowerCase();
    }
    if (answer[0] === 'n') break;
    console.clear();
  } else {
    prompt('Press enter to advance to next round');
    rlsync.question();
    console.clear();
  }
}
