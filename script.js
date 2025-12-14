let displayText = document.querySelector("#display p");
let displayValue = 0;

let operator = null;
let num1 = null;
let num2 = null;

function handleNumber(digit) {
  console.log("handling number");
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

let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let calculate = (num1, operator, num2) => {
  console.log("calculate");
  console.log(num1, operator, num2);
  if (num1 === null || operator === null || num2 === null) return;

  const a = Number(num1);
  const b = Number(num2);

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

  console.log(displayValue);

  // Prepare for next calculation
  num1 = displayValue;
  num2 = null;
  operator = null;

  updateDisplay(displayValue);
};

let updateDisplay = (value) => {
  /*
  if (value == null) {
    //displayText.textContent = "YOU FAIL";
    return;
  }
  let num = parseFloat(value);
  let formattedNumber;
  if (Number.isInteger(num)) {
    formattedNumber = num.toString();
  } else {
    formattedNumber = num.toFixed(10).replace(/\.?0+$/, "");
  }

  displayText.textContent = formattedNumber;
  */
  displayText.textContent = value;
};

function resetCalculator() {
  updateDisplay("");
  displayValue = 0;
  operator = null;
  resultValue = null;
  displayText.textContent = "0";
}

buttons = document.querySelector("#buttons");
buttons.addEventListener("click", (e) => {
  console.log(e.target.id);
  if (e.target.classList.contains("number")) {
    console.log("number pressed");
    handleNumber(e.target.id);
  } else if (e.target.classList.contains("operator")) {
    console.log("operator pressed");
    handleOperator(e.target.id);
  } else if (e.target.classList.contains("clear")) {
    console.log("clear pressed");
    resetCalculator();
  } else if (e.target.classList.contains("backspace")) {
    console.log("backspace pressed");
    // TODO
  } else if (e.target.classList.contains("decimal")) {
    console.log("decimal pressed");
    // TODO
  }
});

let backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
  let newString = displayText.textContent.substring(
    0,
    displayText.textContent.length - 1
  );
  updateDisplay(newString);

  if (resultValue === null) {
    displayValue = newString;
  } else {
    resultValue = newString;
  }
});

let decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
  displayValue += ".";
  updateDisplay(displayValue);
});
