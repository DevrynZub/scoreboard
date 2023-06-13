let home = 0
let away = 0

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
  let home = 0
  userInput++
  console.log('Button Connected', userInput);
}

function selectAwayPoints() {
  let home = 0
  userInput++
  console.log('Button Connected', userInput);
}

function selectAwayPointsThree() {
  let home = 0
  userInput++
  console.log('Button Connected', userInput);
}






// function addPoints3() {
//   userInput += 3
//   logUserInput()
//   let homePoints = document.getElementById('home')
//   console.log('home point element', homePoints);
// }

