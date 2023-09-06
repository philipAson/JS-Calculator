

const buttonElements = document.getElementsByClassName("button");
const result = document.getElementById("result")
let firstInput = true;

// for(let i=0; i< numberElements.length ; i++) {
    // numberElements[i].addEventListener
// }

// Array.from(numberElements).forEach(element => {
//     element.addEventListener
// })

for (const buttonElement of buttonElements) {
    buttonElement.addEventListener("click", () => {
        console.log("click " + buttonElement.innerHTML)
        buttonListener(buttonElement);
    })
}

const buttonListener = (button) => {
    if(button.innerText == "=") {
        calculate();
    } else if (button.innerText == "AC"){
        acResetDisplay();
    } else {
        display(button.innerText)
    } 

}

const clearResult = () => {
    result.innerText = "";
}

const acResetDisplay = () => {
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

const calculate = () => {
    let res = eval(result.innerText); // Använd ej!
    // let res = result.innerText.slice
    display(" = " + res)
}