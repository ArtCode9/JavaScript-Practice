let input = document.getElementById('inp');
let text = document.querySelector('.text');

function Add() {
   if(input.value == "") {
      alert(`Please Fill the input with task.`);
   } else {
      let newEle = document.createElement("ul");

      newEle.innerHTML = `
            ${input.value}
            <li class="fa-solid fa-trash">X</li>
      `;

      text.appendChild(newEle);
      
      input.value="";
      
      newEle.querySelector("li").addEventListener("click", removeItem);
      function removeItem() {
         newEle.remove();
      }
   }
}
/* 
   let input = document.getElementById('inp');
let text = document.querySelector('.text');

function Add() {
   if (input.value === "") {
      alert("Please Fill the input with task.");
   } else {

      let newEle = document.createElement("ul");

      newEle.innerHTML = `
         ${input.value} 
         <li class="fa-solid fa-trash delete">X</li>
      `;

      text.appendChild(newEle);
      input.value = "";

      let deleteBtn = newEle.querySelector(".delete");

      deleteBtn.addEventListener("click", function () {
         newEle.remove();
      });
   }
}
*/

/* 
let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {

   if (!input.value.trim()) {
      alert("Please Fill the input with task.");
      return;
   }

   let li = document.createElement("li");

   li.innerHTML = `
      ${input.value}
      <button class="delete">X</button>
   `;

   text.appendChild(li);
   input.value = "";

   li.querySelector(".delete").addEventListener("click", () => {
      li.remove();
   });
}
*/