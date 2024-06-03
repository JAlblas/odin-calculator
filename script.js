let displayText = document.querySelector('#display p');

let displayValue = 0;
let operator = null;
let resultValue = null;
//let secondNumber = null;

let updateDisplay = (value) => {


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
        if (operator == null) {
            resultValue = button.textContent;;
        }
        else if (displayValue == 0 || resultValue != null) {
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
        let result = 0;

        if (button.textContent === "=") {
            displayValue = parseFloat(displayText.textContent);
            console.log("THIS")
            console.log(operator);
            if (operator == null) {
                result = displayValue;
            } else {
                result = operate(operator, resultValue, displayValue);
            }

            console.log(operator);
            console.log(1);

            updateDisplay(result);

            resultValue = result;
            operator = null;
            displayValue = 0;
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

            let result = operate(operator, resultValue, displayValue);

        }

        console.log("displayValue", displayValue);
        console.log("operator is:", operator);
        console.log("number result", resultValue);
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


let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (operator, num1, num2) => {
    console.log("OPERATIR", operator, num1, num2);
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

