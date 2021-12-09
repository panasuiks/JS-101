let rlsync = require('readline-sync');
const PLAYERS = ['Steve', 'Christen'];
const DEALER = 'Dealer';
const MIN_CARDS = 100;
const STARTING_MONEY = 100;
const NUMBER_OF_DECKS = 4;

function makeTable(players, dealer, minCards, startingMoney, numberOfDecks) {
  let table = {
    players: players,
    DEALER: dealer,
    minCards: minCards,
    startingMoney: startingMoney,
    NUMBER_OF_DECKS: numberOfDecks,

    startGame() {
      while (true) {
        this.resetTable();
        this.getBets();
        this.dealCards();
        this.playersHands();
        this.dealersHand();
        this.payOutWinners();
        if (this.getUserNewHand() === false) {
          prompt('Hope you had fun and/or made some bucks! Have a great day!');
          break;
        }
      }
    },

    resetTable() {
      let players = this.players.slice();
      players[players.length] = this.DEALER;
      this.hands = {};
      this.bets = {};
      this.winners = {};
      for (let player of players) {
        this.hands[player] = [];
        if (player !== this.DEALER) {
          this.bets[player] = 0;
          this.winners[player] = undefined;
        }
      }
      console.clear();
    },

    getBets() {
      this.bets = {};
      for (let player in this.wallets) {
        while (true) {
          prompt(`${player} has $${this.wallets[player].toFixed(2)} in their wallet.`);
          prompt(`How much would ${player} like to bet on this hand (USD)?`);
          let bet = roundToCents(rlsync.questionFloat());
          if (bet < 0) {
            prompt(`Bet must be a positive number.`);
          } else if (bet > this.wallets[player]) {
            prompt(`${player} does not have that much money.`);
          } else {
            this.bets[player] = bet;
            break;
          }
        }
      }
    },

    dealCards() {
      const CARDS_PER_USER = 2;
      for (let player in this['hands']) {
        for (let card = 1; card <= CARDS_PER_USER; card += 1) {
          this.selectAndRemoveRandomCard(player);
        }
      }
    },

    playersHands() {
      for (let player in this.bets) {
        while (true) {
          this.displayPlayerCards(player);
          if (this.didPlayerBust(player)) {
            this.playerLost(player);
            break;
          } else if (this.didPlayer21(player)) {
            this.player21(player);
            break;
          }
          let stayOrHit = this.getStayOrHit(player);
          if (stayOrHit === 'stay') break;
          if (stayOrHit === 'hit') {
            this.selectAndRemoveRandomCard(player);
          }
        }
        pressEnterTo('Press enter to move onto next player');
      }
    },

    dealersHand() {
      this.displayAllCards();
      if (this.didAllPlayerWinOrLose()) return;
      while (this.score[this.DEALER] < 17) {
        pressEnterTo('Press enter to draw dealer card');
        this.selectAndRemoveRandomCard(this.DEALER);
        this.displayAllCards();
      }
      this.displayDealerResults();
    },

    payOutWinners() {
      this.determineWinners();
      for (let player in this.bets) {
        if (this.winners[player] === true) {
          this.wallets[player] += this.bets[player];
        } else if (this.winners[player] === false) {
          this.wallets[player] -= this.bets[player];
        }
      }
      this.displayWinners();
    },

    selectAndRemoveRandomCard(player) {
      if (this.deck.length < this.minCards) this.resetDeck();
      let index = Math.floor((Math.random() * this.deck.length));
      this.hands[player].push(this.deck.splice(index, 1)[0]);
      this.updateScore();
    },

    updateScore() {
      const CARD_INDEX = 0;
      const VALUE_INDEX = 2;
      const ACE_SUBTRACT = 10;
      this.score = {};
      for (let player in this.hands) {
        this.score[player] = 0;
        let ace = false;
        for (let card of this.hands[player]) {
          if (card[CARD_INDEX] === 'Ace') ace = true;
          this.score[player] += card[VALUE_INDEX];
        }
        if (ace === true && this.score[player] > 21) {
          this.score[player] -= ACE_SUBTRACT;
        }
      }
    },

    didPlayerBust(player) {
      return (this.score[player] > 21);
    },

    didPlayer21(player) {
      return (this.score[player] === 21);
    },

    playerLost(player) {
      prompt(`${player} lost.`);
      table.winners[player] = false;
    },

    player21(player) {
      prompt(`${player} hit 21!`);
      table.winners[player] = true;
    },

    didAllPlayerWinOrLose() {
      return Object.values(this.winners).every(value => value !== undefined);
    },

    determineWinners() {
      for (let player in this.winners) {
        if (this.winners[player] === undefined) {
          if (this.score[player] > this.score[this.DEALER]) {
            this.winners[player] = true;
          }
          if (this.score[player] < this.score[this.DEALER]) {
            this.winners[player] = false;
          }
          if (this.score[this.DEALER] > 21) this.winners[player] = true;
        }
      }
    },

    getStayOrHit(player) {
      const USER_CHOICES = ['stay', 'hit'];
      prompt(`Would ${player} like to stay or hit?`);
      let response;
      while (true) {
        response = rlsync.question().toLowerCase();
        if (USER_CHOICES.includes(response)) break;
        prompt(`Selection invalid. Would ${player} like to stay or hit?`);
      }
      return response;
    },

    getUserNewHand() {
      const USER_CHOICES = ['yes', 'no'];
      let response;
      while (true) {
        prompt(`Would you like to play another hand? (yes/no)`);
        response = rlsync.question().toLowerCase();
        if (USER_CHOICES.includes(response)) break;
        prompt(`Selection invalid.`);
      }
      return (response === 'yes');
    },

    displayPlayerCards(player) {
      console.clear();
      let displayArray = this.makePlayerHandDisplayArray(player);
      this.displayArray(displayArray);
    },

    displayAllCards() {
      console.clear();
      let lineArray = this.makeAllHandsDisplayArray();
      this.displayArray(lineArray);
    },

    displayWinners() {
      let winnersLineArray = this.makeWinnersDisplayArray();
      this.displayArray(winnersLineArray);
    },

    makePlayerHandDisplayArray(player) {
      const SUIT_INDEX = 1;
      const CARD_INDEX = 0;
      let players = [player, this.DEALER];
      let totalLines = this.findPlayerDealerHandLength(player);
      let lineArray = [[]];
      lineArray[0].push(`${player} cards:`, `${this.DEALER} cards:`);
      for (let line = 1; line <= totalLines; line += 1) {
        lineArray[line] = [];
        for (let player of players) {
          let message = '';
          if (this.hands[player][line - 1] !== undefined &&
            (player !== this.DEALER || line < 2)) {
            let playerCard = this.hands[player][line - 1];
            message = playerCard[CARD_INDEX] + ' of ' + playerCard[SUIT_INDEX];
          }
          lineArray[line].push(message);
        }
      }
      return lineArray;
    },

    makeAllHandsDisplayArray() {
      const SUIT_INDEX = 1;
      const CARD_INDEX = 0;
      let lineArray = [[]];
      for (let player in this.hands) {
        lineArray[0].push(`${player} cards:`);
      }
      for (let line = 1; line <= this.findMaxHandLength(); line += 1) {
        lineArray[line] = [];
        for (let player in this.hands) {
          let message = '';
          if (this.hands[player][line - 1] !== undefined) {
            let playerCard = this.hands[player][line - 1];
            message = `${playerCard[CARD_INDEX]} of ${playerCard[SUIT_INDEX]}`;
          }
          lineArray[line].push(message);
        }
      }
      return lineArray;
    },

    makeWinnersDisplayArray() {
      let lineArray = [[]];
      for (let player in this.winners) {
        if (this.winners[player] === undefined) {
          lineArray[lineArray.length - 1].push(`${player} tied.`);
        } else if (this.winners[player] === true) {
          lineArray[lineArray.length - 1].push(`${player} won $${this.bets[player].toFixed(2)}`);
        } else if (this.winners[player] === false) {
          lineArray[lineArray.length - 1].push(`${player} lost $${this.bets[player].toFixed(2)}`);
        }
      }
      lineArray.push([]);
      for (let player in this.winners) {
        let wallet = this.wallets[player];
        lineArray[lineArray.length - 1].push(`${player} wallet = $${wallet.toFixed(2)}`);
      }
      return lineArray;
    },


    findMaxEntryLength(lineArray) {
      let maxLength = 0;
      for (let line in lineArray) {
        for (let column in lineArray[(line)]) {
          if (lineArray[line][column].length > maxLength) {
            maxLength = lineArray[line][column].length;
          }
        }
      }
      return maxLength;
    },

    findPlayerDealerHandLength(player) {
      let array = [this.hands[player].length, this.hands[this.DEALER].length];
      array.sort((a, b) => b - a);
      return array[0];
    },

    findMaxHandLength() {
      let max = 0;
      for (let player in this.hands) {
        if (this.hands[player].length > max) max = this.hands[player].length;
      }
      return max;
    },

    displayDealerResults() {
      if (this.score[this.DEALER] > 21) {
        prompt(`${this.DEALER} busted.`);
      } else {
        prompt(`${this.DEALER} scored ${this.score[this.DEALER]}.`);
      }
      this.displayEmptyLines(2);
    },

    displayEmptyLines(count) {
      for (let iteration = 0; iteration < count; iteration += 1) {
        prompt('');
      }
    },

    displayArray(lineArray) {
      let length = 20;
      let minSpace = 5;
      let maxLength = this.findMaxEntryLength(lineArray);
      if (length - maxLength < minSpace) length = maxLength + minSpace;
      for (let line in lineArray) {
        let message = '';
        for (let column in lineArray[line]) {
          if (Number(column) === 0) {
            message = lineArray[line][column];
          } else {
            let spaces = length - lineArray[line][column - 1].length;
            message = message + ' '.repeat(spaces) + lineArray[line][column];
          }
        }
        prompt(message);
      }
      this.displayEmptyLines(2);
    },

    resetDeck() {
      this.deck = [];
      let cards = ['2', '3', '4', '5', '6', '7', '8', '9',
        '10', 'Jack', 'Queen', 'King', 'Ace'];
      let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
      let suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
      for (let decks = 1; decks <= this.NUMBER_OF_DECKS; decks += 1) {
        for (let index = 0; index < cards.length; index += 1) {
          for (let suit of suits) {
            this.deck.push([cards[index], suit, values[index]]);
          }
        }
      }
    },

    resetWallet() {
      this.wallets = {};
      for (let player of this.players) {
        if (player === this.DEALER) continue;
        this.wallets[player] = this.startingMoney;
      }
    },
  };

  table.resetDeck();
  table.resetWallet();
  return table;
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function roundToCents(dollars) {
  return Math.round(dollars * 100) / 100;
}

function pressEnterTo(message) {
  prompt(message);
  rlsync.question();
}

let table = makeTable(PLAYERS, DEALER, STARTING_MONEY,
  MIN_CARDS, NUMBER_OF_DECKS);
table.startGame();