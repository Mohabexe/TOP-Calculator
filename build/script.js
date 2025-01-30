let currentNumber = ""
let operator = ""
let firstNumber = ""
let secondNumber = ""

const digitButtons = document.querySelectorAll(".digit")
const display = document.querySelector(".display")
const plusminusButton = document.querySelector(".plusminus")
const clearButtons = document.querySelectorAll(".clear")
const operatorButtons = document.querySelectorAll(".operator")
const equalsButton = document.querySelector(".equals")

digitButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentNumber += button.textContent
    updateDisplay()
    togglePlusMinusButton()
  })
})

clearButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentNumber = ""
    firstNumber = ""
    secondNumber = ""
    operator = ""
    display.textContent = "0"
    togglePlusMinusButton()
  })
})

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentNumber !== "") {
      if (firstNumber !== "") {
        secondNumber = Number(currentNumber)
        firstNumber = operate(operator, firstNumber, secondNumber)
        currentNumber = ""
        updateDisplay()
      } else {
        firstNumber = Number(currentNumber)
        currentNumber = ""
      }
    }
    operator = button.textContent
    togglePlusMinusButton()
  })
})

equalsButton.addEventListener("click", () => {
  if (firstNumber !== "" && currentNumber !== "") {
    secondNumber = Number(currentNumber)
    currentNumber = operate(operator, firstNumber, secondNumber).toString()
    firstNumber = ""
    operator = ""
    updateDisplay()
    togglePlusMinusButton()
  }
})

plusminusButton.addEventListener("click", () => {
  if (currentNumber === "") {
    currentNumber = "0"
  }
  currentNumber = (Number(currentNumber) * -1).toString()
  updateDisplay()
})

function updateDisplay() {
  display.textContent = currentNumber || firstNumber.toString()
}

function togglePlusMinusButton() {
  plusminusButton.disabled = currentNumber === ""
}

function add(a, b) {
  return a + b
}

function subtract(a, b) {
  return a - b
}

function multiply(a, b) {
  return a * b
}

function divide(a, b) {
  if (b === 0) {
    return "Error"
  }
  return a / b
}

function operate(operator, a, b) {
  let result
  switch (operator) {
    case "+":
      result = add(a, b)
      break
    case "-":
      result = subtract(a, b)
      break
    case "x":
      result = multiply(a, b)
      break
    case "/":
      result = divide(a, b)
      break
    default:
      return null
  }
  if (result === "Error") {
    return "Error"
  }
  return parseFloat(result.toFixed(3))
}
