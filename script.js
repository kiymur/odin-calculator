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

function updateFirst() {
    numbers.forEach((num) => {
        num.addEventListener("click", (e) => {
            if (first === '' && second === '') {
                first = e.target.innerHTML;
                display.innerHTML = first;
                first = parseInt(first);
            }
        });
    });
}
updateFirst();

const operators = document.querySelectorAll('.operator');
function updateOperator() {
    operators.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (first != '' && second === '') {
                operator = e.target.innerHTML;
                display.innerHTML = operator;
            }
        });
    });
}
updateOperator();

function updateSecond() {
    numbers.forEach((num) => {
        num.addEventListener("click", (e) => {
            if (operator != '' && second === '') {
                second = e.target.innerHTML;
                display.innerHTML = second;
                second = parseInt(second);
            }
        });
    });
}
updateSecond();

const equals = document.getElementById("equals");
function result() {
    equals.addEventListener("click", () => {
        display.innerHTML = operate(operator, first, second);
    });
}
result();

function keepGoing() {
    operators.forEach((item) => {
        item.addEventListener("click", (e) => {
            if (first != '' && second != '') {
                let current = operate(operator, first, second);
                display.innerHTML = current;
                first = current; 
                operator = e.target.innerHTML;
                second = '';
            }
        });
    });
}
keepGoing();