let displayText = document.querySelector('#display p');

let displayValue = 0;
let operator = "";
let firstNumber = null;
let secondNumber = null;

let updateDisplay = (value) => {
    displayText.textContent = value;
}

numericButtons = document.querySelectorAll('.number');
numericButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (displayValue == 0) {
            displayValue = button.textContent;
        } else if (displayValue == null) {
            displayValue = button.textContent;
        } else {
            displayValue += button.textContent;




        }
        updateDisplay(displayValue);
    })
});

operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        console.log(firstNumber)
        if (firstNumber == null) {

            firstNumber = parseFloat(displayText.textContent);
            displayValue = 0;
            //displayText.textContent = "";
            operator = button.textContent;
        } else {
            secondNumber = parseFloat(displayText.textContent);
            operator = button.textContent;
            operate(operator, firstNumber, secondNumber);
        }


    })
})

equalButton = document.querySelector("#equal");
equalButton.addEventListener("click", () => {
    secondNumber = parseFloat(displayText.textContent);

    let result = operate(operator, firstNumber, secondNumber);

    updateDisplay(result);
    firstNumber = result;
})

let clear = document.querySelector('#clear');
clear.addEventListener("click", () => {
    updateDisplay('');
    displayValue = 0;
    operator = "";
    firstNumber = false;
    secondNumber = false;
})


let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (operator, num1, num2) => {
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
        case "/":
            return divide(num1, num2);
            break;
        default:
        // code block
    }
}

