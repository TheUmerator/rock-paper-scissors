function getComputerChoice() {
  const randNum = Math.floor(Math.random() * 3);
  const choice = ['rock', 'paper', 'scissors'];
  return choice[randNum];
}

function announcer(result, playerChoice, computerChoice) {
  switch (result) {
    case 0:
      console.log("It's a draw!");
      break;
    case 1:
      console.log('You win! ' + playerChoice + ' beats ' + computerChoice);
      break;
    case 2:
      console.log('You lose! ' + computerChoice + ' beats ' + playerChoice);
      break;
  }
}

function playRound(playerChoice, computerChoice) {
  let result = 0;
  // 0 => draw
  // 1 => player gets a point
  // 2 => computer gets a point
  if (playerChoice === computerChoice) {
    result = 0;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 1;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'rock')
  ) {
    result = 2;
  }
  return result;
}
