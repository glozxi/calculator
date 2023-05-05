function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, op, b) {
    switch(op) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function reset() {
    numberA = "";
    operator = "";
    numberB = "";
    operationDisplay.textContent = "";
    resultDisplay.textContent = "";
}

function getResult() {
    if (numberA === "" | operator === "" || numberB === "") {
        return;
    }

    const res = operate(Number(numberA), operator, Number(numberB));
    resultDisplay.textContent = res;
    numberA = res.toString();
    operator = "";
    numberB = "";
    operationDisplay.textContent = numberA;
}

function keyInNumber(num) {
    if (operator === "") {
        numberA += num;
        operationDisplay.textContent += num;
    } else {
        numberB += num;
        operationDisplay.textContent += num;
    }
}

let numberA = "";
let operator = "";
let numberB = "";

const clearButton = document.getElementById("clear").addEventListener('click', reset);
const equalButton = document.getElementById("equal").addEventListener('click', getResult);

const operationDisplay = document.getElementById("operation");
const resultDisplay = document.getElementById("result");

const numberButtons = document.querySelectorAll("#number-buttons > button");
for (let button of numberButtons) {
    let numInButton = button.textContent;
    button.addEventListener('click', () => keyInNumber(numInButton));
}