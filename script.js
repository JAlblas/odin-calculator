let displayText = document.querySelector('#display p');

let displayValue = 0;

let updateDisplay = (value) => {
    displayText.textContent = value;
}

/*
let five = document.querySelector('#five');
five.addEventListener("click", () => {
    updateDisplay('5');
})

let six = document.querySelector('#six');
six.addEventListener("click", () => {
    updateDisplay('6');
})
*/

numericButtons = document.querySelectorAll('.number');
numericButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (displayValue == 0) {
            displayValue = button.textContent;
        }
        else {
            displayValue += button.textContent;

        }
        updateDisplay(displayValue);
    })
});



let clear = document.querySelector('#clear');
clear.addEventListener("click", () => {
    updateDisplay('');
})


let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

operator = "";
firstNumber = 0;
secondNumber = 0;

let operate = (operator, num1, num2) => {
    switch (operator) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return substract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
        default:
        // code block
    }
}

