let rlsync = require('readline-sync');
const PLAYERS = ['Steve', 'Christen'];
const DEALER = 'Dealer';
const MIN_CARDS = 100;
const STARTING_MONEY = 100;
function prompt(message) {
  console.log(`=> ${message}`)
}

function makeTable(players, dealer, minCards, startingMoney) {
  let table = {
    players: PLAYERS,
    DEALER: dealer,
    minCards: minCards,
    startingMoney: startingMoney,


    NUMBER_OF_DECKS: 4,

    resetTable() {
      let players = this.players.slice()
      players[players.length] = this.DEALER;
      this.hands = {};
      this.bets = {};
      this.winners = {};
      for (let player of players) {
        this.hands[player] = [];
        if (player !== this.DEALER) {
          this.winners[player] = undefined;
          this.bets[player] = 0;
        }
      }
      console.clear();
    },

    resetDeck() {
      this.deck = [];
      let cards = ['2', '3', '4', '5', '6', '7', '8', '9',
        '10', 'Jack', 'Queen', 'King', 'Ace'];
      let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
      let suits = ['Clubs', 'Spades', 'Diamonds', 'Hearts'];
      for (let decks = 1; decks <= this.NUMBER_OF_DECKS; decks += 1) {
        for (let i = 0; i < cards.length; i += 1) {
          for (let suit of suits) {
            this.deck.push([cards[i], suit, values[i]]);
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


    dealCards() {
      const CARDS_PER_USER = 2;
      for (let player in this['hands']) {
        for (let card = 1; card <= CARDS_PER_USER; card += 1) {
          this.selectAndRemoveRandomCard(player);
        }
      }
      this.calculateScore();
    },

    selectAndRemoveRandomCard(player) {
      if (this.deck.length < this.minCards) this.resetDeck();
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
          if (card[CARD_INDEX] === 'Ace') ace = true;
          this.score[player] += card[VALUE_INDEX];
        }
        if (ace === true && this.score[player] > 21) {
          this.score[player] -= ACE_SUBTRACT;
        }
      }
    },

    findPlayerDealerHandLength(player) {
      let array = [this.hands[player].length, this.hands[this.DEALER].length]
      array.sort((a, b) => b - a);
      return array[0];
    },

    findMaxHandLength() {
      let max = 0;
      for (let player in this.hands) {
        if (this.hands[player].length > max) max = this.hands[player].length
      }
      return max;
    },

    makeHandsDisplayArray() {
      const SUIT_INDEX = 1;
      const CARD_INDEX = 0;
      let maxHandLength = this.findMaxHandLength();
      let lineArray = [];
      lineArray[0] = [];
      for (let player in this.hands) {
        let message = `${player} cards:`
        lineArray[0].push(message);
      }
      for (let index = 1; index < maxHandLength + 1; index += 1) {
        lineArray[index] = [];
        for (let player in this.hands) {
          let message = ''
          if (this.hands[player][index - 1] !== undefined) {
            let playerCard = this.hands[player][index - 1];
            message = playerCard[CARD_INDEX] + ' of ' + playerCard[SUIT_INDEX]
          }
          lineArray[index].push(message);
        }
      }
      return lineArray;
    },



    displayPlayerCards(player, hidden = false) {
      console.clear();
      const columnLength = 20
      const SUIT_INDEX = 1;
      const CARD_INDEX = 0;
      let first = `${player} cards:`;
      let spaceChar = columnLength - first.length;
      prompt(first + ' '.repeat(spaceChar) + `${this.DEALER} cards:`)
      let length = this.findPlayerDealerHandLength(player);
      for (index = 0; index < length; index += 1) {
        let first = '';
        let second = '';
        if (index < this.hands[player].length) {
          let playerCard = this.hands[player][index];
          first = playerCard[CARD_INDEX] + ' of ' + playerCard[SUIT_INDEX];
        }
        if ((index < this.hands[this.DEALER].length) && (index < 1 || hidden === false)) {
          let dealerCard = this.hands[this.DEALER][index];
          second = dealerCard[CARD_INDEX] + ' of ' + dealerCard[SUIT_INDEX];
        }
        let spaceChar = columnLength - first.length;
        prompt(first + ' '.repeat(spaceChar) + second);
      }
      this.displayEmptyLines(2);
    },

    displayEmptyLines(count) {
      for (iteration = 0; iteration < count; iteration += 1) {
        prompt('');
      }
    },

    displayAllCards() {
      console.clear();
      let lineArray = this.makeHandsDisplayArray();
      this.displayArray(lineArray);
    },

    getMaxLineArrayLength(lineArray) {
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

    displayArray(lineArray) {
      let columnLength = 20;
      let minSpace = 5;
      let maxLength = this.getMaxLineArrayLength(lineArray);
      if (columnLength - maxLength < minSpace) columnLength = maxLength + minSpace;
      for (let line in lineArray) {
        for (let column in lineArray[(line)]) {
          if (lineArray[line][column].length > maxLength) {
            maxLength = lineArray[line][column].length;
          }
        }
      }
      for (let line in lineArray) {
        let message = ''
        for (let column in lineArray[line]) {
          if (Number(column) === 0) {
            message = lineArray[line][column];
          } else {
            let spaces = columnLength - lineArray[line][column - 1].length
            message = message + ' '.repeat(spaces) + lineArray[line][column]
          }
        }
        prompt(message);
      }
    },

    getBets() {
      this.bets = {};
      for (let player in this.wallets) {
        if (player === this.DEALER) continue;
        while (true) {
          prompt(`${player} has $${this.wallets[player].toFixed(2)} in their wallet.`)
          prompt(`How much would ${player} like to bet on this hand (USD)?`);
          let bet = roundToCents(rlsync.questionFloat())
          if (bet < 0) {
            prompt(`Bet must be a positive number.`);
            continue;
          }
          if (bet > this.wallets[player]) {
            prompt(`${player} does not have that much money.`);
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
          this.displayPlayerCards(player, true);
          if (this.didPlayerBust(player)) {
            prompt(`${player} lost.`);
            table.winners[player] = false;
            break
          }
          if (this.didPlayer21(player)) {
            prompt('You hit 21!');
            table.winners[player] = true;
            break
          }
          let stayOrHit = this.getStayOrHit(player);
          if (stayOrHit === 'stay') break;
          if (stayOrHit === 'hit') {
            this.selectAndRemoveRandomCard(player);
            this.calculateScore();
          }
        }
      }
    },

    didAllPlayerWinOrLose() {
      return Object.values(this.winners).every(value => value !== undefined);
    },

    dealersHand() {
      prompt('Press enter to move onto dealer hand');
      rlsync.question();
      this.displayAllCards();
      if (this.didAllPlayerWinOrLose()) return;
      while (this.score[this.DEALER] < 17) {
        prompt('Press enter to draw dealer card');
        rlsync.question();
        this.selectAndRemoveRandomCard(this.DEALER);
        this.calculateScore();
        this.displayAllCards();
      }
    },

    determineWinners() {
      for (let player in this.winners) {
        if (this.winners[player] === undefined) {
          if (this.score[player] > this.score[this.DEALER]) this.winners[player] = true;
          if (this.score[player] < this.score[this.DEALER]) this.winners[player] = false;
          if (this.score[this.DEALER] > 21) this.winners[player] = true;
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

    clearConsole() {
      console.clear();
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

    displayWinners() {
      this.displayEmptyLines(2);
      let lineArray = [[]]
      for (let player in this.winners) {
        if (this.winners[player] === undefined) {
          lineArray[lineArray.length - 1].push(`${player} tied.`)
        } else if (this.winners[player] === true) {
          lineArray[lineArray.length - 1].push(`${player} won $${this.bets[player].toFixed(2)}`)
        } else if (this.winners[player] === false) {
          lineArray[lineArray.length - 1].push(`${player} lost $${this.bets[player].toFixed(2)}`)
        }
      }
      lineArray.push([]);
      for (let player in this.winners) {
        let wallet = this.wallets[player];
        lineArray[lineArray.length - 1].push(`${player} wallet = $${wallet.toFixed(2)}`)
      }
      this.displayArray(lineArray);
    },

    getUserNewHand() {
      this.displayEmptyLines(1);
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

    startGame() {
      while (true) {
        this.resetTable();
        this.getBets();
        this.dealCards();
        this.calculateScore();
        this.playersHand();
        this.dealersHand();
        this.determineWinners();
        this.payOutWinners();
        this.displayWinners();
        if (this.getUserNewHand() === false) {
          prompt('Hope you had fun and/or made some bucks! Have a great day!')
          break
        }
      }
    }
  }

  table.resetDeck();
  table.resetWallet();

  return table;
}

function roundToCents(dollars) {
  console.log(dollars)
  return Math.round(dollars * 100) / 100;
}

let table = makeTable(PLAYERS, 'Dealer', 100, 100);
table.startGame();