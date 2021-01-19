// Write your function here:
function howOld(age, year) {
    const currentYear = 2020;
    let yearBorn = currentYear - age;
    let yearDiffrence = Math.abs(currentYear - year);


    if (year > currentYear) {
        let ageInYear = age + yearDiffrence;
        return `You will be ${ageInYear} in the year ${year}`;
    } else if (year < yearBorn) {
        let yearsBeforeBorn = yearBorn - year;
        return `The year ${year} was ${yearsBeforeBorn} years before you were born`;
    } else if (year < currentYear && year > yearBorn) {
        let ageInYear = age - yearDiffrence;
        return `You were ${ageInYear} in the year ${year}`;
    } else {
        return `You were 0 in the year ${year}`;
    }
}

console.log(howOld(34, 1986));

// Once your function is written, write function calls to test your code!