let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;

function rollDice() {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  const diceValueElement = document.querySelector(".dice-value");
  diceValueElement.textContent = diceValue;
  const diceElement = document.querySelector(".dice");
  const diceImageUrl = `url('dice-${diceValue}.PNG')`;
  diceElement.style.backgroundImage = diceImageUrl;
  diceElement.classList.add("dice-rolling");
  setTimeout(() => {
    diceElement.classList.remove("dice-rolling");

    if (player1Score >= 100 || player2Score >= 100) {
      return;
    }
    if (currentPlayer === 1) {
      player1Score += diceValue;
      document.querySelector(".player-1 .score").textContent = player1Score;
      if (player1Score >= 100) {
        document.querySelector(".player-1 .tokens").textContent =
          "PLAYER 1 IS THE WINNER!";
        return;
      }
    } else {
      player2Score += diceValue;
      document.querySelector(".player-2 .score").textContent = player2Score;

      if (player2Score >= 100) {
        document.querySelector(".player-2 .tokens").textContent =
          "PLAYER 2 IS THE WINNER!";
        return;
      }
    }

    if (diceValue === 1) {
      currentPlayer = currentPlayer === 1 ? 2 : 1;
    }
  }, 1000);
}

document.querySelectorAll(".tokens").forEach((token) => {
  token.addEventListener("mouseenter", function () {
    this.style.transform = "scale(1.2)";
    token.style.color = "red";
    token.style.margin = "10px";
    token.style.transition = "1s";
  });

  token.addEventListener("mouseleave", function () {
    this.style.transform = "scale(1)";
    token.style.color = "blue";
    token.style.margin = "0px";
    token.style.transition = "1s";
  });
});

const UI = {
  resetGame: function () {
    player1Score = 0;
    player2Score = 0;
    document
      .querySelectorAll(".score")
      .forEach((score) => (score.textContent = "0"));
    document.querySelector(".dice-value").textContent = "";
    document
      .querySelectorAll(".player-area .tokens")
      .forEach((token) => (token.textContent = ""));
  },
};
