let randomNum = Math.floor(Math.random() * 100 + 1);
console.log(randomNum);
let submit = document.getElementById("subt");
let prevGuess = document.querySelector(".guesses");
let result = document.querySelector(".lowOrHi");
let remainingGuess = document.querySelector(".lastResult");
let inputField = document.getElementById("guessField");

let numberOfGuesses = 10;

let playGame = true;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let userInput = parseInt(document.getElementById("guessField").value);

  if (playGame) {
    if (
      validateUserInput(userInput) &&
      numberOfGuesses >= 1 &&
      numberOfGuesses <= 10
    ) {
      numberOfGuesses--;

      checkNumber(userInput);
      showMessage(userInput);
      inputField.value = "";

      if (numberOfGuesses === 0) {
        gameOver();
      }
    }
  } else if (!playGame) {
    alert("please reset the game");
  }
});

function validateUserInput(userInput) {
  if (userInput > 100) {
    alert(`Please Enter Number Less than 100.`);
    return false;
  } else if (userInput < 1) {
    alert(`Please Enter Number Greater than 1.`);
    return false;
  } else if (isNaN(userInput)) {
    alert(`Please Enter a Valid Number`);
    return false;
  } 

  return true;
}

function checkNumber(userInput) {
  if (userInput == randomNum) {
    result.innerText = "🎉 Congrats! You guessed it right!";
    inputField.disabled = true;
    submit.disabled = true;
    resetBtn();
  } else if (userInput != randomNum) {
    result.innerText = "❌ Try again!";
  }

  remainingGuess.innerText = `${numberOfGuesses}`;
}

function showMessage(userInput) {
  prevGuess.innerHTML += ` ${userInput} `;
}

function gameOver() {
  alert("Game Over...");
  inputField.disabled = true;
  submit.disabled = true;
  result.innerHTML = "Game Over...";
  resetBtn()
}

function resetBtn() {
  let resetBtn = document.createElement("button");
  resetBtn.textContent = "Reset Game";
  resetBtn.id = "reset-game";

  let container = document.getElementById("reset-container");
  container.appendChild(resetBtn);

  resetBtn.addEventListener("click", () => {
    resetGame();
  });
}

function resetGame() {
  inputField.disabled = false;
  submit.disabled = true;
  result.innerText = "";
}
