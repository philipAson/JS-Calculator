

const buttonElements = document.getElementsByClassName("button");
const result = document.getElementById("result");
const arithmeticOperatorElements = document.getElementsByClassName("calc_sign");

let firstInput = true;
let operatorInBuffer = "";
let hotLoad = false;

const EnumCalcState = {
    clear: "clear",
    oneValOperator: "oneValOperator",
    pommes: "pommes"
}

let state = EnumCalcState.clear
let val1 = null;
let val2 = null;

for (const buttonElement of buttonElements) {
    buttonElement.addEventListener("click", () => {

        console.log("click " + buttonElement.innerHTML);
        buttonListener(buttonElement);
    })
}

for (const operatorElement of arithmeticOperatorElements) {
    operatorElement.addEventListener("click", () => {

        console.log("click" + operatorElement.innerHTML);
        arithmeticOperatorListener(operatorElement);
    })
}

const arithmeticOperatorListener = (operatorButton) => {
    if (val1 == null) {

        val1 = parseFloat(result.innerText); 
        operatorInBuffer = operatorButton.innerText
        clearResult();
        console.log(val1);

    } else {
        
        const val2 = parseFloat(result.innerText);

        switch (operatorButton.innerText) {
            case "+":
            
                hotLoad = true;
                val1 = parseFloat(calculate(val1, operatorInBuffer, val2));
                operatorInBuffer = "+";

                result.innerText = val1;

                break;
            case "-":
                
                hotLoad = true;
                val1 = parseFloat(calculate(val1, operatorInBuffer, val2));
                operatorInBuffer = "-";

                result.innerText = val1;
                
                break;
            case "*":
                
                hotLoad = true;
                val1 = parseFloat(calculate(val1, operatorInBuffer, val2));
                operatorInBuffer = "*";

                result.innerText = val1;
            
                break;
            case "/":
                
                hotLoad = true;
                val1 = parseFloat(calculate(val1, operatorInBuffer, val2));
                operatorInBuffer = "/";

                result.innerText = val1;

                break;  

            case "=":

                val1 = parseFloat(calculate(val1, operatorInBuffer, val2));
                result.innerText = val1;

                break;
            default:
                result.innerText = "Error: Invalid operator";
        }
    }
}

const buttonListener = (button) => {
    if(button.innerText == "=") {
        val2 = parseFloat(result.innerText);
        let equals = calculate(val1, operatorInBuffer, val2);
        result.innerText(equals);
    } else if (button.innerText == "AC"){
        acResetDisplay();
    } else if (hotLoad == true){
        clearResult();
        hotLoad = false;
        console.log(operatorInBuffer);
        display(button.innerText);
    } else {
        // mem = button.innerText
        display(button.innerText);
    } 

}

const clearResult = () => {
    result.innerText = "";
}

const acResetDisplay = () => {

    val2 = null;
    val1 = null;
    hotLoad = false;
    console.log(val1);
    console.log(val2);
    result.innerText = "0";
    firstInput = true;
}

const display = (value) => {
    if (firstInput) {
        clearResult();
        firstInput = false;    
    }
    result.innerText += value;
}

const calculate = (val1, operatorInBuffer, val2) => {


    switch (operatorInBuffer) {
        case "+":
            val1 += val2;
            break;

        case "-":
            val1 -= val2;
            break;

        case "*":
            val1 *= val2;
            break;
        
        case "/":
            if (val2 != 0) {
                val1 /= val2;
            } else {
                result.innerText = "Error: Division by zero";
            }
            break;
        default:
            result.innerText = "Error: Invalid operator";

        
    }

    return val1;
}