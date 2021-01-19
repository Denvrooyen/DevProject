const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:

const squareNums = number => number.map(numbers => {
    return toSquare(numbers);
});

console.log(squareNums(numbers));