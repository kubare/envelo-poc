let tens = 0;
let OutputTens = document.getElementById("tens");
let buttonStart = document.getElementById("btn");
let buttonStop = document.getElementById("btn-submit");
let buttonReset = document.getElementById("btn-reset");
let Interval;

buttonStart.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 1000); 
});

buttonStop.addEventListener("click", () => {
  clearInterval(Interval);
});

buttonReset.addEventListener("click", () => {
    clearInterval(Interval);
    tens = "0";
    OutputTens.innerHTML = tens;

    Interval = setInterval(startTimer, 1000); 
})

function startTimer() {
  tens++;
  if (tens <= 9) {
    OutputTens.innerHTML = tens;
  }

  if (tens > 9) {
    OutputTens.innerHTML = tens;
  }
}
