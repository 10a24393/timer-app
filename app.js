let timer;

document.getElementById("startButton").addEventListener("click", () => {
  const input = document.getElementById("timeInput");
  let time = parseInt(input.value, 10);
  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid number!");
    return;
  }

  clearInterval(timer);
  const countdownElement = document.getElementById("countdown");

  timer = setInterval(() => {
    countdownElement.textContent = `${time} seconds remaining`;
    if (time <= 0) {
      clearInterval(timer);
      countdownElement.textContent = "Time's up!";
      alert("Time's up!");
    }
    time--;
  }, 1000);
});
