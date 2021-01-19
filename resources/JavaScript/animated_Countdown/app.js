document.getElementById("app").innerHTML = `
<div class="base-timer">
    <svg class="base-timer__svg" viewBox"0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g class="base-timer__circle">
            <circle class="base-timer__path-elapsed" cx"50" cy="50" r="45" />
            <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                class="base-timer__path-remainig ${remainingPathColor}"
                d="
                M 50, 50
                m -45, 0
                a 45, 45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
                ></path>
        </g>
    </svg>
    <span id="base-timer-label" class="base-timer__label">
       ${formatTime(timeLeft)};
    </span>
    </div>
`;


function formatTimeLeft(time) 
{
    //The largest rounf interger lessthan or equal to the result of time dived by 60.
    const minutes = Math.floor(time / 60);

    //Seconds are the remainder of the time dived by 60 (modules operator)
    let seconds = time % 60;

    //If the value of seconds is less than 10, then display seconds with a leading zero.
     if (seconds < 10)
        {
            seconds = `0${seconds}`;
        }

    //The ouput in MM:SS format
    return `${minutes}:${seconds}`;
    }

    //Start with an intial value of 20 seconds
    const TIME_LIMIT = 20;

    //Initially, not itme has passed, but this will count up
    //and subtract from the TIME_LIMIT
    let timePassed = 0;
    let timeLeft = TIME_LIMIT;

    let timerInterval =null;
    
    document.getElementById("app").innerHTML =`...`;
    startTimer();

    function startTimer()
        {
            timerInterval = setInterval(() =>
            {
                //The amount of time passed increments by one
                timePassed = timePassed += 1;
                timeLeft = TIME_LIMIT - timePassed;
                
                //The time left label is updated
                document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
                setCircleDasharray();
            }, 1000);
        }
     //Warning occures at 10s
     const WARNING_THRESHOLD = 10;

     //Alert occures at 5s
     const ALERT_THRESHOLD = 5;

        const COLOR_CODES =
        {
            info: 
            {
                color: "green"
            },
            warning:
            {
                color: "orange",
                threshold: WARNING_THRESHOLD
            },
            alert:
            {
            color: "red",
            threshold: ALERT_THRESHOLD
            }
        };

        let remainingPathColor = COLOR_CODES.info.color;

        //Divides time left by defined time limit
        function calculateTimeFraction ()
    {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1- rawTimeFraction);
    }

    //Update the dasharry value as time passes, starting with 283
    function setCircleDasharray()
    {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY).toFixed(0)} 283`;
            document.getElementById("base-timer-path-remaining").setAttribute("stroke-dasharry", circleDasharray);
    }

   function setRemainingPathColor(timeLeft)
{
    const { alert, warning, info } = COLOR_CODES;

    //If the remaining time is less than or equal to 5, remove the "warning" class and apply the "alert" class
    if (timeLeft <= alert.threshold)
    {
        document.getElementById("base-timer-path-remaining").classList.remove(warning.color);
        document.getElementById("base-timer-path-remaining").classList.add(alert.color);
    }
    else if (timeLeft <= warning.threshold)
    {
        document.getElementById("base-timer-path-remaining").classList.remove(info.color);
        document.getElementById("base-timer-path-remaining").classList.add(warning.color);
    }
}

    