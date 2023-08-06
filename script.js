let randomNumber = Math.floor(Math.random() * 30) + 1;
let score = 20;
let highscore = 0;

document.querySelector(".guess").addEventListener("input", (e) => {
  console.log("1");
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
//Функция для вывода сообщения ( больше число, меньше или вообще ничего )
const showMessage = (msg) => {
  document.querySelector(".guessing").textContent = msg;
};
document.querySelector(".check").addEventListener("click", () => {
  //Получаем значения из инпута при клики
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess); //Получили
  if (!guess) {
    showMessage("⛔  No number");
  } else if (guess === randomNumber) {
    showMessage("🎉 Correct!");
    document.body.style.background = "#5da341";
    document.querySelector(".number").textContent = guess;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore__score").textContent = score;
    }
    //Если угадали, то выводим. + добавляем попытки ( 20 ) в HighScore
  }
  //Когда не угадали + score наш больше нуля
  else if (guess !== randomNumber) {
    if (score > 1) {
      showMessage(guess > randomNumber ? "📈 Too high" : "📉 Too low");
      score--;
      document.querySelector(".attempt").textContent = score;
    } else {
      showMessage("💀 You lost the game");
      document.querySelector(".attempt").textContent = 0;
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
});
//Есть несколько багов. Юзер может повторно кликать на элемент
//Значение в инпуте может изменяться до миллиардов || FIXED
