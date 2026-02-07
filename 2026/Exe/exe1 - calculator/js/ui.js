import { state } from "./state.js"

const display = document.getElementById("display")
const historyList = document.getElementById("history-list")

export function updateDisplay() {
  display.textContent = state.currentValue
}

export function renderHistory() {
  historyList.innerHTML = ""

  state.history.forEach(item => {
    const li = document.createElement("li")
    li.textContent = item
    historyList.appendChild(li)
  })
}
