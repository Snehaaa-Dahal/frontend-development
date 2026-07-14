// Function to get both input values and convert them to numbers
function getNumbers() {
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  return [num1, num2];
}

// Function to display the result on the page
function showResult(value) {
  document.getElementById("result").textContent = value;
}

function add() {
  const [num1, num2] = getNumbers();
  showResult(num1 + num2);
}

function subtract() {
  const [num1, num2] = getNumbers();
  showResult(num1 - num2);
}

function multiply() {
  const [num1, num2] = getNumbers();
  showResult(num1 * num2);
}

function divide() {
  const [num1, num2] = getNumbers();
  if (num2 === 0) {
    showResult("Error: Cannot be divided by zero");
  } else {
    showResult(num1 / num2);
  }
}