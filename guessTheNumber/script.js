let inputNum = document.getElementById("guessField");
let submitBtn = document.getElementById("subt");
let preGuesses = document.querySelector(".guesses");
let reaming = document.querySelector(".lastResult");
let numOfTry = 10;

let random = Math.round(Math.random() * 9 + 1);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (numOfTry > 0) {
    if (inputNum.value === "") {
      alert("First Enter Value...");
      return;
    } else {
      preGuesses.append(inputNum.value + ",");
      reaming.textContent--;
      numOfTry--;
    }
  } else if (numOfTry <= 0) {
    alert("Your total try completed but unfortunatily you lost😣");
    return;
  }
  check(inputNum.value, random);
});
function check(guessNum, random) {
  if (guessNum == random) {
    alert("you win the challange...!");
    preGuesses.remove();
    return;
  }
}
