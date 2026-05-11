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
    } else if (operator === "*") {
        return multiply(first, second);
    } else if (operator === "/") {
        return divide(first, second);
    };
}

let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.number');

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

let operators = document.querySelectorAll('.operator');
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