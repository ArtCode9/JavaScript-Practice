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
/////////////////////////////////  icon slider    ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);




/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////     box 6       ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;
let particles = [];

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
class Particle {
      constructor(angle, radius, speed, color){
         this.angle = angle;
         this.radius = radius;
         this.speed = speed;
         this.color = color;
      }
      update() {
         this.angle += this.speed;
         const x = centerX + this.radius * Math.cos(this.angle);
         const y = centerY + this.radius * Math.sin(this.angle);
         ctx.beginPath();
         ctx.arc(x, y, 6, 0, Math.PI * 3);
         ctx.fillStyle = this.color;
         ctx.fill();
         ctx.closePath();
      }
}
function initParticles(count){
         particles = [];
         for(let i = 0; i < count; i++){
            const angle = Math.random() * Math.PI * 6;
            const radius = Math.random() * 700 + 200;
            const speed = Math.random() * 0.001 + 0.001;
            const color = `hsl(${Math.random() * 360}, 70%, 70%)`;
            particles.push(new Particle(angle, radius, speed, color));
         }
}
function animate() {
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   particles.forEach((particle) => particle.update());
   requestAnimationFrame(animate);
}
window.addEventListener('resize', () =>
{
   canvas.width = innerWidth;
   canvas.height = innerHeight;
   initParticles(1600);
});
initParticles(1600);
animate();

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////     box 7       ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// sx1

const button = document.querySelector('.neon-button');
button.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
            ripple.classList.add('ripple');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);

         ripple.style.width = ripple.style.height = `${size}px`;
         ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
         ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

         button.appendChild(ripple);

   ripple.addEventListener('animationend', () => ripple.remove());
});

// sx2


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////     box 8       ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////     box 9       ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

      let slideIndex = 1;
      showSlides(slideIndex);

      function plusSlides(n) {
         showSlides(slideIndex += n);
      }

      function currentSlide(n) {
         showSlides(slideIndex = n);
      }

      function showSlides(n) {

         let i ;
         let slides = document.getElementsByClassName("mySlides");
         let dots = document.getElementsByClassName("dot");

         if(n > slides.length) {slideIndex = 1};
         if(n < 1) {slideIndex = slides.length};

         for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
            
         };

         for(i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace(" active", "");
         };
         slides[slideIndex-1].style.display = "block";
         dots[slideIndex-1].className += " active"; 

      }

// Automatic Slideshow
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////     box 10       ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


