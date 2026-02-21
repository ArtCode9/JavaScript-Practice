(function () {

   const guessInput = document.getElementById("guessInput");
   const guessBtn = document.getElementById("guessBtn");
   const restartBtn = document.getElementById("restartBtn");
   const message = document.getElementById("message");
   const attemptsEl = document.getElementById("attempts");
   const difficultySelect = document.getElementById("difficulty");

   let secretNumber;
   let attempts;
   let maxRange;

   function initGame() {
      maxRange = Number(difficultySelect.value);
      secretNumber = Math.floor(Math.random() * maxRange) + 1;
      attempts = 0;
      attemptsEl.textContent = attempts;
      message.textContent = "";
      guessInput.value = "";
      guessInput.disabled = false;
      guessBtn.disabled = false;
   }

   function handleGuess() {
      const guess = Number(guessInput.value);

      if(!guess || guess < 1 || guess > maxRange) {
         message.textContent = `Enter a number between 1 and ${maxRange}`;
         message.style.color = "orange";
         return;
      }

      attempts++;
      attemptsEl.textContent = attempts;

      if(guess === secretNumber) {
         message.textContent = `🎉 Correct! Number was ${secretNumber}`;
         message.style.color = "lime";
         endGame();
      } else if (guess > secretNumber) {
         message.textContent = "Too High 👆";
         message.style.color = "red";
      } else {
         message.textContent = "Too Low 👇";
         message.style.color = "red";
      }
      
      guessInput.value = "";
   }

   function endGame() {
      guessInput.disabled = true;
      guessBtn.disabled = true;
   }

   guessBtn.addEventListener('click', handleGuess);

   guessInput.addEventListener("keydown", (e) => {
      if(e.key === "Enter") handleGuess(); 
   });

   restartBtn.addEventListener('click', initGame);

   difficultySelect.addEventListener('change', initGame);

   initGame();

})();