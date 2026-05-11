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
            } else if (operator === '/' && e.target.innerHTML === '0') {
                window.alert("Whoa whoa whoa you can't do that!\n\nEnter a number greater than zero:")
            } else if (first != '' && operator != '') {
                second += e.target.innerHTML;
                display.innerHTML = second;
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
                first = parseFloat(first);
                second = parseFloat(second);
                let current = operate(operator, first, second);
                display.innerHTML = current.toFixed(2);
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
        first = parseFloat(first);
        second = parseFloat(second);
        display.innerHTML = operate(operator, first, second).toFixed(2);
        first = '';
        second = '';
        operator = '';
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

const back = document.querySelector('#back');
function backspace() {
    back.addEventListener("click", () => {
        if (first != '' && operator === '' && second === '') {
            first = '';
            display.innerHTML = '';
        } else if (first != '' && operator != '' && second === '') {
            operator = '';
            display.innerHTML = first;
        } else if (first != '' && operator != '' && second != '') {
            second = '';
            display.innerHTML = operator;
        }
    });
}
backspace();

const decimal = document.querySelector('#decimal');
function decimalPoint() {
    if (
        operator === '' && 
        second === '' &&
        !first.includes('.')
    ) {
        first += '.';
        display.innerHTML = first;
    } else if (
        first != '' && 
        operator != '' &&
        !second.includes('.')
    ) {
        second += '.';
        display.innerHTML = second;
    }
}

decimal.addEventListener("click", () => decimalPoint());