document.getElementById('openPopup').onclick = function() {
   document.getElementById('overlay_x').style.display = 'block';
}
document.getElementById('closePopup').onclick = function() {
   document.getElementById('overlay_x').style.display = 'none';
}
window.onclick = function(event) {
   if (event.target == document.getElementById('overlay')) {
       document.getElementById('overlay_x').style.display = 'none';
   }
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////     box 11      ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
// make drum kit 

window.addEventListener('keydown', function(e) {

   // console.log(e.keyCode);   <<<<< with this i can get keycode from console
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
   if (!audio) return; // stop the function from running all together
   audio.currentTime = 0;   // rewind to the start
   audio.play();
   key.classList.add('playing');

});

function removeTransition (e) {
   if(e.propertyName !== 'transform') return; // skip it it's not a transform
   console.log(e.propertyName);
   this.classList.remove('playing');
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////     box 12      ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

// Main app Controller

function initializeEnhancedApp() {
   // state

   let tasks = loadTasksFromStorage();
   let filter = 'all';
   let editingTaskId = null;

   // DOM elements 
   const taskForm = document.getElementById('task-form');
   const taskInput = document.getElementById('task-input');
   const dueDateInput = document.getElementById('due-date');
   const priorityInput = document.getElementById('priority');
   const taskList = document.getElementById('task-list');
   const filterButtons = {
      all: document.getElementById('all'),
      active: document.getElementById('active'),
      completed: document.getElementById('completed')
  };
  const counters = {
      total: document.getElementById('total-count'),
      active: document.getElementById('active-count'),
      completed: document.getElementById('completed-count')
  };

  // 1. local storage Persistence
  function loadTasksFromStorage() {
      const savedTasks = localStorage.getItem('tasks');
      return savedTasks ? JSON.parse(savedTasks) : [];
  };

  function saveTasksToStorage() {
   localStorage.setItem('tasks', JSON.stringify(tasks));
   updateCounters();
}

// 2. Enhanced Task Rendering with Animations
function renderTasks(tasksToRender) {
   taskList.innerHTML = '';
   
   tasksToRender.forEach(task => {
       const li = document.createElement('li');
       li.className = `priority-${task.priority} ${task.completed ? 'completed' : ''}`;
       
       if (editingTaskId === task.id) {
           li.innerHTML = `
               <input type="text" class="edit-input" value="${task.text}">
               <div class="task-actions">
                   <button class="save">Save</button>
                   <button class="cancel">Cancel</button>
               </div>
           `;
           
           const saveHandler = () => {
               const newText = li.querySelector('.edit-input').value.trim();
               if (newText) {
                   updateTask(task.id, { text: newText });
               }
               editingTaskId = null;
               renderTasks(filterTasks());
           };
           
           const cancelHandler = () => {
               editingTaskId = null;
               renderTasks(filterTasks());
           };
           
           li.querySelector('.save').addEventListener('click', saveHandler);
           li.querySelector('.cancel').addEventListener('click', cancelHandler);
           li.querySelector('.edit-input').focus();
       } else {
           const dueDateText = task.dueDate ? `Due: ${new Date(task.dueDate).toLocaleDateString()}` : '';
           
           li.innerHTML = `
               <div class="task-content">
                   <span>${task.text}</span>
                   <div class="task-meta">
                       ${dueDateText} | Priority: ${task.priority}
                   </div>
               </div>
               <div class="task-actions">
                   <button class="toggle">${task.completed ? 'Undo' : 'Complete'}</button>
                   <button class="edit">Edit</button>
                   <button class="delete">Delete</button>
               </div>
           `;
           
           // Event handlers using different function types
           li.querySelector('.delete').addEventListener('click', () => {
               animateRemoval(li, () => deleteTask(task.id));
           });
           
           li.querySelector('.toggle').addEventListener('click', () => {
               toggleTask(task.id);
           });
           
           li.querySelector('.edit').addEventListener('click', () => {
               editingTaskId = task.id;
               renderTasks(filterTasks());
           });
         }
            
         taskList.appendChild(li);
     });
 }
 
 // 3. Animation Functions
 function animateRemoval(element, callback) {
     element.classList.add('fade-leave-active');
     setTimeout(() => {
         callback();
     }, 500);
 }
 
 // 4. Task Operations with Enhanced Features
 function createTask(text, dueDate, priority) {
     return {
         id: Date.now().toString(),
         text,
         dueDate,
         priority,
         completed: false,
         createdAt: new Date().toISOString()
     };
 }
 
 function addTask(text, dueDate, priority) {
     if (!text.trim()) return false;
     
     const newTask = createTask(text, dueDate, priority);
     tasks.push(newTask);
     saveTasksToStorage();
     renderTasks(filterTasks());
     taskInput.value = '';
     dueDateInput.value = '';
     return true;
 }
 
 function deleteTask(id) {
     tasks = tasks.filter(task => task.id !== id);
     saveTasksToStorage();
     renderTasks(filterTasks());
 }
 
 function toggleTask(id) {
     tasks = tasks.map(task => 
         task.id === id ? {...task, completed: !task.completed} : task
     );
     saveTasksToStorage();
     renderTasks(filterTasks());
 }
 
 // 5. Task Editing
 function updateTask(id, updates) {
     tasks = tasks.map(task => 
         task.id === id ? {...task, ...updates} : task
     );
     saveTasksToStorage();
 }
 
 // 6. Filtering and Counting
 function filterTasks() {
     switch(filter) {
         case 'active':
             return tasks.filter(task => !task.completed);
         case 'completed':
             return tasks.filter(task => task.completed);
         default:
             return [...tasks];
     }
 }
 
 function updateCounters() {
     const total = tasks.length;
     const completed = tasks.filter(task => task.completed).length;
     const active = total - completed;
     
     counters.total.textContent = total;
     counters.active.textContent = active;
     counters.completed.textContent = completed;
 }
 
 // Event Listeners
 taskForm.addEventListener('submit', e => {
     e.preventDefault();
     addTask(taskInput.value, dueDateInput.value, priorityInput.value);
 });
 
 Object.entries(filterButtons).forEach(([key, button]) => {
     button.addEventListener('click', () => {
         filter = key;
         renderTasks(filterTasks());
         
         // Update active button
         Object.values(filterButtons).forEach(btn => 
             btn.style.fontWeight = 'normal'
         );
         button.style.fontWeight = 'bold';
     });
 });
 
 // Initialize
 renderTasks(filterTasks());
 updateCounters();
 filterButtons.all.style.fontWeight = 'bold';
}

// Start the enhanced app
initializeEnhancedApp();

/* 
Key Feature Implementations
1. Local Storage Persistence
Added loadTasksFromStorage() and saveTasksToStorage() functions

Integrated with all task operations (add, delete, toggle, update)

Uses localStorage to persist tasks between page reloads

2. Task Editing
Added edit mode with save/cancel buttons

Implemented updateTask() function

Added editing state management (editingTaskId)

3. Due Dates and Priorities
Added form fields for due date and priority

Enhanced task creation with these properties

Added visual priority indicators (colored borders)

Display due dates in task metadata

4. Task Counter
Created updateCounters() function

Shows total, active, and completed counts

Updates after every task operation

5. Animations
Added hover effects for tasks

Implemented fade-out animation when deleting tasks

Used CSS transitions for smooth visual effects

Advanced Function Concepts Used
Closures: State management within initializeEnhancedApp()

Higher-Order Functions: filterTasks(), animateRemoval()

Arrow Functions: Event handlers for concise syntax

Async Operations: Potential for future API integration

Recursion: Could be added for nested tasks

IIFE: Could be used for private storage keys

How to Run
Save the HTML as index.html

Save the JavaScript as script.js

Open index.html in a browser

This enhanced version maintains all the original function concepts while adding practical features that demonstrate real-world JavaScript application development. */



/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////     box 13      ///////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////