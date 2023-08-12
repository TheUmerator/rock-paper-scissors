/*

//cycle through buttons and select player choice
let buttonChoice='';    //to prevent getPlayerChoice() from throwing and 'undefined' input error
                        //when used with .toLowerCase()
const playerButton = document.querySelectorAll('button');
playerButton.forEach(button => {
    button.addEventListener('click', () => {
            // console.log(button.innerHTML);
            buttonChoice=button.innerHTML;
    })
});
console.log(buttonChoice);
// playerButton.addEventListener('click',console.log(getPlayerChoice(buttonChoice)));
*/

//instead of all querry selectors. just one button. rock
let playerChoice, computerChoice, result;
let playerScore = 0,
    computerScore = 0;
let gameCompleted = false;
const yScore = document.querySelector('.your-score');
const pcScore = document.querySelector('.computer-score');

// const playerSelection=document.querySelectorAll('.your-choices');
// const computerSelection=document.querySelectorAll('.computer-choices');

const decider = document.querySelector('.decider-container');


const playerButtons = document.querySelectorAll('button');
playerButtons.forEach(gameButton => {

    gameButton.addEventListener('click', () => {
        playerChoice = getPlayerChoice(gameButton.innerHTML);
        // console.log('player '+playerChoice);

        //so that the game will play only if player
        //presses the button
        computerChoice = getComputerChoice();

        // console.log('computer '+computerChoice);
        console.log(playRound(playerChoice, computerChoice));

        result = playRound(playerChoice, computerChoice);
        announcer(result, playerChoice, computerChoice);

        if (gameCompleted == true) {
            playerScore = 0;
            computerScore = 0;
            yScore.textContent = playerScore;
            pcScore.textContent = computerScore;
            
            gameCompleted=false;
            decider.textContent='';
        }
        switch (result) {
            case 0:
                break;
            case 1:
                playerScore++;
                console.log('player score increased to ', playerScore);
                yScore.textContent = playerScore;
                break;
            case 2:
                computerScore++;
                console.log('Computer score increased to ', computerScore);
                pcScore.textContent = computerScore;
                break;
        }
        if ((playerScore > computerScore) && (playerScore == 5)) {
            decider.textContent = 'You WIN';
            gameCompleted = true;

        } else if ((playerScore < computerScore) && (computerScore == 5)) {
            decider.textContent = 'You LOSE';
            gameCompleted = true;
        }
    })

});



//it works with one button, playerChoice is sent as rock