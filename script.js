let displayText = document.querySelector("#display p");
let displayValue = 0;

let operator = null;
let num1 = null;
let num2 = null;

function handleNumber(digit) {
  if (operator === null) {
    // build num1
    num1 = num1 === null ? digit : num1 + digit;
    displayValue = num1;
  } else {
    // build num2
    num2 = num2 === null ? digit : num2 + digit;
    displayValue = num2;
  }

  updateDisplay(displayValue);
}

function handleOperator(op) {
  if (num1 === null) return; // nothing to operate on

  // If user chains operations (2 + 3 + 4)
  if (num2 !== null) {
    calculate(num1, operator, num2);
  }
  operator = op;
}

function handleBackspace() {
  // Decide which value we are editing
  if (operator === null) {
    num1 = removeLastChar(num1);
    displayValue = num1 ?? "0";
  } else {
    num2 = removeLastChar(num2);
    displayValue = num2 ?? "0";
  }

  updateDisplay(displayValue);
}

function addDecimal() {
  if (operator === null) {
    if (num1.includes(".")) return;
    num1 = num1 === null ? "0." : num1 + ".";
    displayValue = num1;
  } else {
    if (num2.includes(".")) return;
    num2 = num2 === null ? "0." : num2 + ".";
    displayValue = num2;
  }

  updateDisplay(displayValue);
}

let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let calculate = (digit1, operator, digit2) => {
  if (digit1 === null || operator === null || digit2 === null) return;

  const a = Number(digit1);
  const b = Number(digit2);

  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      result = b === 0 ? "Error" : a / b;
      break;
  }

  displayValue = String(result);

  // Prepare for next calculation
  num1 = displayValue;
  num2 = null;
  operator = null;

  updateDisplay(displayValue);
};

let updateDisplay = (value) => {
  displayText.textContent = value;
};

function resetCalculator() {
  num1 = null;
  num2 = null;
  operator = null;
  displayValue = "0";
  updateDisplay("");
}

function removeLastChar(value) {
  if (!value || value.length <= 1) {
    return null;
  }
  return value.slice(0, -1);
}

buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("number")) {
    handleNumber(e.target.id);
  } else if (e.target.classList.contains("operator")) {
    handleOperator(e.target.id);
  } else if (e.target.classList.contains("equals")) {
    calculate(num1, operator, num2);
  } else if (e.target.classList.contains("clear")) {
    resetCalculator();
  } else if (e.target.classList.contains("backspace")) {
    handleBackspace();
  } else if (e.target.classList.contains("decimal")) {
    addDecimal();
  }
});
