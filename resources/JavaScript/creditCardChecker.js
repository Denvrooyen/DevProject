// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

function validateCred(card) {
    const lunhArr = []; //created an new local array to store the results of the calculation
    let isValid = false;
    //for-loop to iterate through each digit in our array
    for (let i = card.length - 1; i >= 0; i--) {
        if (i % 2 == 0) // Check if the value in the card[i]  is odd or even
        {
            if (card[i] * 2 <= 9) {
                lunhArr.push(card[i] * 2);
            } else {
                lunhArr.push(card[i] * 2 - 9);
            }
        } else {
            lunhArr.push(card[i]);
        }
    }

    let arrSum = sumOfArray(lunhArr);
    if (arrSum % 10 === 0) {
        isValid = true;
    }
    return isValid;

}

// function to sum the values in the array
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // loop through array, it will add the value in index i to the sum
    }

    return sum;
}
 
// Check all the nested arrays in batch and pushes the invalid card numbers to variable invalidCards
function findInvalidCards(arr)
 {
    let invalidCards = [];

    for (let i = 0; i < arr.length; i++)
     {
        if (!validateCred(arr[i])) {
            invalidCards.push(arr[i]);
        }
    }
    return invalidCards;
}


// Check to which companies these invalid Card numbers belong to

function idInvalidCardCompanies(invalidCards) {
    let invalidCompanies = [];
    for (i = 0; i < invalidCards.length; i++) {
        if (invalidCards[i][0] === 3) {
            if (invalidCompanies.indexOf('Amex') == -1) {
                invalidCompanies.push('Amex');
            }

        }

        if (invalidCards[i][0] === 4) {
            if (invalidCompanies.indexOf('Visa') == -1) {
                invalidCompanies.push('Visa');
            }

        }

        if (invalidCards[i][0] === 5) {
            if (invalidCompanies.indexOf('Mastercard') == -1) {
                invalidCompanies.push('Mastercard');
            }

        }

        if (invalidCards[i][0] === 6) {
            if (invalidCompanies.indexOf('Discover') == -1) {
                invalidCompanies.push('Discover');
            }

        }
    }

    return invalidCompanies;
}

let invalidCards = findInvalidCards(batch);

console.log(idInvalidCardCompanies(invalidCards));

console.log(findInvalidCards(batch));


