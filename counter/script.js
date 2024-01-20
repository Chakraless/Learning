// script.js

const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const increaseButton = document.getElementById('increase');
const numberDisplay = document.getElementById('number');

let currentNumber = 0;

function updateNumber() {
    numberDisplay.textContent = currentNumber;
}

decreaseButton.addEventListener('click', () => {
    currentNumber -= 1;
    updateNumber();
});

resetButton.addEventListener('click', () => {
    currentNumber = 0;
    updateNumber();
});

increaseButton.addEventListener('click', () => {
    currentNumber += 1;
    updateNumber();
});
