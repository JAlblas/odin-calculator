let displayText = document.querySelector('#display p');
let displayValue = 0;
let operator = null;
let resultValue = null;

let updateDisplay = (value) => {
    if (value == null) {
        displayText.textContent = "YOU FAIL";
        return;
    }
    let num = parseFloat(value);
    let formattedNumber;
    if (Number.isInteger(num)) {
        formattedNumber = num.toString();
    } else {
        formattedNumber = num.toFixed(10).replace(/\.?0+$/, '');
    }

    displayText.textContent = formattedNumber;

}

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

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        let result = 0;

        if (button.textContent === "=") {
            displayValue = parseFloat(displayText.textContent);

            if (operator == null) {
                result = displayValue;
            } else {
                result = operate(operator, resultValue, displayValue);
            }

            updateDisplay(result);

            resultValue = result;
            operator = null;
            displayValue = 0;
        }

        else if (resultValue === null) {
            resultValue = parseFloat(displayText.textContent);
            operator = button.textContent;
            displayValue = 0
        }
        else {
            operator = button.textContent;
        }
    });
});

let clear = document.querySelector('.clear');
clear.addEventListener("click", () => {
    updateDisplay('');
    displayValue = 0;
    operator = null;
    resultValue = null;
    displayText.textContent = "0";
})

let backspace = document.querySelector('.backspace');
backspace.addEventListener("click", () => {
    let newString = displayText.textContent.substring(0, displayText.textContent.length - 1);
    displayValue = newString;
    updateDisplay(newString);
})

let decimal = document.querySelector('.decimal');
decimal.addEventListener("click", () => {
    displayValue += '.';
    updateDisplay(displayValue);
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
            if (num2 === 0) { return null; break; };
            return divide(num1, num2);
            break;
        default:
        // code block
    }
}

