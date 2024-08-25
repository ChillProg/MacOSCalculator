const display = document.getElementById('display');
let shouldResetDisplay = false;

function clearDisplay() {
    display.innerText = '0';
    shouldResetDisplay = false;
}

function toggleSign() {
    if (display.innerText !== '0') {
        if (display.innerText.startsWith('-')) {
            display.innerText = display.innerText.slice(1);
        } else {
            display.innerText = '-' + display.innerText;
        }
    }
}

function percent() {
    const currentValue = parseFloat(display.innerText);
    if (!isNaN(currentValue)) {
        display.innerText = (currentValue / 100).toString();
        shouldResetDisplay = true;
    }
}

function deleteLast() {
    if (display.innerText.length === 1 || display.innerText === '0') {
        display.innerText = '0';
    } else {
        display.innerText = display.innerText.slice(0, -1);
    }
}

function appendNumber(number) {
    if (display.innerText === '0' || shouldResetDisplay) {
        display.innerText = number;
        shouldResetDisplay = false;
    } else {
        display.innerText += number;
    }
}

function appendOperator(operator) {
    if (shouldResetDisplay) {
        shouldResetDisplay = false;
    }
    const lastChar = display.innerText.slice(-1);
    if (['+', '-', '*', '/'].includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

function calculate() {
    try {
        const result = eval(display.innerText.replace('×', '*').replace('÷', '/'));
        display.innerText = parseFloat(result.toFixed(5));
        shouldResetDisplay = true; 
    } catch {
        display.innerText = 'Error';
    }
}






























































