import {
   inputNumber,
   setOperator,
   calculate,
   clearAll
} from "./calculator.js"

import {
   memoryClear,
   memoryRecall,
   memoryAdd,
   memorySubtract
} from "./memory.js"

document.querySelector(".buttons").addEventListener("click", e => {
   const btn = e.target
   if(!btn.matches("button")) return

   console.warn(e.target);

   if(btn.dataset.number !== undefined) {
      inputNumber(btn.textContent)
      console.warn(btn.textContent)
   }

   if(btn.dataset.action) {
      switch (btn.dataset.action){
         case "clear":
            clearAll()
            break
         case "equals":
            calculate()
            break;
         case "mc":
            memoryClear()
            break
         case "mr":
            memoryRecall()
            break
         case "mplus":
            memoryAdd()
            break
         case "mminus":
            memorySubtract()
            break
         default:
            setOperator(btn.dataset.action)
      }
   }
});