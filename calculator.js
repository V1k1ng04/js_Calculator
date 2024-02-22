document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const resultDisplay = document.getElementById('result');
    
    window.appendNumber = function (number) {
        display.value += number;
    };

    window.appendOperator = function (operator) {
        display.value += operator;
    };

    window.calculate = function () {
        try {
            resultDisplay.textContent = eval(display.value);
        } catch (error) {
            resultDisplay.textContent = 'Error';
        }
    };

    window.clearDisplay = function () {
        display.value = '';
        resultDisplay.textContent = '';
    };
});
