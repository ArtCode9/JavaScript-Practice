const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('#list-container');

const button = document.querySelector('button');

button.addEventListener('click', addTask);

function addTask() {

   if(inputBox.value === '') {
      alert(`You must Write a task !`);
   }
   else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);

      let span = document.createElement("span");
      span.innerHTML = ("\u00d7");
      li.appendChild(span);
   }
   inputBox.value = '';
   saveData();
   console.log(`AddTask Clicked`);
}

listContainer.addEventListener('click', function (e) {
   if(e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
   }
   else if(e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
   }
   console.log(`ListContainer Clicked`);
});

function saveData() {
   let box = [];

   let data = listContainer.innerHTML;  // get the value first
   localStorage.setItem("data", data);  // store it

   box.push(data); // now push actual data

   console.warn("Data stored!!");
   console.warn(box);

   return data;
}

// function saveData() {
//    localStorage.setItem("data", listContainer.innerHTML);   
// }

/* 
   ⚠️ But There’s a Bigger Issue
   Right now box is recreated every time the function runs:
   let box = [];

   So it never truly stores multiple items.
   If you want a persistent array in localStorage, you must:
   1. Get existing array from localStorage
   2. Parse it
   3. Push new data
   4. Store it back

   _________________________________________________________
   function saveData() {
      let data = listContainer.innerHTML;

      // Get existing data
      let box = JSON.parse(localStorage.getItem("data")) || [];

      // Add new item
      box.push(data);

      // Save back to localStorage
      localStorage.setItem("data", JSON.stringify(box));

      console.warn("Data stored!!");
      console.warn(box);
   }
   __________________________________________________________
   📤 How To Show The Data 👇👇👇👇👇👇👇👇👇👇👇👇👇
   __________________________________________________________
   function showData() {
      let box = JSON.parse(localStorage.getItem("data")) || [];

      box.forEach(item => {
         console.log(item);
      });
   }
   __________________________________________________________
   🧠 Key Concepts You Must Understand
   | Concept            | Explanation                     |
   | ------------------ | ------------------------------- |
   | `setItem()`        | Saves data, returns `undefined` |
   | `getItem()`        | Retrieves stored string         |
   | `JSON.stringify()` | Converts array → string         |
   | `JSON.parse()`     | Converts string → array         |

   localStorage only stores strings.
   Arrays must be converted.
*/

function showTask() {
   listContainer.innerHTML = localStorage.getItem("data");
}

showTask();