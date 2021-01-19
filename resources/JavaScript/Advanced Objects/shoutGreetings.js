// Write your code here:

//const shoutGreetings = greet => greet.map(greetings => `${greetings.toUpperCase()}!`);

function shoutGreetings(greetingsArr) {
    return greetingsArr.map(greeting => `${greeting.toUpperCase()}!`);
}
// Feel free to uncomment out the code below to test your function!

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

console.log(shoutGreetings(greetings))
// Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]