//global variable to keep track of players score. 
let humanScore = 0; 
let computerScore = 0

// Function getComputerChoice
//math random returns decimals. Should devide 0-1 into 3 parts and set those fractions into rock, paper, scissors

function getComputerChoice() {
  const a = Math.random()
  if (a <= .33) {
    return "rock"
  }
  else if ( a <= .66){
    return "paper";
  }
  else {
    return "scissors";
  }
}

// function humanchoice
// prompt the user
function getHumanChoice() {
  return prompt("Pick between rock, paper, scissors");
}

// function to play 
function playRound(humanChoice, computerChoice) {
  const rules = {
    rock: "scissors",    // rock beats scissors
    paper: "rock",       // paper beats rock
    scissors: "paper"    // scissors beats paper
  };

  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } 
  else if (rules[humanChoice] === computerChoice) {
    humanScore += 1;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
  } 
  else {
    computerScore += 1;
    return `You lose! ${computerChoice} beats ${humanChoice}.`;
  }
}

//function to playgame and keep trakc with score
function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(`Round ${i + 1}:`);
    console.log(`You chose ${humanSelection}, computer chose ${computerSelection}`);

    let result = playRound(humanSelection, computerSelection);
    console.log(result);
    console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    console.log("----------------------");
  }

  // Final result
  if (humanScore > computerScore) {
    return "Final Result: You win the game!";
  } else if (computerScore > humanScore) {
    return "Final Result: Computer wins the game!";
  } else {
    return "Final Result: It's a tie!";
  }
}

// Run the game
console.log(playGame());