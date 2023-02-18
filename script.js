/*
"use strict";

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";
    document.querySelector(".hidden-number-mark").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 To high";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 To low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".hidden-number-mark").textContent = "?";
  document.querySelector(".guess").value = "";
});
*/

"use strict";

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

function PrintMessage(message) {
  document.querySelector(".message").textContent = message;
}

function PrintScore(score) {
  document.querySelector(".score").textContent = score;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    PrintMessage("⛔ No Number");
  } else if (guess === secretNumber) {
    PrintMessage("🎉 Correct Number");
    document.querySelector(".hidden-number-mark").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (guess > secretNumber) {
      if (score > 1) {
        PrintMessage("📈 To high");
        score--;
        PrintScore(score);
      } else {
        PrintMessage("💥 You lost the game");
        PrintScore(0);
      }
    } else {
      if (score > 1) {
        PrintMessage("📉 To low");
        score--;
        PrintScore(score);
      } else {
        PrintMessage("💥 You lost the game");
        PrintScore(0);
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20 + 1);
  score = 20;
  PrintScore(score);
  PrintMessage("Start Guessing...");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".hidden-number-mark").textContent = "?";
  document.querySelector(".guess").value = "";
});
