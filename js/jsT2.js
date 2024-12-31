'use strict';
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////project # 1/////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// project1  VAR section and define
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message){
   document.querySelector('.tag1').textContent = message;
}
// check button event
document.querySelector('#check').addEventListener('click',
   function (){
      const x = Number(document.querySelector('#inin').value);
      console.log(x, typeof x);

      // when there is no input
      if(!x){
         /* document.querySelector('.tag1').textContent = `No Number!!`; */
         displayMessage(`No Number!!`);

      // when players wins
      }else if(x === secretNumber){
         /* document.querySelector('.tag1').textContent = `🎉Correct Number!!!!🎉`; */
         displayMessage(`🎉Correct Number!!!🎉`);
         document.querySelector('.guessp').textContent = secretNumber;
         // style layout wins
         document.querySelector('#box1').style.backgroundColor = '#60b347';
         document.querySelector('.guessp').style.width = '64px';

         // save highScore with this condition
         if(score > highScore){
            highScore = score;
            document.querySelector('.Highscore').textContent = highScore;
         }
         // when guess is wrong
         // in this part we refactoring code to improve it and eliminate duplicate code
      }else if(x !== secretNumber){
            if(score > 1) {
               /* document.querySelector('.tag1').textContent = x > secretNumber ?
                              '📈 Too High!!!!' : '📉 Too Low!!!!'; */
               displayMessage( x > secretNumber ? '📈 Too High!!!!' : '📉 Too Low!!!!');
               score--;
               document.querySelector('.score').textContent = score;
            }else {
              /*  document.querySelector('.tag1').textContent = '😟 You Lose'; */
              displayMessage('😟 You Lose');
               document.querySelector('.score').textContent =
             0;
            }
      }
      /*
      // when guess is  too high
      else if(x > secretNumber){
         if(score > 1){
            document.querySelector('.tag1').textContent =
             `📈 Too High!!!!`;
            score--;
            document.querySelector('.score').textContent =
             score;
         }else {
            document.querySelector('.tag1').textContent =
             `😟 You Lose`;
             document.querySelector('.score').textContent =
             0;
         }
      // when guess is  too low
      }else if(x < secretNumber){
         if(score > 1){
            document.querySelector('.tag1').textContent =
             `📉 Too Low!!!!`;
            score--;
            document.querySelector('.score').textContent =
             score;
         }else {
            document.querySelector('.tag1').textContent =
             `😟 You Lose`;
             document.querySelector('.score').textContent =
             0;
         }
      } */
   }
);
// again button event
document.querySelector('.again').addEventListener('click',
   function(){
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20) + 1;

     /*  document.querySelector('.tag1').textContent =
             `Start guessing....`; */
      displayMessage(`Start guessing....`);

      document.querySelector('.score').textContent = score;
      document.querySelector('.guessp').textContent = '?';
      document.querySelector('.guess').value = '';

      document.querySelector('#box1').style.backgroundColor = '#037fa9';
      document.querySelector('.guessp').style.width = '32px';
});
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////project # 2/////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// project2  VAR section and define
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const closModal = function(){
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
}
const openModal = function(){
   console.log(`Button clicked`);
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
}

for(let i = 0; i < btnOpenModal.length; i++)
      btnOpenModal[i].addEventListener('click',openModal);

btnCloseModal.addEventListener('click',closModal);

overlay.addEventListener('click',closModal);

document.addEventListener('keydown', function(e) {
   /* console.log(e.key,e.keyCode); */

   if(e.key === 'Escape' && !modal.classList.contains('hidden')){
         closModal();
   }
});
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////project # 3/////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// project3  VAR section and define
// selecting elements
const P0 = document.querySelector('.player0');
const P1 = document.querySelector('.player1');
const score1el = document.getElementById('score0');
const score2el = document.getElementById('score1');
const current1El = document.getElementById('current0');
const current2El = document.getElementById('current1');
const diceEl = document.querySelector('.dicegame');

const btnNew = document.querySelector('.newGame');
const btnRoll = document.querySelector('.dice-roll');
const btnRoll2 = document.querySelector('.dice-roll2');
const btnHold = document.querySelector('.hold-roll');

let scores, currentScore, activePlayer, playing;

// starting condition
const init = function(){

   scores = [0, 0];
   currentScore = 0;
   activePlayer = 0;
   playing = true;

   score1el.textContent = 0;
   score2el.textContent = 0;
   current1El.textContent = 0;
   current2El.textContent = 0;
   diceEl.classList.add('hidden2');
   P0.classList.remove(`player__winner`);
   P1.classList.remove(`player__winner`);
   P0.classList.add(`p_active`);
   P1.classList.remove(`p_active`);
}
init();

const switchPlayer = function(){
            document.getElementById(`current${activePlayer}`)
               .textContent = 0;
            currentScore = 0;
            activePlayer = activePlayer === 0 ? 1 : 0;
            P0.classList.toggle('p_active');// toggle add or remove class if it was there or not
            P1.classList.toggle('p_active');
}

// Rolling dice functionality section
btnRoll.addEventListener('click', function(){
   if(playing){
// 1. generating a random dice roll
         const dice = Math.trunc(Math.random() * 6) + 1;

         if(dice === 1){
            diceEl.textContent = '1';
         }else if(dice === 2){
            diceEl.textContent = '2';
         }else if(dice === 3){
            diceEl.textContent = '3';
         }else if(dice === 4){
            diceEl.textContent = '4';
         }else if(dice === 5){
            diceEl.textContent = '5';
         }else if(dice === 6){
            diceEl.textContent = '6';
         }
// 2. display dice
         diceEl.classList.remove('hidden2');
// 3. check for rolled 1
         if(dice !== 1){
            // add dice to current score
            currentScore += dice;
            document.getElementById(`current${activePlayer}`)
               .textContent = currentScore;
         }else {
            // Switch to next player
            switchPlayer();
         }
      }
});

