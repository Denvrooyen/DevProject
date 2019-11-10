
/* Write a function, reportingForDuty(), that has two string parameters, 
rank and lastName, and returns a string in the following 
format: ‘rank lastName reporting for duty!’
*/


//Using string concatenation:
//const reportingForDuty = (rank, lastName) => rank +' ' +  lastName +' ' + 'reporting for duty!';

//Using string Interpolation
const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`;

// Uncomment the line below when you're ready to try out your function
console.log(reportingForDuty('Private', 'Fido')); // 