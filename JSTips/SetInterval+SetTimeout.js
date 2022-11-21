// setInterval

// const timerIntervalID = setInterval(function () {
//   console.log("Fired!");
// }, 1000);

// setTimeout

// setTimeout(function () {
//   console.log("setTimeout Fired!");
// }, 2000);

// setInterval + setTimeout

const timerID = setInterval(function () {
  console.log("setInterval Fired!");
}, 1000);

setTimeout(function () {
  clearInterval(timerID);
}, 10000);
