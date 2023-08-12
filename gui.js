
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
let playerChoice,computerChoice, result;
let playerScore=0,computerScore=0;

const yScore=document.querySelector('.your-score');
const pcScore=document.querySelector('.computer-score');

const playerButtons=document.querySelectorAll('button');
playerButtons.forEach(gameButton=>{

    gameButton.addEventListener('click',()=> {
        playerChoice=getPlayerChoice(gameButton.innerHTML);
        // console.log('player '+playerChoice);
    
        //so that the game will play only if player
        //presses the button
        computerChoice=getComputerChoice();
        
        // console.log('computer '+computerChoice);
        console.log(playRound(playerChoice,computerChoice));
        
        result=playRound(playerChoice,computerChoice);
        announcer(result,playerChoice,computerChoice);
        
        switch (result) {
            case 0:
              break;
            case 1:
              playerScore++;
              console.log('player score increased to ',playerScore);
              yScore.textContent=playerScore;
              break;
            case 2:
              computerScore++;
              console.log('Computer score increased to ',computerScore);
              pcScore.textContent=computerScore;
              break;
          }
    })

})



//it works with one button, playerChoice is sent as rock


