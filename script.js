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

let first;
let second;
let operator;

function operate(operator, first, second) {
    if (operator === '+') {
        return add(first, second);
    } else if (operator === '-') {
        return subtract(first, second);
    } else if (operator === "*") {
        return multiply(first, second);
    } else if (operator === "/") {
        return divide(first, second);
    };
}