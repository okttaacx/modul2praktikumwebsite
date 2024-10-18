function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function clearDisplay() {
    document.getElementById('result').value = '';
}

function deleteLast() {
    let current = document.getElementById('result').value;
    document.getElementById('result').value = current.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById('result').value;
    expression = expression.replace('^', '**'); // Pangkat
    try {
        document.getElementById('result').value = eval(expression);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
