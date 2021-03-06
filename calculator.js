alert(
  `This is a calculator you can use in your browser by following these instructions:
  
  1. When prompted, simply enter your first and second numbers.
  2. Choose which mathematical problem you would like to solve,
      such as: addition, subtraction, division and multiplication.
     
   NOTE: You can only solve for 2 numbers (integer or float) at a time on this calculator.
  `
);

function add(a, b) {
  alert("Result: " + a + " + " + b + " = " + (a + b));
}
function subtract(a, b) {
  alert("Result: " + a + " - " + b + " = " + (a - b));
}
function divide(a, b) {
  alert("Result: " + a + " / " + b + " = " + a / b);
}
function multiply(a, b) {
  alert("Result: " + a + " * " + b + " = " + a * b);
}

function calculate(a, b, operation) {
  if (operation == "+") {
    add(a, b);
  } else if (operation == "-") {
    subtract(a, b);
  } else if (operation == "/") {
    divide(a, b);
  } else if (operation == "*") {
    multiply(a, b);
  } else {
    alert(
      "Sorry, I cant solve that because your input is wrong. Kindly try again."
    );
  }
}

let a = parseFloat(prompt("Kindly enter the first number: "));
let b = parseFloat(prompt("Kindly enter the second number: "));
let operation = prompt(
  "Enter the mathematical problem you want to solve: \n add: +\n subtract: -\n divide: /\n multiply: * "
);

calculate(a, b, operation);
