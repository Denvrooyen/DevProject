function greetAliens(greeting) {
    let newArray = [];
    for (let i = 0; i < 4; i += 1) {
        console.log('Oh powerful ' + aliens[i] + ', we humans offer our unconditional surrender!')
    }
}



// When you're ready to test your code, uncomment the below and run:

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);