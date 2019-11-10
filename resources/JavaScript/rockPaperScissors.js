const getUserChoice = (userInput) =>
{ 
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput ==='paper' || userInput === "scissors" || userInput === 'bomb')
  {
    return userInput;
  }
  else 
  {
  console.log('Please make a valid selection like Rock, Paper or Scissors'); 
  }
  
};
//Testing the userChoice function
//console.log(getUserChoice('Spack'));

const getComputerChoice = () =>
{
  const randomNumber = Math.floor(Math.random() * 3
);
  switch (randomNumber) 
  {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2: 
      return 'scissors';
      break;
  }
};
//Testing the computerChoice function 
//console.log(getComputerChoice());

const determineWinner = (userChoice, computerChoice) =>
{
  //Secret cheat Code- that User can use
  if(userChoice === 'bomb')
    {
      return 'You destroyed your opponent! Congrats!';
    }
  
  if(userChoice === computerChoice)
    {
      return "The game is a tied!";
    }
 if(userChoice === 'rock')
 {
   if(computerChoice === 'paper')
     {
       return "Computer won!";
     }
   else
     {
       return "User won!";
     }
   }
  
   if(userChoice === 'paper')
 {
   if(computerChoice === 'scissors')
     {
       return "Computer won!";
     }
   else
     {
       return "User won!";
     }
 }
  
  if(userChoice === 'scissors')
 {
   if(computerChoice === 'rock')
     {
       return "Computer won!";
     }
   else
     {
       return "User won!";
     }
   } 
};
//Tests who is the Winner
//console.log(determineWinner('paper','paper'));
//console.log(determineWinner('rock','paper'));
//console.log(determineWinner('rock','scissor'));

const playGame = () =>
{
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  
  console.log('You choice is : ' + userChoice);
  console.log('The Computer is : ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};
//Test if playGame works
//console.log(playGame());
playGame();