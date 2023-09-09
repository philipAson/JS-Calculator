
const display = document.getElementById("display");

const numberButtons = document.getElementsByClassName("calc_number");
const arithmeticOperatorButtons = document.getElementsByClassName("calc_sign");
const calcButton = document.getElementById("calculate")
const acButton = document.getElementById("ac")

let firstInput = true;
let hotLoad = false;

let result = null;
let operatorInBuffer = null;

for (const numberButton of numberButtons) {
    numberButton.addEventListener("click", () => {

        inputNumberToDisplay(numberButton.innerText);
        
    })
}

for (const arithmeticOperatorButton of arithmeticOperatorButtons) {
    arithmeticOperatorButton.addEventListener("click", () => {

        setOperatorInBuffer(arithmeticOperatorButton);

    })
}

acButton.addEventListener("click", () => {
    result = null;
    firstInput = true;
    operatorInBuffer = null;
    display.innerText = "0"
})
calcButton.addEventListener("click", () => {
    calculate(result,operatorInBuffer,display.innerText)
});

const inputNumberToDisplay = (value) => {
    if (firstInput) {
        display.innerText = "";
        firstInput = false;

    } else if (hotLoad) {
        hotLoad = false;
        display.innerText = "";

    }
    display.innerText += value;
}

const setOperatorInBuffer = (operator) => {

    if (operatorInBuffer != null) {
        result = calculate(result,operatorInBuffer,display.innerText)
        operatorInBuffer = operator.innerText;
        hotLoad = true;
    } else {
        result = parseFloat(display.innerText);
        operatorInBuffer = operator.innerText;
        hotLoad = true;
    }
}

const calculate = (result, operator, numbersOnDisplay) => {

    value = parseFloat(numbersOnDisplay);
    switch (operator) {

        case "+":
            result += value;
            display.innerText = result;       
            break;

        case "-":           
            result -= value;
            display.innerText = result;
            break;

        case "*":
            result *= value;
            display.innerText = result;
            break;
        
        case "/":
            if (value != 0) {
                result /= value;
                display.innerText = result;
                
            } else {
                display.innerText = "Error: Division by zero";
                
            }
            break;
        default:
            display.innerText = "Error: Invalid operator";
            
    }
    operatorInBuffer = null;
    return result;
}