const getSleepHours = day => {
  switch (day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 8;
      break;
    case 'Wednesday':
      return 8;
      break;
    case 'Thursday':
      return 9;
      break;
    case 'Friday':
      return 9;
      break;
    case 'Saturday':
      return 9;
      break;
    case 'Sunday':
      return 8;
      break;
    default:
      return "Error!";
  }
};

//Test function 
//console.log(getSleepHours('Sunday'));

//Worked out Actual Hours Slept for the week
const getActualSleepHours = () => {
  let sleepHours = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') +
    getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
  return sleepHours;
};
//Test getActual Function
//console.log(getActualSleepHours());

//Function to work out Ideal hours to sleep
const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
};
// Test the ideal hours function
//console.log(getIdealSleepHours());

//Calculate sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('You go the perfect amount of Sleep');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed this week.');
  } else if (actualSleepHours - idealSleepHours) {
    console.log('You should get more rest because you slept ' + (idealSleepHours - actualSleepHours) + ' hours less than you need this week.');
  } else {
    console.log('Error! Something went wrong!');
  }
};

calculateSleepDebt();
