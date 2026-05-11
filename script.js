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

let first = '';
let second = '';
let operator = '';

function operate(operator, first, second) {
    if (operator === '+') {
        return add(first, second);
    } else if (operator === '-') {
        return subtract(first, second);
    } else if (operator === '*') {
        return multiply(first, second);
    } else if (operator === '/') {
        return divide(first, second);
    };
}

const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');

function updateNumbers() {
    numbers.forEach((num) => {
        num.addEventListener("click", (e) => {
            if (operator === '' && second === '') {
                first += e.target.innerHTML;
                display.innerHTML = first;
                first = parseInt(first);
            } else if (first != '' && operator != '') {
                second += e.target.innerHTML;
                display.innerHTML = second;
                second = parseInt(second);
            }
        });
    });
}
updateNumbers();

const operators = document.querySelectorAll('.operator');
function updateOperator() {
    operators.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (first != '' && second === '') {
                operator = e.target.innerHTML;
                display.innerHTML = operator;
            } else if (first != '' && second != '') {
                let current = operate(operator, first, second);
                display.innerHTML = current.toFixed(4);
                first = current; 
                operator = e.target.innerHTML;
                second = '';
            }
        });
    });
}
updateOperator();

const equals = document.getElementById("equals");
function result() {
    equals.addEventListener("click", () => {
        display.innerHTML = operate(operator, first, second).toFixed(4);
    });
}
result();

const clear = document.getElementById("clear");
function clearAll() {
    clear.addEventListener("click", () => {
        first = '';
        operator = '';
        second = '';
        display.innerHTML = '';
    });
}
clearAll();