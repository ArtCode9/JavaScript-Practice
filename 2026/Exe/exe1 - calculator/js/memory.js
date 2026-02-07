import { state } from "./state.js";
import { updateDisplay } from "./ui.js";

export function memoryClear() {
   state.memory = 0;
}

export function memoryRecall () {
   state.currentValue = String(state.memory)
   updateDisplay()
}

export function memoryAdd() {
   state.memory += Number(state.currentValue)
}

export function memorySubtract() {
   state.memory -= Number(state.currentValue)
}

/* 
   Why this is clean:
      - Memory is isolated
      - Calculator logic untouched
      - No ui coupling expect display update
*/

