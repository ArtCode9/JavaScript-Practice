// ===== STATE =====
let currentValue = "0"
let previousValue = null
let operator = null

const display = document.getElementById("display")

// ===== UI UPDATE =====
function updateDisplay() {
  display.textContent = currentValue
}

// ===== INPUT NUMBERS =====
function handleNumber(number) {
  if (currentValue === "0" && number !== ".") {
    currentValue = number
  } else {
    if (number === "." && currentValue.includes(".")) return
    currentValue += number
  }
  updateDisplay()
}

// ===== OPERATORS =====
function handleOperator(op) {
  if (operator !== null) calculate()

  previousValue = currentValue
  operator = op
  currentValue = "0"
}

// ===== CALCULATION =====
function calculate() {
  if (operator === null || previousValue === null) return

  const a = Number(previousValue)
  const b = Number(currentValue)

  let result

  switch (operator) {
    case "add":
      result = a + b
      break
    case "subtract":
      result = a - b
      break
    case "multiply":
      result = a * b
      break
    case "divide":
      result = b === 0 ? "Error" : a / b
      break
  }

  currentValue = String(result)
  operator = null
  previousValue = null
  updateDisplay()
}

// ===== CLEAR =====
function clearAll() {
  currentValue = "0"
  previousValue = null
  operator = null
  updateDisplay()
}

// ===== EVENT DELEGATION =====
document.querySelector(".buttons").addEventListener("click", e => {
  const button = e.target
  if (!button.matches("button")) return

  if (button.dataset.number !== undefined) {
    handleNumber(button.textContent)
  }

  if (button.dataset.action) {
    switch (button.dataset.action) {
      case "clear":
        clearAll()
        break
      case "equals":
        calculate()
        break
      default:
        handleOperator(button.dataset.action)
    }
  }
})
