const input = 'A WHALE OF A DEAL!';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for (let i = 0; i < input.length; i++) {
    console.log(input[i]);

    for (let j = 0; j < vowels.length; j++) {
        console.log(vowels[j]);
        if (input[i].toLowerCase() === vowels[j]) {
            //console.log(input[i]);
            resultArray.push(input[i]);
        }
    }
    if (input[i].toLowerCase() === 'e' || input[i].toLowerCase() === 'u') {
        resultArray.push(input[i]);
    }
}


console.log(resultArray.join('').toUpperCase());