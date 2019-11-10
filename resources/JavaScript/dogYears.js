// Variable storing my age
let myAge = 33;

//Variable that accounts for the first two years of a dog life
let earlyYears = 2;

// The Variable earlyYears then need to to be multiplied by 1o.5 as the first two years of a dogs life counts as 10.5
earlyYears *= 10.5;
console.log('Early Years:' + earlyYears);

//Variable that takes the value of myAge and subtracts two from it and give you the value of the variable laterYears
let laterYears = myAge - 2;

//Variable to calculate number of dog years accounted for by later years
laterYears *= 4;
console.log('Later Years :' + laterYears);

//Variable that stores your age in Dog Years
let myAgeInDogYears = earlyYears + laterYears;
console.log('My Age in Dog Years :' + myAgeInDogYears);

//This is a method that change the string into lowercase
let myName = 'Denise'.toLowerCase();
//console.log(myName.toLowerCase());

//Concatenated my results into a sentence using interpolation
console.log(`My name is ${myName}. I am ${myAge} old in human years which is ${myAgeInDogYears} years old in dog year.`);
