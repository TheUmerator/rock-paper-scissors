    // console.log('test');

    function getComputerChoice() {
        let randomChoice, randNum;
        randNum = Math.floor(Math.random() * 3) + 1;
        //returns random choice of either paper, rock or scissor
        //RANDOM
        //in string, apparently.
        // console.log("The computer selected: "+randomChoice);
        //return randomChoice, to be used directly in playRound()
        //use w3 random integer code to return 1 , 2 or 3
        //if 1, rock, 2 paper, 3 scissors.
  
        switch (randNum) {
          case 1:
            randomChoice = 'rock';
            return randomChoice;
            break;
  
          case 2:
            randomChoice = 'paper';
            return randomChoice;
            break;
  
          case 3:
            randomChoice = 'scissors';
            return randomChoice;
            break;
        }
      }
  
      function getPlayerChoice() {
        let check = 0;
        while (check == 0) {
          let playerSelection = prompt("Select either rock, paper, or scissors");
          let check = 0;
          playerSelection = playerSelection.toLowerCase();
  
  
          switch (playerSelection) {
            case 'rock':
              return 'rock';
              check = 1;
              break;
            case 'paper':
              return 'paper';
              check = 1;
              break;
            case 'scissors':
              return 'scissors';
              check = 1;
              break;
            default:
              console.log("Enter the correct choice.");
          }
        }
  
        //get case insensitive player input
        //if ALL CAPS, small or mix
        //convert to small
        //return playerSelection, to be used directly in playRound()
      }
      // playerSelection is case insenstive, ie user input
  
  
      function announcer(result, playerSelection, computerSelection) {
        switch (result) {
          case 0:
            console.log("It's a draw!");
            break;
          case 1:
            console.log("You win! " + playerSelection + " beats " + computerSelection);
            break;
          case 2:
            console.log("You lose! " + computerSelection + " beats " + playerSelection);
            break;
        }
  
      }
      function playRound(playerSelection, computerSelection) {
        let result = 0;
        //0, draw
        //1, point for me
        //2, point for thee
        if (playerSelection == 'rock' && computerSelection == 'rock') {
          result = 0;
          return result;
        } else if (playerSelection == 'rock' && computerSelection == 'paper') {
          result = 2;
          return result;
        } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
          result = 1;
          return result;
        } else if (playerSelection == 'paper' && computerSelection == 'rock') {
          result = 1;
          return result;
        } else if (playerSelection == 'paper' && computerSelection == 'paper') {
          result = 0;
          return result;
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
          result = 2;
          return result;
        } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
          result = 2;
          return result;
        } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
          result = 1;
          return result;
        } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
          result = 0;
          return result;
        }
      }
      //this is the main game function that will loop over and over
      function game() {
        let playerSelection, computerSelection;
  
        let result = 0;
        let playerScore = 0;
        let computerScore = 0;
        let i = 1;
  
        //the logic that plays 5 rounds
        while (i <= 5) {
          console.log("ROUND " + i);
          playerSelection = getPlayerChoice();
          computerSelection = getComputerChoice();
  
          console.log(playerSelection);
          console.log(computerSelection);
  
          result = playRound(playerSelection, computerSelection);
  
          console.log(result);
          switch (result) {
            case 0:
              break;
            case 1:
              playerScore++;
              i++;
              break;
            case 2:
              computerScore++;
              i++;
              break;
          }
          //if result is 0, play again
          //if result is 1, add to playerScore
          //if result is 2, add to computerScore
  
  
          announcer(result, playerSelection, computerSelection);
          console.log("Your score: " + playerScore);
          console.log("Computer score: " + computerScore);
        }
  
  
        if ((playerScore > computerScore) && (i = 5))
          console.log("You win!");
        else if ((playerScore < computerScore) && (i = 5))
          console.log("You lose!");
      }
  
      game();