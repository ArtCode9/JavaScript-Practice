import { state } from "./state.js"
import { updateDisplay } from "./ui.js"
import { addHistory } from "./history.js"

export function inputNumber (number) {
   if(state.currentValue === "0" && number !== ".") {
      state.currentValue = number
   } else {
      if(number === "." && state.currentValue.includes(".")) return
      state.currentValue += number
   }
   updateDisplay()
}

export function setOperator(op) {
   if(state.operator !== null) calculate()

   state.previousValue = state.currentValue
   state.operator = op
   state.currentValue = "0"
}

export function calculate() {
   if(!state.operator || state.previousValue === null) return

   const a = Number(state.previousValue)
   const b = Number(state.currentValue)

   let result;
   let symbol;

   switch(state.operator) {
      case "add":
         result = a + b
         symbol = "+"
         break;
      case "subtract":
         result = a - b
         symbol = "-"
         break;
      case "multiply":
         result = a * b 
         symbol = "x"
         break;
      case "divide":
         result = b === 0 ? "Error" : a/b
         symbol = "/"
         break;
   }

   addHistory(`${a} ${symbol} ${b} = ${result}`);

   state.currentValue = String(result)
   state.operator = null
   state.previousValue = null
   updateDisplay()
}

export function clearAll() {
   state.currentValue = "0"
   state.previousValue = null
   state.operator = null
   updateDisplay()
}