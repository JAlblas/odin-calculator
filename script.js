let displayText = document.querySelector('#display p');

let displayValue = 0;
let operator = "";
let resultValue = null;
//let secondNumber = null;

let updateDisplay = (value) => {
    displayText.textContent = value;
}

numericButtons = document.querySelectorAll('.number');
numericButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (displayValue == 0 || resultValue != null) {
            displayValue = button.textContent;
        } else if (displayValue == null) {
            displayValue = button.textContent;
        } else {
            displayValue += button.textContent;
        }
        updateDisplay(displayValue);
    })
});

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {

        console.log("displayValue", displayValue);
        console.log("operator", operator);
        console.log("number result", resultValue);

        if (button.textContent === "=") {
            secondNumber = parseFloat(displayText.textContent);

            let result = operate(operator, resultValue, displayValue);

            console.log(operator);
            console.log(1);

            updateDisplay(result);

            //displayValue = result;
            resultValue = result;
        }

        else if (resultValue === null) {
            console.log(2);
            resultValue = parseFloat(displayText.textContent);
            operator = button.textContent;

        }
        else {
            console.log(33333);
            displayValue = parseFloat(displayText.textContent);
            operator = button.textContent;

            //let result = operate(operator, resultValue, displayValue);
            //displayText.textContent = result;

        }

        console.log("displayValue", displayValue);
        console.log("operator", operator);
        console.log("number result", resultValue);
    });
});

let clear = document.querySelector('#clear');
clear.addEventListener("click", () => {
    updateDisplay('');
    displayValue = 0;
    operator = "";
    resultValue = null;
    displayText.textContent = "0";
})


let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (operator, num1, num2) => {
    console.log(operator, num1, num2);
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return substract(num1, num2);
            break;
        case "x":
            return multiply(num1, num2);
            break;
        case "%":
            return divide(num1, num2);
            break;
        default:
        // code block
    }
}

