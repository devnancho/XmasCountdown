//6. Then we need to fill the units on the page

let daysCountdown = document.getElementById('days');
let hoursCountdown = document.getElementById('hours');
let minsCountdown = document.getElementById('mins');
let secsCountdown = document.getElementById('secs');


//1 Setting Ney years date

let xmasDay = "25 Dec 2023";

//2 Create a function for the countdown. Will need two variables to calculate how many days left to the new year

function countdown() {
    let currentDate = new Date();
    let christmasDate = new Date(xmasDay);

    //5 As when calling the fuction the time is given in miliseconds, time must be converted to the respectable unit.

    let secondsTotal = (christmasDate - currentDate) / 1000;


    let days = Math.floor(secondsTotal / 3600 / 24);
    let hours = Math.floor(secondsTotal / 3600 % 24);
    let minutes = Math.floor(secondsTotal / 60 % 60);
    let seconds = Math.floor(secondsTotal % 60)

    //7. To change the units on the page... innerHTM
    daysCountdown.innerHTML = days;
    hoursCountdown.innerHTML = hours;
    minsCountdown.innerHTML = minutes;
    secsCountdown.innerHTML = seconds;
}
//3 To initially call the fuction 
countdown();

//4 Setting an interval to call the countdown every second. Tested on console to check if working

setInterval(countdown, 1000)



