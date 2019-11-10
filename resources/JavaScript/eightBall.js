let userName = '';

userName ? console.log(`Hallo, ${userName}!`) : console.log('Hello');

let userQuestion = 'Will i be a successful developer?';

console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
console.log('Your chance is ' + randomNumber + ' out of 10');

let eightBall = randomNumber;

if (eightBall === 0 || eightBall === 1) {
  console.log('My sources say no');
} else if (eightBall === 2) {
  console.log('Outlook not so good');
} else if (eightBall === 3) {
  console.log('Reply hazy try again');
} else if (eightBall === 4) {
  console.log('Do not count on it');
} else if (eightBall === 5) {
  console.log('Cannot predict now');
} else if (eightBall === 6) {
  console.log('Signs point to yes');
} else if (eightBall === 7) {
  console.log('It is decidedly so');
} else {
  console.log('It is certain');
}
