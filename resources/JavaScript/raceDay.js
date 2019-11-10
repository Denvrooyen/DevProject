let raceNumber = Math.floor(Math.random() * 1000);

let isEarly = false;
console.log(raceNumber + ' ' + isEarly);
let runnerAge = 33;

if (runnerAge > 18 && isEarly) {
    raceNumber += 1000;
}
let raceTime = '';
if (runnerAge > 18 && isEarly) {
    raceTime = '9:30am';
    console.log('Your race time is ' + raceTime + ', race number ' + raceNumber);
} else if (runnerAge > 18 && isEarly === false) {
    raceTime = '11:00am';
    console.log('Your race time is ' + raceTime + ', race number ' + raceNumber);
} else if (runnerAge < 18) {
    raceTime = "12:30pm";
    console.log('Your race time is ' + raceTime + ', race number ' + raceNumber);
} else {
    console.log('Please visit the registration desk.');
}
