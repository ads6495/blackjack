const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const ranks = [
  'Ace',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'Jack',
  'Queen',
  'King'
]
const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
const deck = []
const player1 = []
const dealerHand = []

class Card {
  constructor(rank, suit, value) {
    this.rank = rank
    this.suit = suit
    this.value = value
  }
}
//create deck
const createDeck = () => {
  suits.forEach(suit => {
    ranks.forEach((rank, index) => {
      const value = values[index]
      deck.push(new Card(rank, suit, value))
    })
  })
}

//shuffle deck
const shuffleDeck = () => {
  deck.forEach(() => {
    var location1 = Math.floor(Math.random() * deck.length)
    var location2 = Math.floor(Math.random() * deck.length)
    var temp = deck[location1]
    deck[location1] = deck[location2]
    deck[location2] = temp
  })
}

const dealPlayerHand = () => {
  for (let i = 0; i < 1; i++) {
    const dealtCard = deck.pop()
    player1.push(dealtCard)
  }
  console.log(player1)
}

const dealDealerHand = () => {
  for (let i = 0; i <= 1; i++) {
    const dealtCard = deck.pop()
    dealerHand.push(dealtCard)
  }
  console.log(dealerHand)
}

const hitMeBaby = () => {
  for (let i = 0; i < 1; i++) {
    const dealtCard = deck.pop()
    player1.push(dealtCard)
  }
  console.log(player1)
}

// document
//   .querySelector('#create-deck-button')
//   .addEventListener('click', startGame)

const main = () => {
  createDeck()
  shuffleDeck()
  dealPlayerHand()
  dealDealerHand()
  hitMeBaby()
}

document.addEventListener('DOMContentLoaded', main)

document.querySelector('#hitme').addEventListener('click', hitMeBaby)
