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
const playerHand = []
const dealerHand = []
let playerHandValue = 0
let dealerHandValue = 0

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
    playerHand.push(dealtCard)
  }
  console.log(playerHand)
}

const dealDealerHand = () => {
  for (let i = 0; i < 1; i++) {
    const dealtCard = deck.pop()
    dealerHand.push(dealtCard)
  }
  console.log(dealerHand)
}

const hitMeBaby = () => {
  const dealtCard = deck.pop()
  playerHand.push(dealtCard)

  console.log(playerHand)
}
const hitDealer = () => {
  if (dealerHandValue < 17) {
    const dealtCard = deck.pop()
    dealerHand.push(dealtCard)
  } else if (dealerHandValue <= 21 && dealerHandValue > playerHandValue) {
    document.querySelector('.dealer-wins').textContent = 'Dealer Wins!'
  }

  console.log(dealerHand)
}

const valueOfPlayerCards = () => {
  let playerHandValue
  for (let v = 0; v < playerHand.length; v++) {
    const card = playerHand[v]

    if (playerHandValue) {
      playerHandValue += card.value
    } else {
      playerHandValue = card.value
    }
    document.querySelector('.player-one-wins').textContent = playerHandValue
  }
  console.log(playerHandValue)
}
const valueOfDealerCards = () => {
  let dealerHandValue
  for (let v = 0; v < dealerHand.length; v++) {
    const card = dealerHand[v]

    if (dealerHandValue) {
      dealerHandValue += card.value
    } else {
      dealerHandValue = card.value
    }
    document.querySelector('.dealer-wins').textContent = dealerHandValue
  }
  console.log(dealerHandValue)
}

const compareScores = () => {
  if (dealerHand <= 21 && dealerHand > playerHand) {
    console.log('help me')
  }
}

const main = () => {
  createDeck()
  shuffleDeck()
  dealPlayerHand()
  dealDealerHand()
  hitMeBaby()
  hitDealer()
  valueOfPlayerCards()
  valueOfDealerCards()
  // endGame()
}

document.querySelector('#stand').addEventListener('click', hitDealer)

document.addEventListener('DOMContentLoaded', main)

document.querySelector('#hitMe').addEventListener('click', hitMeBaby)
