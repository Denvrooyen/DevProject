const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput == 'paper' || userInput == 'scissors') {
        return userInput;
    } else {
        return console.log('Not an Valid choice ! Choose rock, paper or scissors.');
    }
}

function getComputerChoice() {
    let randomValue = Math.random() * 3;
    let floorValue = Math.floor(randomValue);
    //or
    //let floorValue = Math.floor(Math.random() * 3);

    // switch (floorValue) {
    //   case 0:
    //   return 'rock';
    //   break;
    //   case 1:
    //   return 'paper';
    //   break;
    //   case 2:
    //   return 'scissors';
    //   break;
    // }
    //or if statement
    if (floorValue == 0) {
        return 'rock';
    } else if (floorValue == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'The game was a tie, try again.';
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer has won!';
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer is the Winner';
        } else {
            return 'You are a Winner';
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer is the Winner';
        } else {
            return 'You are a Winner';
        }
    }

}

console.log(getComputerChoice());
console.log(getUserChoice('paper'));
console.log(determineWinner('paper','scissors'));
//console.log(getUserChoice('fork'));
