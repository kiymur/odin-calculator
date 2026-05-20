const display = document.querySelector('.display');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const back = document.querySelector('#back');
const decimal = document.querySelector('#decimal');

let first = '';
let second = '';
let operator = '';

equals.addEventListener("click", () => result());
clear.addEventListener("click", () => clearAll());
back.addEventListener("click", () => backspace());
decimal.addEventListener("click", () => decimalPoint());

numbers.forEach(item => {
    item.addEventListener('click', updateNumbers)
});
operators.forEach(item => {
    item.addEventListener('click', updateOperator)
});
document.addEventListener('keydown', e => {
    if (parseFloat(e.key) >= 0 && parseFloat(e.key) <= 9) {
        handleNumKey(e);
    } else if (e.key == '-' || e.key == '/') {
        handleOpKey(e);
    } else if (e.shiftKey == true && e.key == '+' || e.key == '*') {
        handleOpKey(e);
    } else if (e.key == 'Backspace') {
        backspace();
    } else if (e.key == 'Delete') {
        clearAll();
    } else if (e.key == 'Enter') {
        result();
    } else if (e.key == '.') {
        decimalPoint();
    }
});

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

function updateNumbers(e) {
    if (operator === '' && second === '') {
        first += e.target.innerHTML;
        display.innerHTML = first;
    } else if (operator === '/' && e.target.innerHTML === '0') {
        window.alert("Whoa whoa whoa you can't do that!\n\nEnter a number greater than zero:")
    } else if (first != '' && operator != '') {
        second += e.target.innerHTML;
        display.innerHTML = second;
    }
}

function updateOperator(e) {
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
}

function result() {
    first = parseFloat(first);
    second = parseFloat(second);
    display.innerHTML = operate(operator, first, second).toFixed(2);
    first = '';
    second = '';
    operator = '';
}

function clearAll() {
    first = '';
    operator = '';
    second = '';
    display.innerHTML = '';
}

function backspace() {
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
}

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

function handleNumKey(e) {
    if (operator === '' && second === '') {
        first += e.key;
        display.innerHTML = first;
    } else if (operator === '/' && e.key === '0') {
        window.alert("Whoa whoa whoa you can't do that!\n\nEnter a number greater than zero:")
    } else if (first != '' && operator != '') {
        second += e.key;
        display.innerHTML = second;
    }
}

function handleOpKey(e) {
    if (first != '' && second === '') {
        operator = e.key;
        display.innerHTML = operator;
    } else if (first != '' && second != '') {
        first = parseFloat(first);
        second = parseFloat(second);
        let current = operate(operator, first, second);
        display.innerHTML = current.toFixed(2);
        first = current; 
        operator = e.key;
        second = '';
    }
}