// hold score functionality section
btnHold.addEventListener('click', function(){
   if(playing) {
// 1. Add current score to active player score
 scores[activePlayer] += currentScore;
 //scores[1] = scores[1] + currentScore;
 document.getElementById(`score${activePlayer}`).textContent =
      scores[activePlayer];

// 2. Check if players score is >=100
   if(scores[activePlayer] >= 100){
      //     finish the game
      playing = false;
      diceEl.classList.add('hidden2');

      document.querySelector(`.player${activePlayer}`).classList.add(`player__winner`);
      document.querySelector(`.player${activePlayer}`).classList.remove(`p_active`);
   }else {
   // switch to the next player
   switchPlayer();
   }
}
});

btnNew.addEventListener('click', init);
// press R to roll dice
document.addEventListener('keydown', function(e) {
   /* console.log(e.key,e.keyCode); */
   console.log(e);

    if(e.key === 'r'){
      if(playing){
         // 1. generating a random dice roll
                  const dice = Math.trunc(Math.random() * 6) + 1;
         
                  if(dice === 1){
                     diceEl.textContent = '1';
                  }else if(dice === 2){
                     diceEl.textContent = '2';
                  }else if(dice === 3){
                     diceEl.textContent = '3';
                  }else if(dice === 4){
                     diceEl.textContent = '4';
                  }else if(dice === 5){
                     diceEl.textContent = '5';
                  }else if(dice === 6){
                     diceEl.textContent = '6';
                  }
         // 2. display dice
                  diceEl.classList.remove('hidden2');
         // 3. check for rolled 1
                  if(dice !== 1){
                     // add dice to current score
                     currentScore += dice;
                     document.getElementById(`current${activePlayer}`)
                        .textContent = currentScore;
                  }else {
                     // Switch to next player
                     switchPlayer();
                  }
               }
   }
});
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////   ToLIST1  ////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedCounter = document.getElementById("completed-counter");
const uncompletedCounter = document.getElementById("uncompleted-counter");

function updateCounters() {
   const completedTasks = document.querySelectorAll(".completed").length;
   const uncompletedTasks =
     document.querySelectorAll("li:not(.completed)").length;
 
   completedCounter.textContent = completedTasks;
   uncompletedCounter.textContent = uncompletedTasks;
 };

 function addTask() {
   const task = inputBox.value.trim();
   if (!task) {
     alert("Please write down a task");
     return;
   }

   const li = document.createElement("li");
   li.innerHTML = `
     <label>
       <input type="checkbox">
       <span>${task}</span>
     </label>
     <button class="edit-btn">Edit</button>
     <button class="delete-btn">Delete</button>
     `;

   listContainer.appendChild(li);
   inputBox.value = "";

   const taskSpan = li.querySelector("span");
   const deleteBtn = li.querySelector(".delete-btn");
   const checkbox = li.querySelector("input");
   const editBtn = li.querySelector(".edit-btn");

   checkbox.addEventListener("click", function () {
      li.classList.toggle("completed", checkbox.checked);
   
      updateCounters();
    });

    editBtn.addEventListener("click", function () {
      const update = prompt("Edit task:", taskSpan.textContent);
      if (update !== null) {
        taskSpan.textContent = update;
        li.classList.remove("completed");
   
        checkbox.checked = false;
        updateCounters();
      }
    });

    deleteBtn.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this task?")) {
        li.remove();
        updateCounters();
      }
    });
    updateCounters();
  };

    // add task when pressing Enter key
inputBox.addEventListener("keyup", function (event) {
   if (event.key === "Enter") {
     addTask();
   }
});


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////  Pom-o-d-o-r-o  ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
      const timerDisplay = document.getElementById("timer-display");
      const inputSeconds = document.getElementById("input-seconds");
      const startButton = document.getElementById("start-button");
      let countdownInterval;


      // function to formant seconds into MM:SS format
      function formatTime(seconds) {
         const minutes = Math.floor(seconds / 60);
         const secs= seconds % 60;
         return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
      }

      // function to start the countdown
      function startCountdown() {
         clearInterval(countdownInterval);
         let remainingTime = parseInt(inputSeconds.value);

            if (isNaN(remainingTime) || remainingTime <= 0) {
               alert("Please enter a positive number of seconds.");
               return;
            }

         timerDisplay.textContent = formatTime(remainingTime);

         countdownInterval = setInterval(() => {
         remainingTime--;

            if (remainingTime >= 0) {
            timerDisplay.textContent = formatTime(remainingTime);
            } else {
            clearInterval(countdownInterval);
            timerDisplay.textContent = "00:00";
            alert("Time's up!");
            inputSeconds.value = ""; // Clear the input field after timer completes
            }
         }, 1000);
      }
      startButton.addEventListener("click", startCountdown);
});
const resetbtimer = document.getElementById("restbtimer");

resetbtimer.addEventListener("click", function(){
   const timerDisplay = document.getElementById("timer-display");
   const inputSeconds = document.getElementById("input-seconds");
   let countdownInterval;

   
   
});


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////    ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////