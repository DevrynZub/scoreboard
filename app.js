let home = 0
let away = 0
let home3 = (0 + 3)

let userInput = ''

let homeScoreElement = document.getElementById('homeScore')
console.log('home score element', homeScoreElement);
homeScoreElement.innerText = userInput




function selectHomePoints() {
  let home = 0
  userInput++
  let homeScoreElement = document.getElementById('homeScore')
  console.log('home score element', homeScoreElement);
  homeScoreElement.innerText = userInput
}

function selectHomePointsThree() {
  let home = (0 + 3)
  userInput++
  let homeScoreElement = document.getElementById('homeScore')
  console.log('home score element', homeScoreElement);
  homeScoreElement.innerText = userInput
}

function selectAwayPoints() {
  let away = 0
  userInput++
  let awayScoreElement = document.getElementById('awayScore')
  console.log('away score element', awayScoreElement);
  awayScoreElement.innerText = userInput
}

// function selectAwayPointsThree() {
//   let away = 0
//   userInput++
//   let awayScoreElement = document.getElementById('awayScore')
//   console.log('away score element', awayScoreElement);
//   awayScoreElement.innerText = userInput
// }






// function addPoints3() {
//   userInput += 3
//   logUserInput()
//   let homePoints = document.getElementById('home')
//   console.log('home point element', homePoints);
// }

