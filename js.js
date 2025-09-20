const answerDiv = document.querySelector(".answer");
const winDiv = document.querySelector(".win");

const choices = ["rock", "paper", "scissors"];

function playGame(userChoice) {
  const cc = choices[Math.floor(Math.random() * 3)];

  let result = "";
  if (userChoice === cc) {
    result = "Draw!";
  } else if (
    (userChoice === "rock" && cc === "scissors") ||
    (userChoice === "paper" && cc === "rock") ||
    (userChoice === "scissors" && cc === "paper")
  ) {
    result = "You win!";
  } else {
    result = "You lose!";
  }

  answerDiv.textContent = "Computer chose: " + cc;
  winDiv.textContent = result;
}

document
  .querySelector(".rock")
  .addEventListener("click", () => playGame("rock"));
document
  .querySelector(".paper")
  .addEventListener("click", () => playGame("paper"));
document
  .querySelector(".siz")
  .addEventListener("click", () => playGame("scissors"));
