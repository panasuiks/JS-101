let rlsync = require('readline-sync');
const PLAYERS = ['Human'];
const DEALER = 'Dealer';
const MIN_CARDS = 100;
function prompt(message) {
  console.log(`=> ${message}`)
}

function makeTable(numberOfDecks = 5, players = PLAYERS) {
  let table = {
    hands: {},
    deck: [],
    score: {},
    hiddenScore: {},

    resetHands() {
      players[players.length] = DEALER;
      for (let player of players) {
        this.hands[player] = [];
      }
      this.calculateScore();
    },

    resetDeck() {
      this.deck = [];
      let cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 1];
      let suits = ['clubs', 'spades', 'diamonds', 'hearts'];
      for (let decks = 1; decks <= 4; decks += 1) {
        for (let i = 0; i < cards.length; i += 1) {
          for (let suit of suits) {
            if (cards[i] === 'A') {
              this.deck.push([cards[i], suit, values[i], values[i + 1]]);
            } else {
              this.deck.push([cards[i], suit, values[i]]);
            }
          }
        }
      }
    },

    dealCards() {
      this.resetHands();
      const CARDS_PER_USER = 2;
      for (let player in this['hands']) {
        for (let card = 1; card <= CARDS_PER_USER; card += 1) {
          this.selectAndRemoveRandomCard(player);
        }
      }
      this.calculateScore();
    },

    selectAndRemoveRandomCard(player) {
      if (this.deck.length < MIN_CARDS) this.resetDeck();
      index = Math.floor((Math.random() * this.deck.length));
      this.hands[player].push(this.deck.splice(index, 1)[0])
      this.calculateScore();
    },

    calculateScore() {
      const CARD_INDEX = 0;
      const VALUE_INDEX = 2;
      const ACE_SUBTRACT = 10;
      this.score = {};
      this.hiddenScore = {};
      for (let player in this.hands) {
        this.score[player] = 0;
        this.hiddenScore[player] = 0;
        let ace = false;
        let cardNumber = 1;
        for (let card of this['hands'][player]) {

          if (card[CARD_INDEX] === 'A') ace = true;

          this.score[player] += card[VALUE_INDEX];
          if (!(player === DEALER && cardNumber > 1)) {
            this.hiddenScore[player] += card[VALUE_INDEX]
          }
          cardNumber += 1;
        }
        if (ace === true && this.score[player] > 21) this.score[player] -= ACE_SUBTRACT;
      }
    },


  }
  console.log(table);
  table.resetHands(players);
  table.resetDeck(numberOfDecks);
  return table;
}

function getStayOrHit() {
  const USER_CHOICES = ['stay', 'hit'];
  prompt('Would you like to stay or hit?');
  let response;
  while (true) {
    response = rlsync.question().toLowerCase();
    if (USER_CHOICES.includes(response)) break;
    prompt('Selection invalid. Would you like to stay or hit?');
  }
  return response;
}

function roundToCents(dollars) {
  console.log(dollars)
  return Math.round(dollars * 100) / 100;
}

function getTableScoreWithHiddenCard(table) {
  let score = {};
  const VALUE_INDEX = 2;
  const CARD_INDEX = 0;
  const ACE_SUBTRACT = 10;
  for (let player in table['hands']) {
    let playerScore = 0;
    score[player] = 0;
    let ace = false;
    for (let card of table['hands'][player]) {
      if (card[CARD_INDEX] === 'A') ace = true;
      score[player] += card[VALUE_INDEX];
      if (player === DEALER) break;
    }
    if (ace === true && score[player] > 21) score[player] -= ACE_SUBTRACT;
  }
  return score
}

function getTableScore(table, hidden = false) {
  let score = {};
  const VALUE_INDEX = 2;
  const CARD_INDEX = 0;
  const ACE_SUBTRACT = 10;
  for (let player in table['hands']) {
    let playerScore = 0;
    score[player] = 0;
    let ace = false;
    for (let card of table['hands'][player]) {
      if (card[CARD_INDEX] === 'A') ace = true;
      score[player] += card[VALUE_INDEX];
      if (player === DEALER && hidden === true) break;
    }
    if (ace === true && score[player] > 21) score[player] -= ACE_SUBTRACT;
  }
  return score
}


function getBets() {
  let betObject = {};
  for (let player of PLAYERS) {
    prompt(`How much would ${player} like to bet on this hand (USD)?`);
    while (true) {
      let bet = roundToCents(rlsync.questionFloat())
      if (bet > 0) {
        betObject[player] = bet;
        break;
      }
      prompt('Bet must be greater than 0. How much would you like to bet on this hand (USD)?');
    }
  }
  return betObject;
}

function playUserRound() {

}

function displayTableAndScore(table) {
  console.log(table.hands);
  console.log(table.hiddenScore);
}



let table = makeTable();
table.dealCards();
table.calculateScore();
for (let player in table.hands) {
  if (player === DEALER) continue;
  while (true) {
    displayTableAndScore(table);
    let stayOrHit = getStayOrHit();
    if (stayOrHit === 'stay') break;
    if (stayOrHit === 'hit') {
      table.selectAndRemoveRandomCard(player);
    }
  }
}