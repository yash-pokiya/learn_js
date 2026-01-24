let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let tieScore = document.getElementById("tieScore");
let computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
let playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
let resetBtn = document.getElementById("resetBtn");
let cpuInput, userInput;
let pCount = 1;
let cCount = 1;
let tCount = 1;

function guess() {
  let randomGuess = Math.round(Math.random() * 2 + 1);
  if (randomGuess === 1) {
    cpuInput = "R";
    computerChoiceDisplay.innerHTML = "✊";
  } else if (randomGuess === 2) {
    cpuInput = "P";
    computerChoiceDisplay.innerHTML = "✋";
  } else {
    cpuInput = "S";
    computerChoiceDisplay.innerHTML = "✌️";
  }
  return cpuInput;
}

function gameRes(user, computer) {
  if (user !== "R" && user !== "S" && user !== "P") {
    return "Invalid Input..!";
  } else if (user === computer) {
    tieScore.innerHTML = tCount;
    tCount++;
    return;
  } else if (
    (user === "R" && computer === "S") ||
    (user === "P" && computer === "R") ||
    (user === "S" && computer === "P")
  ) {
    playerScore.innerHTML = pCount;
    pCount++;
    return;
  } else {
    computerScore.innerHTML = cCount;
    cCount++;
    return;
  }
}

console.log(cCount);

function reset(cCount, pCount, tCount) {
  if (pCount + cCount + tCount === 13) {
    alert("Only Play for 10 Times..!");
    return false;
  }else{
    return true;
  }
}
rock.addEventListener("click", () => {
  if(!reset(cCount, pCount, tCount)){
    return;
  }
  userInput = "R";
  let comp = guess();
  playerChoiceDisplay.innerHTML = "✊";
  gameRes(userInput, comp);
  return;
});

paper.addEventListener("click", () => {
  if(!reset(cCount, pCount, tCount)){
    return;
  }
  userInput = "P";
  let comp = guess();
  playerChoiceDisplay.innerHTML = "✋";
  gameRes(userInput, comp);
  return;
});
scissors.addEventListener("click", () => {
  if(!reset(cCount, pCount, tCount)){
    return;
  }
  userInput = "S";
  let comp = guess();
  playerChoiceDisplay.innerHTML = "✌️";
  gameRes(userInput, comp);
  return;
});

resetBtn.addEventListener("click", () => {
  playerChoiceDisplay.innerHTML = "?";
  computerChoiceDisplay.innerHTML = "?";
  tieScore.textContent = 0;
  computerScore.textContent = 0;
  playerScore.textContent = 0;
  pCount = 1;
  cCount = 1;
  tCount = 1;
});