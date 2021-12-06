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
];

function displayLegend() {
  console.clear();
  console.log('Welcome to TicTacToe! Good luck!');
  console.log('');
  console.log('');
  console.log('');
  console.log(`     |     |`);
  console.log(` nw  |  n  |  ne`);
  console.log(`     |     |`);
  console.log('-----+-----+-----');
  console.log(`     |     |`);
  console.log(`  w  |  c  |  e`);
  console.log(`     |     |`);
  console.log('-----+-----+-----');
  console.log(`     |     |`);
  console.log(` sw  |  s  |  se`);
  console.log(`     |     |`);
  console.log('');
}

function displayGrid(board, score) {
  console.clear();
  console.log(`The score is human: ${score.Human} | computer: ${score.Computer}`);
  console.log('');
  console.log(`You are ${PLAYER_OBJECT.Human}.  Computer is ${PLAYER_OBJECT.Computer}.`);
  console.log('');
  console.log(`     |     |`);
  console.log(`  ${board[1]}  |  ${board[2]}  |  ${board[3]}`);
  console.log(`     |     |`);
  console.log('-----+-----+-----');
  console.log(`     |     |`);
  console.log(`  ${board[4]}  |  ${board[5]}  |  ${board[6]}`);
  console.log(`     |     |`);
  console.log('-----+-----+-----');
  console.log(`     |     |`);
  console.log(`  ${board[7]}  |  ${board[8]}  |  ${board[9]}`);
  console.log(`     |     |`);
  console.log('');
}

function resetBoard() {
  let returnObj = {};
  for (let i = 1; i <= 9; i += 1) {
    returnObj[i] = INITIAL_MARK;
  }
  return returnObj;
}

function computerChooseSquare(board) {
  let compName = Object.keys(PLAYER_OBJECT)[1];
  let square = miniMax(board, compName).index;
  board[square] = PLAYER_OBJECT.Computer;
}

function playerChooseSquare(board, player) {
  if (player === Object.keys(PLAYER_OBJECT)[0]) humanChooseSquare(board);
  if (player === Object.keys(PLAYER_OBJECT)[1]) computerChooseSquare(board);
}

function getValidUserInput(board) {
  let playerSelection = rlsync.question().trim().toLowerCase();
  let playerSelectionNum = CARDINAL_CONVERSION.indexOf(playerSelection);
  while (true) {
    if (playerSelectionNum < 0) {
      prompt('Invalid selection. Please enter your selection.');
      playerSelection = rlsync.question();
      playerSelectionNum = CARDINAL_CONVERSION.indexOf(playerSelection);
      continue;
    }
    if (board[playerSelectionNum] !== INITIAL_MARK) {
      prompt('Selection already chosen. Please enter different selection.');
      playerSelection = rlsync.question();
      playerSelectionNum = CARDINAL_CONVERSION.indexOf(playerSelection);
      continue;
    }
    board[playerSelectionNum] = PLAYER_OBJECT.Human;
    break;
  }
}

function humanChooseSquare(board) {
  let selections = joinOr(
    findEmptySquares(board).
      map(position => CARDINAL_CONVERSION[position]));
  prompt(`Please enter your selection (${selections})`);
  let userSelection = getValidUserInput(board);
  board[userSelection] = PLAYER_OBJECT.Human;
}

function findEmptySquares(board) {
  return Object.keys(board).filter(key => board[key] === INITIAL_MARK);
}

function prompt(string) {
  console.log(`=> ${string}`);
}

function joinOr(array, punctuation = ', ', finish = 'or') {
  if (array.length <= 2) return array.join(' ' + finish + ' ');
  let beginning = array.slice(0, -1);
  let end = array.slice(-1);
  let beginningString = beginning.join(punctuation);
  let endString = punctuation + finish + ' ' + end.join('');
  return beginningString + endString;
}

function isBoardFull(board) {
  return (findEmptySquares(board).length === 0);
}

function detectWinner(board) {
  for (let winners of winningLines) {
    for (let player in PLAYER_OBJECT) {
      if (winners.every(spot => board[spot] === PLAYER_OBJECT[player])) {
        return player;
      }
    }
  }
  return undefined;
}

function didSomeoneWinRound(board) {
  return !!detectWinner(board);
}

function createScoreObject() {
  let returnObj = {};
  for (let player in PLAYER_OBJECT) {
    returnObj[player] = 0;
  }
  return returnObj;
}

function alternatePlayer(current) {
  let players = Object.keys(PLAYER_OBJECT);
  let oppositePlayers = players.slice().reverse();
  for (let key in players) {
    if (current === players[key]) {
      return oppositePlayers[key];
    }
  }
  return undefined;
}

function determineBestResult(results, currentPlayer, startingPlayer) {
  let compareFunction;
  if (currentPlayer === startingPlayer) {
    compareFunction = (a, b) => b.score - a.score;
  } else {
    compareFunction = (a, b) => a.score - b.score;
  }
  results.sort(compareFunction);
  let best = results[0].score;
  results = results.filter(object => object.score === best);
  return results[Math.floor((Math.random() * results.length))];
}

function miniMax(board, currentPlayer, startingPlayer = currentPlayer) {
  let validLocations = findEmptySquares(board);
  if (detectWinner(board) === startingPlayer) return { score: 1 };
  if (detectWinner(board) === alternatePlayer(startingPlayer)) {
    return { score: -1 };
  }
  if (isBoardFull(board) === true) return { score: 0 };
  let allResultArray = [];
  for (let location of validLocations) {
    let currentResult = {};
    currentResult.index = location;
    let newBoard = Object.assign({}, board);
    newBoard[location] = PLAYER_OBJECT[currentPlayer];
    currentResult.score = miniMax(
      newBoard, alternatePlayer(currentPlayer), startingPlayer)
      .score;
    allResultArray.push(currentResult);
  }
  return determineBestResult(allResultArray, currentPlayer, startingPlayer);
}

while (true) {
  let score = createScoreObject();
  displayLegend();
  let firstRound = true;

  while (true) {
    let board = resetBoard();
    let currentPlayer = Object.keys(PLAYER_OBJECT)[0];
    if (firstRound === true) {
      displayLegend();
      firstRound = false;
    } else {
      displayGrid(board, score);
    }

    while (true) {
      playerChooseSquare(board, currentPlayer);
      if (isBoardFull(board) || didSomeoneWinRound(board)) break;
      currentPlayer = alternatePlayer(currentPlayer);
      displayGrid(board, score);
    }

    displayGrid(board, score);
    if (didSomeoneWinRound(board)) {
      let winner = detectWinner(board);
      score[winner] += 1;
      if (score[winner] >= SCORE_TO_WIN) {
        displayGrid(board, score);
        prompt(`${winner} has won the series!`);
        break;
      }
      prompt(`${winner} has won the round!`);
    } else if (isBoardFull(board)) {
      prompt(`This round was a tie!`);
    }

    prompt('');
    prompt('Press enter to start the next round!');
    rlsync.question();
  }

  prompt('Would you like to play again? (y/n)');
  let userPlayAgain = rlsync.question().toLowerCase();
  while (!VALID_PLAY_AGAIN.includes(userPlayAgain)) {
    prompt('Invalid input. Would you like to play again? (y,n)?');
    userPlayAgain = rlsync.question().toLowerCase();
  }
  if (userPlayAgain[0] === 'n') {
    prompt('Thank you for playing! Have a great day!');
    break;
  }
}


