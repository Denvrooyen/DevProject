const getUserChoice = (userInput) => {

  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    return console.log('Not a valid selection ! Choose rock, paper or scissors');
  }
};


const getComputerChoice = () => {
  let randomValue = Math.random() * 3;
  let floorValue = Math.floor(randomValue);

  if (floorValue === 0) {
    return 'rock';
  } else if (floorValue === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};
// Test Computer Choice
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return " The game was a tie! Try again.";
  }

  if (userChoice === 'bomb') {
    return 'You have Won the Game!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer is the Winner';
    } else {
      return 'You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer is the Winner';
    } else {
      return 'You are the winner';
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer is the Winner';
    } else {
      return 'You are the winner';
    }
  }

};
//  Test determineWinner
//console.log(determineWinner('paper', 'paper'));

const playGame = () => {
  let userChoice = getUserChoice('rock');
  console.log('The User Choose : ' + userChoice);
  let computerChoice = getComputerChoice();
  console.log('The Computer Choose :' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
