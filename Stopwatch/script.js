const counterElement = document.getElementById("counter");

let counter = 0;
let timerID;

// Start

const btnStart = document.getElementById("start");

btnStart.onclick = function () {
  timerID = setInterval(function () {
    counter++;
    counterElement.innerText = counter;
  }, 1000);
};

// Pause

const btnPause = document.getElementById("pause");

btnPause.onclick = function () {
  clearInterval(timerID);
};

// Reset

const btnReset = document.getElementById("reset");

btnReset.onclick = function () {
  counter = 0;
  counterElement.innerText = counter;
};
