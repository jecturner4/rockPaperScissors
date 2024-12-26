// Variables for rock paper and scissor selections
const rock = "rock";
const paper = "paper";
const scissors = "scissors";
let selectionMade = false;

// Variables for human and computer choices
let humanChoiceNum;
let computerChoiceNum;
// these may be removed for redundancy as the "words" are already stored in variables above?
let humanChoiceWord;
let computerChoiceWord;

// Variables for scores
let humanScore = 0;
let computerScore = 0;

// Functions to log my selection of rock
function logRock() {
  humanChoiceNum = 0;
  humanChoiceWord = "rock";
  playerSelection();
}
// Functions to log my selection of paper
function logPaper() {
  humanChoiceNum = 1;
  humanChoiceWord = "paper";
  playerSelection();
}
// Functions to log my selection of scissors
function logScissors() {
  humanChoiceNum = 2;
  humanChoiceWord = "scissors";
  playerSelection();
}

function displayScore() {
  console.log(`Human: ${humanScore} /// Computer: ${computerScore}`);
  document.getElementById("humanScore").innerHTML = humanScore;
  document.getElementById("computerScore").innerHTML = computerScore;
}

function compareVals() {
  // all options for humanChoice = 2
  if (humanChoiceNum === 2) {
    if (computerChoiceNum === 2) {
      console.log("This round is a draw - please play again!");
    } else if (computerChoiceNum === 1) {
      console.log(`Scissors beats paper - human wins!`);
      humanScore++;
    } else if (computerChoiceNum === 0) {
      console.log(`Rock beats scissors - computer wins!`);
      computerScore++;
    }
  }
  // all options for humanChoice = 1
  else if (humanChoiceNum === 1) {
    if (computerChoiceNum === 1) {
      console.log("This round is a draw - please play again!");
    } else if (computerChoiceNum === 2) {
      console.log(`Scissors beats paper - computer wins!`);
      computerScore++;
    } else if (computerChoiceNum === 0) {
      console.log(`Paper beats rock - human wins!`);
      humanScore++;
    }
  }
  // all options for humanChoice = 0
  else if (humanChoiceNum === 0) {
    if (computerChoiceNum === 0) {
      console.log("This round is a draw - please play again!");
    } else if (computerChoiceNum === 1) {
      console.log(`Paper beats rock - computer wins!`);
      computerScore++;
    } else if (computerChoiceNum === 2) {
      console.log(`Rock beats scissors - human wins!`);
      humanScore++;
    }
  }
}

function playerSelection() {
  gameOn = true;
  if (humanScore < 5 && computerScore < 5) {
    console.log(`Human choice is ${humanChoiceWord}`);
    computerChoiceNum = Math.floor(Math.random() * 3);
    if (computerChoiceNum === 2) {
      console.log(`Computer choice is ${scissors}`);
    } else if (computerChoiceNum === 1) {
      console.log(`Computer choice is ${paper}`);
    } else {
      console.log(`Computer choice is ${rock}`);
    }
  } else if (humanScore >= 5) {
    console.log("Human wins!!!");
  } else if (computerScore >= 5) {
    console.log("Too bad... the computer has defeated you");
  }

  compareVals();
  displayScore();
  if (humanScore >= 5) {
    console.log("Human wins the game :)");
    document.getElementById("winnerDeclaration").innerHTML =
      "Human wins the game :)";
  } else if (computerScore >= 5) {
    console.log("Computer wins... better luck next time");
    document.getElementById("winnerDeclaration").innerHTML =
      "Computer wins... better luck next time";
  }

  if (humanScore >= 5 || computerScore >= 5) {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
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

//Event listeners to choose correct selection when button is clicked
const rockSelected = document
  .getElementById("rock")
  .addEventListener("click", logRock);
const paperSelected = document
  .getElementById("paper")
  .addEventListener("click", logPaper);
const scissorsSelected = document
  .getElementById("scissors")
  .addEventListener("click", logScissors);

// code triggers a round of play
function playRound() {
  playerSelection();
}

// Play Game Function - Plays 5 rounds and the declares the winner :)
function playGame() {
  playRound();
  playRound();
  playRound();
  playRound();
  playRound();
}
//Placeholder - this will need to be the final score comparison and declaration of the winner in code form
