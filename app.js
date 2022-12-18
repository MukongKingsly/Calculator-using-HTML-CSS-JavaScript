const switchInput = document.getElementById("switchInput");
const bodyElement = document.querySelector("body")

switchInput.addEventListener("click", () => {
  bodyElement.classList.toggle("bg-dark")
});

let screenValue = "0";
let firstValue = null;
let secondValue = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll("button");

window.addEventListener("keydown", (event) => {
  const key = document.querySelector(`button[data-key='${event.key}']`);
  key.click();
});

const operate = (x, y, operator) => {
  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "*") {
    return x * y;
  } else if (operator === "%") {
    return x % y;
  } else if (operator === "power") {
    return Math.pow(x, y);
  } else if (operator === "/") {
    if (y === 0) {
      return "Infinity";
    } else {
      return x / y;
    }
  }
};
function operand(number) {
    if (firstOperator === null) {
      if (screenValue === "0" || screenValue === 0) {
        //1st click - handles first number input
        screenValue = number;
      } else if (screenValue === firstValue) {
        //starts new operation after inputEquals()
        screenValue = number;
      } else {
        screenValue += number;
      }
    } else {
      //3rd/5th click - inputs to secondValue
      if (screenValue === firstValue) {
        screenValue = number;
      } else {
        screenValue += number;
      }
    }
  }
const updateDisplay = () => {
  const display = document.getElementById("display");
  display.innerText = screenValue;
  if (screenValue.length > 12) {
    display.innerText = screenValue.substring(0, 12);
  }
};

updateDisplay();

const btnClick = () => {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
      if (buttons[i].classList.contains("number")) {
        operand(buttons[i].value);
        updateDisplay();
      } else if (buttons[i].classList.contains("operator")) {
        inputOperator(buttons[i].value);
      } else if (buttons[i].classList.contains("equals")) {
        inputEquals();
        updateDisplay();
      } else if (buttons[i].classList.contains("decimal")) {
        decimal(buttons[i].value);
        updateDisplay();
      } else if (buttons[i].classList.contains("pm")) {
        pm(screenValue);
        updateDisplay();
      } else if (buttons[i].classList.contains("del")) {
        del(screenValue);
        updateDisplay();
      } else if (buttons[i].classList.contains("sin")) {
        sin(screenValue);
        updateDisplay();
      } else if (buttons[i].classList.contains("cos")) {
        cos(screenValue);
        updateDisplay();
      } else if (buttons[i].classList.contains("tan")) {
        tan(screenValue);
        updateDisplay();
      } else if (buttons[i].classList.contains("sqrt")) {
        sqrt(screenValue);
        updateDisplay();
      } else if (buttons[i].classList.contains("log")) {
        log(screenValue);
        updateDisplay();
      } else if (buttons[i].classList.contains("In")) {
        In(screenValue);
        updateDisplay();
      } else if (buttons[i].classList.contains("eulerNumber")) {
        eulerNumber(screenValue);
        updateDisplay();
      } else if (buttons[i].classList.contains("eulerNumber")) {
        eulerNumber(screenValue);
        updateDisplay();
      } else if (buttons[i].classList.contains("pi")) {
        pi(screenValue);
        updateDisplay();
      } else if (buttons[i].classList.contains("clear")) clearDisplay();
      updateDisplay();
    });
  }
};

btnClick();


function inputOperator(operator) {
  if (firstOperator != null && secondOperator === null) {
    //4th click - handles input of second operator
    secondOperator = operator;
    secondValue = screenValue;
    result = operate(Number(firstValue), Number(secondValue), firstOperator);
    screenValue = round(result, 14).toString();
    firstValue = screenValue;
    result = null;
  } else if (firstOperator != null && secondOperator != null) {
    //6th click - new secondOperator
    secondValue = screenValue;
    result = operate(Number(firstValue), Number(secondValue), secondOperator);
    secondOperator = operator;
    screenValue = round(result, 14).toString();
    firstValue = screenValue;
    result = null;
  } else {
    //2nd click - handles first operator input
    firstOperator = operator;
    firstValue = screenValue;
  }
}

function inputEquals() {
  //hitting equals doesn't display undefined before operate()
  if (!firstOperator) {
    screenValue = screenValue;
  } else if (secondOperator) {
    //handles final result
    secondValue = screenValue;
    result = operate(Number(firstValue), Number(secondValue), secondOperator);
    if (result === "Infinity") {
      screenValue = "Infinity";
    } else {
      screenValue = round(result, 14).toString();
      firstValue = screenValue;
      secondValue = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  } else {
    //handles first operation
    secondValue = screenValue;
    result = operate(Number(firstValue), Number(secondValue), firstOperator);
    if (result === "Infinity") {
      screenValue = "Infinity";
    } else {
      screenValue = round(result, 14).toString();
      firstValue = screenValue;
      secondValue = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  }
}

function decimal(decimalPoint) {
  if (screenValue === firstValue || screenValue === secondValue) {
    screenValue = "0";
    screenValue += decimalPoint;
  } else if (!screenValue.includes(decimalPoint)) {
    screenValue += decimalPoint;
  }
}

function del(num) {
  screenValue = num.toString().slice(0, -1);
}

function sin(num) {
  screenValue = Math.sin(num).toFixed(12).toString();
}
function cos(num) {
  screenValue = Math.cos(num).toFixed(12).toString();
}
function tan(num) {
  screenValue = Math.tan(num).toFixed(12).toString();
}

function pm(num) {
  screenValue = (num * -1).toString();
}

function sqrt(num) {
  screenValue = Math.sqrt(num).toFixed(12).toString();
}

// Convert to base 10 by dividing to Math.LN10
function log(num) {
  screenValue = (Math.log(num) / Math.LN10).toFixed(12).toString();
}

function In(num) {
  screenValue = (Math.log(num)).toFixed(12).toString();
}
function eulerNumber() {
  screenValue = (Math.E.toFixed(12)).toString();
}

function pi() {
  screenValue = (Math.PI.toFixed(12)).toString();
}
function clearDisplay() {
  screenValue = "0";
  firstValue = null;
  secondValue = null;
  firstOperator = null;
  secondOperator = null;
  result = null;
}

function round(num, places) {
  return parseFloat(Math.round(num + "e" + places) + "e-" + places);
}

