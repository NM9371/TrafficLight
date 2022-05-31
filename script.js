//window.addEventListener('DOMContentLoaded', async () => {

const human = document.querySelectorAll(".human");
const stay = document.querySelector("#stay");
const go = document.querySelector("#go");
const redCircle = document.querySelector("#redCircle");
const yellowCircle = document.querySelector("#yellowCircle");
const greenCircle = document.querySelector("#greenCircle");
const timerSquare = document.querySelector("#timerSquare");
var timeRed = 15;
const timeYellow = 3;
var timeGreen = 15;
const fullTime = timeRed+timeYellow+timeGreen;
var second = 0;

setInterval(() => {activity();},1000);
function changeHuman () {
    human.forEach((h) => {h.classList.toggle("visible");});
}

function activity () {
    second=second+1;
    if (second %2 == 0) {
        greenCircle.classList.toggle("active");
        changeHuman();
    } else {
        redCircle.classList.toggle("active");
    }
}