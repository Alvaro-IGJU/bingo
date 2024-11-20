import Number from "./Number.js";

const numbers_div = document.getElementById("numbers");
let numbers = [];
let number_appeared = [];
let number_pending = [];
let interval = null;
let isPlaying = false;

function loadNumbers() {
  number_pending = [];
  number_appeared = [];
  numbers = [];
  numbers_div.innerHTML = "";
  for (let i = 1; i <= 90; i++) {
    number_pending.push(i);
    let number_div = document.createElement("div");
    number_div.className = "number-ball";
    number_div.classList.add("red-ball");
    number_div.innerHTML = i;
    let new_number = new Number(i, number_div, false);
    numbers.push(new_number);
    /*new_number.getNumberDiv().addEventListener("click", (e) => {
      new_number.changeState();
    });*/
    numbers_div.append(new_number.getNumberDiv());
  }
}

function getRandomNumber() {
  let indexNumber = Math.floor(Math.random() * number_pending.length);
  number_appeared.push(number_pending[indexNumber]);
  let number = number_pending[indexNumber];
  number_pending.splice(indexNumber, 1);
  findNumberByValue(number).changeState();
  return number;
}

function findNumberByValue(value) {
  return numbers.find((number) => number.getValue() === value);
}

loadNumbers();

/*let interval = setInterval((e) => {
  getRandomNumber();
  if (number_pending.length == 0) {
    clearInterval(interval);
  }
}, 1000);*/

const buttonPlay = document.getElementById("play-stop");
buttonPlay.addEventListener("click", togglePlayStop);

const buttonNext = document.getElementById("next-number");
buttonNext.addEventListener("click", getRandomNumber);

const buttonRestart = document.getElementById("restart");
buttonRestart.addEventListener("click", loadNumbers);

function togglePlayStop() {
  const button = document.getElementById("play-stop");

  if (isPlaying) {
    // Stop the interval
    clearInterval(interval);
    interval = null;
    button.textContent = "Play"; // Update button text
    console.log("Stopped!");
  } else {
    // Start the interval
    interval = setInterval(() => {
      getRandomNumber();
    }, 3000);
    button.textContent = "Stop"; // Update button text
    console.log("Started!");
  }

  // Toggle play state
  isPlaying = !isPlaying;
}
