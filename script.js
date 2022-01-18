"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number! 🎉";
// document.querySelector(".center-line-btn").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".box").value = 33;
// console.log(document.querySelector(".box").value);

let correctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".again-btn").addEventListener("click", function () {
  score = 20;
  correctNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector("body").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  document.querySelector(".center-line-btn").textContent = "?";
  document.querySelector(".center-line-btn").style.width = "10rem";
  document.querySelector(".box").value = "";
  document.querySelector(".message").textContent = "🤔 Start Guessing! ";
});

document.querySelector(".check-btn").addEventListener("click", function () {
  const guess = Number(document.querySelector(".box").value);
  if (!guess) {
    //No Input
    document.querySelector(".message").textContent = "No number! 🚫";
  } else if (guess == correctNumber) {
    //Correct Guess
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".center-line-btn").textContent = correctNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".center-line-btn").style.width = "15rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > correctNumber) {
    //Too High
    if (score > 1) {
      document.querySelector(".message").textContent = "Too High! 📈";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (score == 1) {
      document.querySelector(".message").textContent = "You lost the game! 💔";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < correctNumber) {
    //Too Low
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low! 📉";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (score == 1) {
      document.querySelector(".message").textContent = "You lost the game! 💔";
      document.querySelector(".score").textContent = 0;
    }
  }
});
