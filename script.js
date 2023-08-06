let randomNumber = Math.floor(Math.random() * 30) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".guess").addEventListener("input", (e) => {
  if (
    e.target.value.length > e.target.max.length ||
    parseInt(e.target.value) > 30
  ) {
    if (e.target.value.length > e.target.max.length) {
      e.target.value = e.target.value.slice(0, e.target.max.length);
    } else {
      e.target.value = "30";
    }
  }
});

const showMessage = (msg) => {
  document.querySelector(".guessing").textContent = msg;
};
document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    showMessage("⛔  No number");
  } else if (guess === randomNumber) {
    showMessage("🎉 Correct!");
    document.body.style.background = "#5da341";
    document.querySelector(".number").textContent = guess;
    document.querySelector(".guess").setAttribute("disabled", "disabled");
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore__score").textContent = score;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      showMessage(guess > randomNumber ? "📈 Too high" : "📉 Too low");
      score--;
      document.querySelector(".attempt").textContent = score;
    } else {
      showMessage("💀 You lost the game");
      document.querySelector(".attempt").textContent = 0;
      document.querySelector(".guess").setAttribute("disabled", "disabled");
    }
  }
});
document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  randomNumber = Math.floor(Math.random() * 30) + 1;
  showMessage("Start guessing...");
  document.querySelector(".attempt").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = "#222";
  document.querySelector(".guess").removeAttribute("disabled");
});
