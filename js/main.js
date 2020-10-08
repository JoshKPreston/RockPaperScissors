
// prevent default action on form submit
const newGameForm = document.getElementById('newGameForm')

newGameForm.addEventListener('submit', (e) => {
  e.preventDefault(); console.log('Started new game...')
})


// declare variables
let user = {}
let computerOpponent = {}
let weapons = ['rock', 'paper', 'scissors']
let opponentNames = ['Thing', 'Origami', 'Edward']
let userName = document.getElementById('userName')
let scoreboardWins = document.getElementById('wins')
let scoreboardLosses = document.getElementById('losses')
let userCardTitle = document.getElementById('userCardTitle')
let compCardTitle = document.getElementById('compCardTitle')
let userArenaImg = document.getElementById('userArenaImg')
let compArenaImg = document.getElementById('compArenaImg')
let newGameOverlay = document.getElementById('newGameOverlay')
let gamesWonCounter = null
let gamesLostCounter = null



// user setup
let setUserName = () => {
  user.name = userName.innerText
  userCardTitle.innerText = userName.innerText
}

let setUserWeapon = weapon => {
  user.weapon = weapon
}

let setUserArena = className => {

}


// computer opponent setup
let selectOpponent = () => {
  return opponentNames[Math.floor(Math.random() * opponentNames.length)]
}

let selectWeapon = () => {
  return weapons[Math.floor(Math.random() * weapons.length)]
}

let setCompArena = className => {

}


// game flow
let matchResult = document.getElementById('matchResult')

let addClass = (id, className) => {
  document.getElementById(id).classList.add(className)
}

let removeClass = (id, className) => {
  document.getElementById(id).classList.remove(className)
}


let evaluateMatch = () => {
  switch (true) {
    case (user.weapon == computerOpponent.weapon):
      matchResult.innerText = 'Tie!'
      matchResult.classList.add('slide-out-fwd-center')
      startNewRound()
      
    case (user.weapon == 'rock' && computerOpponent.weapon == 'paper'):
    case (user.weapon == 'scissors' && computerOpponent.weapon == 'rock'):
    case (user.weapon == 'paper' && computerOpponent.weapon == 'scissors'):
      matchResult.innerText = 'You Win!'
      matchResult.classList.add('slide-out-fwd-center')
      gamesWonCounter++
      startNewRound()
      break
    case (user.weapon == 'paper' && computerOpponent.weapon == 'rock'):
    case (user.weapon == 'rock' && computerOpponent.weapon == 'scissors'):
    case (user.weapon == 'scissors' && computerOpponent.weapon == 'paper'):
      matchResult.innerText = 'You Lose!'
      matchResult.classList.add('slide-out-fwd-center')
      gamesLostCounter++
      startNewRound()
      break
  }
}

let draw = () => {
  scoreboardWins.innerText = gamesWonCounter
  scoreboardLosses.innerText = gamesLostCounter
}

let checkUserWeapon = () => user.weapon ? true : false
let startNewRound = () => {

  computerOpponent.name = selectOpponent()
  computerOpponent.weapon = selectWeapon()

  alert('Choose your weapon!')
  while (!checkUserWeapon) {
    setInterval(checkUserWeapon, 5000)
  }

  window.setTimeout(evaluateMatch, 3000)
  draw()
}

let startNewGame = () => {
  gamesWonCounter = 0
  gamesLostCounter = 0
  setUserName()
  newGameOverlay.classList.add('hidden')
  startNewRound()
}

// let quit = () => {

// }