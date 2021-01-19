// Write your function here:

function tipCalculator(quality, total) {
    switch (quality) {
        case 'bad':
            return calculateTip(0.05, total);
            break;
        case 'ok':
            return calculateTip(0.15, total);
            break;
        case 'good':
            return calculateTip(0.20, total);
            break;
        case 'excellent':
            return calculateTip(0.30, total);
            break;
        default:
            return calculateTip(0.18, total);
    }
}

function calculateTip(percentage, total) {
    return total * percentage;
}


// Uncomment the line below when you're ready to try out your function
console.log(tipCalculator('excellent', 100)) //should return 20

// We encourage you to add more function calls of your own to test your code!
