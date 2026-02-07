import { state } from "./state.js";

const display = document.getElementById("display")

export function updateDisplay() {
   display.textContent = state.currentValue
}