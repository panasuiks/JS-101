let rlsync = require('readline-sync');
const PLAYERS = ['Human'];
const DEALER = 'Dealer';
const MIN_CARDS = 100;
const STARTING_MONEY = 100;
function prompt(message) {
  console.log(`=> ${message}`)
}

function makeTable(players = PLAYERS) {
  let table = {
    hands: {},
    deck: [],
    bets: {},
    wallets: {},
    winners: {},
    score: {},
    hiddenScore: {},
    NUMBER_OF_DECKS: 4,

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
      let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
      let suits = ['clubs', 'spades', 'diamonds', 'hearts'];
      for (let decks = 1; decks <= this.NUMBER_OF_DECKS; decks += 1) {
        for (let i = 0; i < cards.length; i += 1) {
          for (let suit of suits) {
            this.deck.push([cards[i], suit, values[i]]);
          }
        }
      }
    },

    resetWinners() {
      for (let player of players) {
        if (player === DEALER) continue;
        this.winners[player] = undefined;
      }
    },

    resetWallet() {
      for (let player of players) {
        if (player === DEALER) continue;
        this.wallets[player] = STARTING_MONEY;
      }
    },

    resetBets() {
      this.bets = {};
      for (let player in this.wallets) {
        this.bets[player] = 0;
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
      for (let player in this.hands) {
        this.score[player] = 0;
        let ace = false;
        for (let card of this.hands[player]) {
          if (card[CARD_INDEX] === 'A') ace = true;
          this.score[player] += card[VALUE_INDEX];
        }
        if (ace === true && this.score[player] > 21) {
          this.score[player] -= ACE_SUBTRACT;
        }
      }
      if (this.hands[DEALER].length > 0) {
        this.score[(DEALER + 'Hidden')] = this.hands[DEALER][0][VALUE_INDEX]
      }
    },

    displayHiddenTableAndScore() {
      console.clear();
      console.log(this.hands);
      console.log(this.score);
    },

    displayTableAndScore() {
      console.clear();
      console.log(this.hands);
      console.log(this.score);
    },

    getBets() {
      this.bets = {};
      for (let player in this.wallets) {
        if (player === DEALER) continue;
        while (true) {
          prompt(`How much would ${player} like to bet on this hand (USD)?`);
          let bet = roundToCents(rlsync.questionFloat())
          if (bet < 0) {
            prompt(`Bet must be a positive number.`);
            continue;
          }
          if (bet > this.wallets[player]) {
            prompt(`Bet must be a positive number.`);
            continue;
          }
          this.bets[player] = bet;
          break
        }
      }
    },

    didPlayerBust(player) {
      return (this.score[player] > 21);
    },

    didPlayer21(player) {
      return (this.score[player] === 21);
    },

    playersHand() {
      for (let player in this.bets) {
        while (true) {
          this.displayHiddenTableAndScore();
          if (this.didPlayerBust(player)) {
            prompt('You lost');
            table.winners[player] = false;
            break
          }
          if (this.didPlayer21(player)) {
            prompt('You hit 21!');
            table.winners[player] = true;
            break
          }
          let stayOrHit = getStayOrHit();
          if (stayOrHit === 'stay') break;
          if (stayOrHit === 'hit') {
            this.selectAndRemoveRandomCard(player);
            this.calculateScore();
          }
        }
      }
      this.displayHiddenTableAndScore();
    },

    didAllPlayerWinOrLose() {
      return Object.values(this.winners).every(value => value !== undefined);
    },

    dealersHand() {
      this.displayTableAndScore();
      if (this.didAllPlayerWinOrLose()) return;
      while (this.score[DEALER] < 17) {
        this.selectAndRemoveRandomCard(DEALER);
        this.calculateScore();
      }
      this.displayTableAndScore();
    },

    determineWinners() {
      for (let player in this.winners) {
        if (this.winners[player] === undefined) {
          if (this.score[player] > this.score[DEALER]) this.winners[player] = true;
          if (this.score[player] < this.score[DEALER]) this.winners[player] = false;
          if (this.score[DEALER] > 21) this.winners[player] = true;
          debugger;
        }
      }
    },

    payOutWinners() {
      for (let player in this.bets) {
        if (this.winners[player] === true) {
          this.wallets[player] += this.bets[player]
        } else if (this.winners[player] === false) {
          this.wallets[player] -= this.bets[player]
        }
      }
    },

    resetTable() {
      table.resetHands();
      table.resetWinners();
      table.resetBets();
    }
  }

  table.resetDeck();
  table.resetWallet();

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

let table = makeTable();
while (true) {
  table.resetTable();
  table.getBets();
  table.dealCards();
  table.calculateScore();
  for (let player in table.bets) {
    table.playersHand();
  }
  table.dealersHand();
  table.determineWinners();
  table.payOutWinners();
  console.log(table.winners);
  console.log(table.wallets);
}