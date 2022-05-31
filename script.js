const human = document.querySelectorAll(".human");
const stay = document.querySelector("#stay");
const go = document.querySelector("#go");
const redCircle = document.querySelector("#redCircle");
const yellowCircle = document.querySelector("#yellowCircle");
const greenCircle = document.querySelector("#greenCircle");
const timerSquare = document.querySelector("#timerSquare");
var timeRed = 10;
const timeYellow = 3;
var timeGreen = 8;
const fullTime = timeRed+timeYellow+timeGreen;
var second = 0;
var isRed=true;

setInterval(() => {activity();},1000);

function toggleGreen () {
    isRed=!isRed;
    human.forEach((h) => {h.classList.toggle("visible");});
    timerSquare.classList.toggle("green");
};

function activity () {
    if(isRed) {
    timerSquare.textContent=(timeRed+timeYellow-second);
    }else{
    timerSquare.textContent=(fullTime-second);
    }
    switch (second++) {
        case timeRed:
            yellowCircle.classList.toggle("active");
            break;
        case timeRed+timeYellow:
            yellowCircle.classList.toggle("active");
            greenCircle.classList.toggle("active");
            toggleGreen();

        case 0:
            redCircle.classList.toggle("active");
            break;

        case fullTime:
            greenCircle.classList.toggle("active");
            toggleGreen();
            second=0;
            break;
    }
}