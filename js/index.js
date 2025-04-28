

const calculateEl = document.getElementById("calculate");
const resultEl = document.getElementById("result");
let expression = "";

function calculating(input) {
  expression += input;
  calculateEl.innerText = expression;
}

function clearScreen() {
  expression = "";
  calculateEl.innerText = expression;
  resultEl.innerText = ""
}
function calculateResult() {
  expression = eval(expression);
  resultEl.innerText = expression;
  expression = ""
}
