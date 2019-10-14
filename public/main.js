import { create } from "domain"

const suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']
const ranks = [
{name: '1', value: 11},
{name: '2', value: 11},
{name: '3', value: 11},
{name: '4', value: 11},
{name: '5', value: 11},
{name: '6', value: 11},
{name: '7', value: 11},
{name: '8', value: 11},
{name: '9', value: 11},
{name: '10', value: 11},
{name: 'Jack', value: 11},
{name: 'Queen', value: 11},
{name: 'King', value: 11}
]


const deck = []
const playerHand = []
const dealerHand = []


//create deck
const createDeck = () => {
deck = []
suits.forEach(suit => {
  ranks.forEach(rank => {
    deck.push({
      rank: rank.name,
      value: rank.value,
      suit: suit
    })
  })
})
console.log(deck)
}

//shuffle deck
const shuffleDeck = () => {
 for(let i = deck.length - 1; i >= 0; i--){
  const a = Math.floor(Math.random() * i)
  const firstArray = deck[i]
  const secondArray = deck[a]
  console.log(firstArray)
  console.log(secondArray)
 }
}

const PlayerDrawCard = () => {
  // take from shuffled deck
const dealtCard = deck.pop()
  //add to playerhand
  playerHand.push(dealtCard)

}

const dealerDrawCard = () => {
 const dealtCard = deck.pop()
 dealerHand.push(dealtCard)
}

const dealPlayerHand = () => {
  for (let i = 0; i < 2; i++) {
    playerDrawCard()
  }
  console.log(playerHand)
}

const dealDealer = () => {
  const playerHandValue = document.querySelector('.player-hand-value')
  const playerName = document.querySelector('.player-name')
  const dealerName = document.querySelector('.dealer-name')
  getPlayerHandTotal()
if(playerHandValue.textContent === 21) {
  playerName.textContent = "player Wins!"
  dealerName.textContent = "Dealer Wins!"
  removeButtons()
} else {
  for (let i = 0; i < 2; i++){
    dealerDrawCard()
  }
}
console.log(dealerHand)
}
const RemoveButtons = () => {
  document.querySelector('.hit').classList.add('hide')
  document.querySelector('.stand').classList.add('hide')
  document.querySelector('.reset').classList.remove('hide')
}


 
const getPlayerHandTotal = () => {
  const playerHandValue = document.querySelector('.player-hand-value')
  const playerHandTotal = playerHand.reduce((runningTotal, card) => {
    return runningTotal += card.value
  }, 0)
  playerHandValue.textContent = playerHandTotal
  console.log(playerHandTotal)
}

const getDealerHandTotal = () => {
  const dealerHandValue = document.querySelector('.dealer-hand-value')
  const playerHandTotal = playerhand.reduce((runningTotal, card) => {
    return runningTotal + card.value
  }, 0)
  playerHandValue.textContent = playerHandTotal
  console.log(playerHandTotal)
}


//pressing the hit button to get a card
const playerHit = () => {
  const playerHandValue = document.querySelector('.player-hand-value')
  const playerName = document.querySelector('.player-name')
  const dealerName = document.querySelector('.dealer-name')
  for(let i =0; i<1; i++){
    PlayerDrawCard()
    getPlayerHandTotal()
    if(playerHandValue > 21) {
      playerName.textContent = 'player Bust!'
      dealerName.textContent = 'Dealer wins!'
    }
  }
}

// when player hits stand

const playerStand = () => {
  const dealerHandValue = document.querySelector('.dealer-hand-value')
  const playerHandValue = document.querySelector('.player-hand-value')
  const dealerName = document.querySelector('.dealer-name')
  const playerName = document.querySelector('.player-name')
  
  RemoveButtons()

  while (dealerHandValue.textContent < 17) {
    for(let i = 0; i < 1; i++){
      dealerDrawCard()
      getDealerHandTotal()
      if (dealerHandValue.textContent > 21) {
        playerName.textContent = 'Player Wins!'
        dealerName.textContent = 'Dealer Bust!'
      } else if (dealerHandValue.textContent > playerHandValue.textContent) {
        playerName.textContent = 'Player Loses!'
        dealerName.textContent = 'Dealer Wins!'
      } else if (dealerHandValue.textContent < playerHandValue.textContent) {
        playerName.textContent = 'Player Wins!'
        dealerName.textContent = 'Dealer Loses!'
      } else if (dealerHandValue.textContent === playerHandValue.textContent) {
        playerName.textContent = 'Push!'
        dealerName.textContent = 'Push!'
      }
      console.log(dealerHand)
    }
  }
}

const resetGame = () => {
  const playerName = document.querySelector('.player-name')
  const dleaerName = document.querySelector('.dealer-name')
  playerHand=[]
  dealerHand=[]
  createDeck()
  shuffleDeck()
  dealPlayerHand()
  dealDealer()
  getPlayerHandTotal()
  getDealerHandTotal()
playerName.textContent = 'Player'
dealerName.textContent = 'Dealer'
document.querySelector('.hit').classList.remove('hide')
document.querySelector('.stand').classList.remove('hide')
document.querySelector('.reset').classList.add('hide')
}

const main () => {
  createDeck()
  shuffleDeck()
  dealPlayerHand()
  dealDealer()
  getPlayerHandTotal()
  getDealerHandTotal()
}

document.addEventListener('DOMContentLoaded', main)
document.querySelector('.hit').addEventListener('click', playerHit)
document.querySelector('.reset').addEventListener('click', resetGame)
document.querySelector('.stand').addEventListener('click', playerStand)
