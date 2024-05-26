let expression = '';

function appendToResult(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    if (result === 8) {
      document.getElementById('result').value = 'I Love You Syamina';
    } else if (result === 10) {
      document.getElementById('result').value = 'I Miss You Syamina';
    } else {
      document.getElementById('result').value = result;
    }
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}

function deleteLast() {
  expression = expression.slice(0, -1);
  document.getElementById('result').value = expression;
}
