let currentInput = '';
let currentResult = '';
const resultInput = document.getElementById('result');

function appendToDisplay(value) {
    currentInput += value;
    resultInput.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    currentResult = '';
    resultInput.value = '';
}

function calculateResult() {
    try {
        currentResult = eval(currentInput);
        resultInput.value = currentResult;
        currentInput = currentResult.toString();
    } catch (error) {
        resultInput.value = 'Error';
    }
}
