//Lesson 2 Rock Paper Scissors!

const rlsync = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

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
  let matchEntry = ''
  let currentSearchArray = [VALID_CHOICES];
  let result
  while (matchCounter !== 1) {
    matchCounter = 0
    currentSearchArray = matchedEntries
    matchedEntries = []
    for (index in currentSearchArray) {
      if (currentSearchArray[index][indexIterator] === inpString[indexIterator]) {
        matchCounter += 1;
        matchIndex = currentSearchArray[index]
        matchedEntries.push(VALID_CHOICES)
      }
    }
  }
}

function copyArrayValues(inpArray) {
  let returnArray = []
  for (entry of inpArray) {
    
  }
}




console.clear()

while (true) {

  //prompt()//score
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let userChoice = rlsync.question();

  while (!VALID_CHOICES.includes(userChoice)) {
    prompt(`That\'s not a valid choice. Please choose one: ${VALID_CHOICES.join(', ')}`);
    userChoice = rlsync.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${userChoice} and the computer chose ${computerChoice}.`);

  let winner = determineWinner(userChoice, computerChoice);
  if (winner === 1) {
    prompt('You win! Congratulations!');
  } else if (winner === 2) {
    prompt('Computer wins!');
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
}
