let rlsync = require('readline-sync');

const INITIAL_MARK = ' ';
const CARDINAL_CONVERSION = [undefined, 'nw', 'n', 'ne', 'w', 'c', 'e', 'sw', 's', 'se'];
const PLAYER_OBJECT = { Human: 'X', Computer: 'O' };
const VALID_PLAY_AGAIN = ['y', 'n', 'yes', 'no'];
const SCORE_TO_WIN = 5;
const winningLines = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9],
  [1, 4, 7], [2, 5, 8], [3, 6, 9],
  [1, 5, 9], [3, 5, 7]
]

function displayGrid(board, score) {
  console.clear();
  console.log(`The score is human: ${score.Human} | computer: ${score.Computer}`);
  console.log('');
  console.log(`You are ${PLAYER_OBJECT.Human}.  Computer is ${PLAYER_OBJECT.Computer}.`);
  console.log('');
  console.log('');
  console.log(`     |     |`);
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`);
  console.log(`     |     |`);
  console.log('-----+-----+-----')
  console.log(`     |     |`);
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`);
  console.log(`     |     |`);
  console.log('-----+-----+-----')
  console.log(`     |     |`);
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`);
  console.log(`     |     |`);
  console.log('');
}

function resetBoard() {
  return {
    1: INITIAL_MARK,
    2: INITIAL_MARK,
    3: INITIAL_MARK,
    4: INITIAL_MARK,
    5: INITIAL_MARK,
    6: INITIAL_MARK,
    7: INITIAL_MARK,
    8: INITIAL_MARK,
    9: INITIAL_MARK,
  }
}

function checkLosingSquare(board) {
  let humanMark = PLAYER_OBJECT.Human;
  let computerMark = PLAYER_OBJECT.Computer;
  for (let winners of winningLines) {
    if (winners.some(position => board[position] === humanMark)) {
      let total = winners.reduce((prev, curr) => prev + curr, 0);
      let sum = 0;
      let found = 0;
      for (position of winners) {
        if (board[position] === computerMark) break;
        if (board[position] === humanMark) {
          found += 1;
          sum += position;
        }
      }
      if (found === 2) {
        return total - sum;
      }
    }
  }
  return undefined;
}

function checkWinningSquare(board) {
  let humanMark = PLAYER_OBJECT.Human;
  let computerMark = PLAYER_OBJECT.Computer;
  for (let winners of winningLines) {
    if (winners.some(position => board[position] === computerMark)) {
      let total = winners.reduce((prev, curr) => prev + curr, 0);
      let sum = 0;
      let found = 0;
      for (position of winners) {
        if (board[position] === humanMark) break;
        if (board[position] === computerMark) {
          found += 1;
          sum += position;
        }
        debugger
        if (found === 2) {
          return total - sum;
        }
      }
    }
  }
  return undefined;
}


function computerChooseSquare(board) {
  let selections = findEmptySquares(board);
  let randomPosition = selections[Math.floor(Math.random() * selections.length)]
  let position = checkWinningSquare(board) || checkLosingSquare(board) || randomPosition;
  board[position] = PLAYER_OBJECT.Computer
}


function playerChooseSquare(board) {
  let selections = findEmptySquares(board);
  selections = selections.map(position => CARDINAL_CONVERSION[position])
  selections = joinOr(selections);
  prompt(`Please enter your selection (${selections})`);
  let playerSelection = rlsync.question().trim().toLowerCase();
  let playerSelectionNum = CARDINAL_CONVERSION.indexOf(playerSelection);
  while (true) {
    if (playerSelectionNum < 0) {
      prompt('Invalid selection. Please enter your selection.');
      playerSelection = rlsync.question();
      playerSelectionNum = CARDINAL_CONVERSION.indexOf(playerSelection);
      continue
    }
    if (board[playerSelectionNum] !== INITIAL_MARK) {
      prompt('Selection already chosen. Please enter different selection.');
      playerSelection = rlsync.question();
      playerSelectionNum = CARDINAL_CONVERSION.indexOf(playerSelection);
      continue
    }
    board[playerSelectionNum] = PLAYER_OBJECT.Human
    break
  }
}

function findEmptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARK);
}

function prompt(string) {
  console.log(`=> ${string}`)
}

function displayLegend() {
  console.log('');
  console.log(`     |     |`);
  console.log(` nw  |  n  |  ne`);
  console.log(`     |     |`);
  console.log('-----+-----+-----')
  console.log(`     |     |`);
  console.log(`  w  |  c  |  e`);
  console.log(`     |     |`);
  console.log('-----+-----+-----')
  console.log(`     |     |`);
  console.log(` sw  |  s  |  se`);
  console.log(`     |     |`);
  console.log('');
}

function isBoardFull(board) {
  return (findEmptySquares(board).length === 0);
}

function convertMarkToPlayer(mark) {
  let entries = Object.entries(PLAYER_OBJECT);
  for (player of entries) {
    if (player[1] === mark) return player[0]
  }
}

function detectWinnerStraight(board) {
  let checkArray = [1, 2, 3, 4, 7];
  for (let searchPosition of checkArray) {
    if (board[searchPosition] !== INITIAL_MARK) {
      let mark = board[searchPosition];;
      if (searchPosition % 3 === 1) {
        if (board[searchPosition + 1] === mark &&
          board[searchPosition + 2] === mark) {
          return convertMarkToPlayer(mark);
        }
      }
      if (searchPosition <= 3) {
        if (board[searchPosition + 3] === mark &&
          board[searchPosition + 6] === mark) {
          return convertMarkToPlayer(mark);
        }
      }
    }
  }
  return undefined;
}

function detectWinnerDiagonal(board) {
  let checkArray = [1, 3];
  for (let searchPosition of checkArray) {
    if (board[searchPosition] !== INITIAL_MARK) {
      let mark = board[searchPosition];
      let centerIndex = 5;
      if (board[centerIndex] === mark && board[centerIndex + (centerIndex - searchPosition)] === mark) {
        return convertMarkToPlayer(mark);
      }
    }
  }
  return undefined;
}

function detectWinner(board) {
  let humanMark = PLAYER_OBJECT.Human;
  let compMark = PLAYER_OBJECT.Computer;

  for (let winners of winningLines) {
    if (winners.every(position => board[position] === humanMark)) return 'Human'
    if (winners.every(position => board[position] === compMark)) return 'Computer'
  }
  return undefined
  //return detectWinnerStraight(board) || detectWinnerDiagonal(board);
}

function didSomeoneWin(board) {
  return !!detectWinner(board);
}

function createScoreObject(playerObject) {
  let returnObj = {}
  for (let player in playerObject) {
    returnObj[player] = 0;
  }
  return returnObj;
}

function joinOr(array, punctuation = ', ', finish = 'or') {
  if (array.length <= 2) return array.join(' ' + finish + ' ');
  let beginning = array.slice(0, -1);
  let end = array.slice(-1);
  let beginningString = beginning.join(punctuation);
  let endString = punctuation + finish + ' ' + end.join('')
  return beginningString + endString;
}
while (true) {
  let playAgain = true;
  let score = createScoreObject(PLAYER_OBJECT);
  while (true) {
    let board = resetBoard();
    while (true) {
      displayGrid(board, score);
      playerChooseSquare(board);
      if (isBoardFull(board) || didSomeoneWin(board)) break;
      computerChooseSquare(board);
      if (isBoardFull(board) || didSomeoneWin(board)) break;
    }
    displayGrid(board, score);
    if (didSomeoneWin(board)) {
      let winner = detectWinner(board)
      score[winner] += 1;
      if (score[winner] >= SCORE_TO_WIN) {
        prompt(`${winner} has won the series!`)
        break;
      }
      prompt(`${winner} has won the round!`)
    } else if (isBoardFull(board)) {
      prompt(`This round was a tie!`)
    }

    prompt('');
    prompt('Press enter to start the next round!')
    rlsync.question();
  }
  prompt('Would you like to play again? (y/n)')
  let userPlayAgain = rlsync.question().toLowerCase();
  while (!VALID_PLAY_AGAIN.includes(userPlayAgain)) {
    prompt('Invalid input. Would you like to play again? (y,n)?');
    userPlayAgain = rlsync.question().toLowerCase();
  }
  if (userPlayAgain[0] === 'n') {
    prompt('Thank you for playing! Have a great day!')
    break;
  }
}





