const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let humanChoice;
let compChoiceNum;
let humanChoiceNum;
let computerScore = 0;
let humanScore = 0;

function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  if (humanScore > computerScore) {
    console.log("Human wins!");
  } else if (humanScore === computerScore) {
    console.log("It's a draw!");
  } else if (humanScore < computerScore) {
    console.log("Computer wins!");
  }
}

function playRound() {
  // fuction used to get human input/choice via prompt
  function getHumanChoice() {
    return (humanChoice = prompt(
      `Choose an option: ${rock}, ${paper}, or ${scissors}!`
    ));
  }

  function logHumanChoice() {
    console.log(`Human choice is ${humanChoice}`);
  }

  //Logic to get computer choice of R, P, S
  function getComputerChoice() {
    //generate random number between one and three for R, P, S choice
    compChoiceNum = Math.floor(Math.random() * 3);
    if (compChoiceNum === 2) {
      console.log(`Computer choice is ${scissors}`);
    } else if (compChoiceNum === 1) {
      console.log(`Computer choice is ${paper}`);
    } else {
      console.log(`Computer choice is ${rock}`);
    }
  }

  function assignHumChoiceNum() {
    if (humanChoice === "scissors") {
      return (humanChoiceNum = 2);
    } else if (humanChoice === "paper") {
      return (humanChoiceNum = 1);
    } else if (humanChoice === "rock") {
      return (humanChoiceNum = 0);
    }
  }

  function displayScore() {
    console.log(`Human: ${humanScore} /// Computer: ${computerScore}`);
  }
  function compareVals() {
    // all options for humanChoice = 2
    if (humanChoiceNum === 2) {
      if (compChoiceNum === 2) {
        console.log("This round is a draw - please play again!");
      } else if (compChoiceNum === 1) {
        console.log(`Scissors beats paper - human wins!`);
        humanScore++;
      } else if (compChoiceNum === 0) {
        console.log(`Rock beats scissors - computer wins!`);
        computerScore++;
      }
    }
    // all options for humanChoice = 1
    else if (humanChoiceNum === 1) {
      if (compChoiceNum === 1) {
        console.log("This round is a draw - please play again!");
      } else if (compChoiceNum === 2) {
        console.log(`Scissors beats paper - computer wins!`);
        computerScore++;
      } else if (compChoiceNum === 0) {
        console.log(`Paper beats rock - human wins!`);
        humanScore++;
      }
    }
    // all options for humanChoice = 0
    else if (humanChoiceNum === 0) {
      if (compChoiceNum === 0) {
        console.log("This round is a draw - please play again!");
      } else if (compChoiceNum === 1) {
        console.log(`Paper beats rock - computer wins!`);
        computerScore++;
      } else if (compChoiceNum === 2) {
        console.log(`Rock beats scissors - human wins!`);
        humanScore++;
      }
    }

    displayScore();
  }

  getHumanChoice();
  logHumanChoice();
  getComputerChoice();
  assignHumChoiceNum();
  compareVals();
}

playGame();
