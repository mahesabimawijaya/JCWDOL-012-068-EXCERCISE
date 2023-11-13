function getComputerChoice() {
  const computer = Math.floor(Math.random() * 11);
  if (computer <= 4) return "paper";
  if (computer >= 5 && computer <= 7) return "scissor";
  return "rock";
}

function getResult(player, computer) {
  if (player == computer) return "DRAW!";
  if (player == "rock") return computer == "scissor" ? "WIN" : "LOSE";
  if (player == "paper") return computer == "rock" ? "WIN" : "LOSE";
  if (player == "scissor") return computer == "paper" ? "WIN" : "LOSE";
}

// const pRock = document.querySelector(".rock");
// pRock.addEventListener("click", function () {
//   const computerChoice = getComputerChoice();
//   const playerChoice = pRock.className;
//   const result = getResult(playerChoice, computerChoice);

//   const imgComputer = document.querySelector(".question-mark");
//   imgComputer.setAttribute("src", "assets/" + computerChoice + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = result;
// });

const choice = document.querySelectorAll(".left-section img");
choice.forEach(function (cho) {
  cho.addEventListener("click", function () {
    const computerChoice = getComputerChoice();
    const playerChoice = cho.className;
    const result = getResult(playerChoice, computerChoice);

    const imgComputer = document.querySelector(".question-mark");
    imgComputer.setAttribute("src", "assets/" + computerChoice + ".png");

    var mybr = document.createElement("br");

    const info = document.querySelector(".info");
    info.innerHTML = result;

    const middleSection = document.getElementsByClassName("middle-section")[0];
    if (result == "WIN") {
      middleSection.style.backgroundColor = "gold";
      info.style.color = "white";
    } else if (result == "LOSE") {
      middleSection.style.backgroundColor = "red";
      info.style.color = "white";
    } else {
      middleSection.style.backgroundColor = "black";
      info.style.color = "white";
    }
  });
});
