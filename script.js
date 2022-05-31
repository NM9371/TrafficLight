const human = document.querySelectorAll(".human");
const stay = document.querySelector("#stay");
const go = document.querySelector("#go");
const circle = document.querySelectorAll(".circle");
const redCircle = document.querySelector("#redCircle");
const yellowCircle = document.querySelector("#yellowCircle");
const greenCircle = document.querySelector("#greenCircle");
const timerSquare = document.querySelector("#timerSquare");
const redInput = document.querySelector("#redInput");
const greenInput = document.querySelector("#greenInput");
const settingsButton = document.querySelector("#settingsButton");
var timeRed = 10;
const timeYellow = 3;
var timeGreen = 8;
var fullTime = timeRed+timeYellow+timeGreen;
var second = 0;
var isRed=true;
var intervalID = 0;

//объект для проверки того что переменная находится между заданными числами 
//(или является одним из них)
Number.prototype.between = function(a, b) {
    var min = Math.min.apply(Math, [a, b]),
        max = Math.max.apply(Math, [a, b]);
    return this >= min && this <= max;
};

settingsButton.addEventListener('click', () => {
    if ((+redInput.value).between(4,999) && (+greenInput.value).between(4,999)) {
        timeRed=+redInput.value;
        timeGreen=+greenInput.value;
        fullTime = timeRed+timeYellow+timeGreen;
        second=0;
        circle.forEach((c) => {c.classList.remove("active");});

        if (!isRed) {
            toggleGreen();
        }
        
        clearInterval(intervalID);
        intervalID = setInterval(() => {activity();},1000);
    } else {
        alert('Число должно быть больше 3 и меньше 1000');
    }
});

function toggleGreen () {
    isRed=!isRed;
    human.forEach((h) => {h.classList.toggle("visible");});
    timerSquare.classList.toggle("green");
}

function activity () {
    switch (second++) {
        case timeRed: //включение желтого после красного
            yellowCircle.classList.toggle("active");
            break;

        case timeRed+timeYellow: //включение зеленого
            yellowCircle.classList.toggle("active");
            greenCircle.classList.toggle("active");
            toggleGreen();
        case 0: //включение/выключение красного
            redCircle.classList.toggle("active");
            break;

        case fullTime: //выключение зеленого
            greenCircle.classList.toggle("active");
            toggleGreen();
            second=0;
        case fullTime-3: //мигание зеленого
            greenCircle.classList.toggle("blink");
            go.classList.toggle("blink");
            break;
    }

    if(isRed) {
        timerSquare.textContent=(timeRed+timeYellow-second);
    }else{
        timerSquare.textContent=(fullTime-second);
    }
}

intervalID = setInterval(() => {activity();},1000);