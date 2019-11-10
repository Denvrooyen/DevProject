// constant variable of weather forcast in Kelvin
const kelvin = 0;
//console.log(`The temperature is ${kelvin} degrees Kelvin.`);

//constant variable of today weather forcast in Celsius
const celsius = kelvin - 273;
//console.log(`The temperature is ${celsius} degrees Celsius.`);

//Value of today weather forcast in Fahrenheit
let fahrenheit = celsius *(9/5) + 32;
//method to round off the Fahreinheit result
fahrenheit = Math.floor(fahrenheit);
//console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`);

//convert todays forcast to Newton
let newton = celsius *(33/100);
//Rounding off Newton Value
newton= Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);

