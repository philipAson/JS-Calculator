const resultList = document.getElementById("resultList")

const calculate = () => {
    displayResult(result.innerText);
}

const displayResult = (value) => {
    const listItem = document.createElement("li");
    listItem.innerText = value;
    resultList.appendChild(listItem);
}