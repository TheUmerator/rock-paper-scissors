const playerScoreElement = document.querySelector('.player-score');
const computerScoreElement = document.querySelector('.computer-score');
const deciderElement = document.querySelector('#decider-container');
const playerButtons = document.querySelectorAll('button');

let playerChoice,
  computerChoice,
  playerScore = 0,
  computerScore = 0,
  gameCompleted = false;

playerButtons.forEach(gameButton => {
  gameButton.addEventListener('click', () => {
    playerChoice = gameButton.innerHTML.toLowerCase();
    computerChoice = getComputerChoice();

    const result = playRound(playerChoice, computerChoice);

    announcer(result, playerChoice, computerChoice);

    updateScores(result);

    if (gameCompleted) {
      resetGame();
    }

    if (playerScore === 5 || computerScore === 5) {
      endGame();
    }
  });
});

function updateScores(result) {
  switch (result) {
    case 1:
      playerScore++;
      console.log('Player score increased to', playerScore);
      playerScoreElement.textContent = playerScore;
      break;
    case 2:
      computerScore++;
      console.log('Computer score increased to', computerScore);
      computerScoreElement.textContent = computerScore;
      break;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = 0;
  computerScoreElement.textContent = 0;
  gameCompleted = false;
  deciderElement.textContent = '';
  deciderElement.classList.remove('decider-container');
}

function endGame() {
  deciderElement.classList.add('decider-container');
  if (playerScore > computerScore) {
    deciderElement.textContent = 'You WIN';
  } else {
    deciderElement.textContent = 'You LOSE';
  }
  gameCompleted = true;
}
