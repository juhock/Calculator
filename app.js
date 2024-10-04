"use strict";

const inputBox = document.querySelector("input");
const clearButton = document.getElementById("clear");

let arr = [];
const consecutiveOperatorsRegex = /[+*/=]{2}/;
const doubleMinusRegex = /--/g;
const leadingZerosRegex = /^0+/;
const multipleZerosAfterOperatorRegex = /([+\-*/])0{2,}/g;
const standaloneZerosRegex = /\b0{2,}|\b0+\b/g;

function clear() {
  inputBox.value = "";
  arr = [];
}

function triggerClearAnimation() {
  clearButton.style.backgroundImage = "url('./media/atomic.png')";

  setTimeout(() => {
    clearButton.style.backgroundImage = "url('./media/download.png')";
  }, 500);

  clear();
}

function adjustFontSize() {
  const length = inputBox.value.length;

  if (length > 10) {
    inputBox.style.fontSize = "40px";
  } else if (length > 5) {
    inputBox.style.fontSize = "50px";
  } else {
    inputBox.style.fontSize = "60px";
  }

  inputBox.scrollLeft = inputBox.scrollWidth;
}

function processEquals() {
  let expression = arr.join("");

  // Regex to detect multiplication by zero
  const multiplyByZeroRegex = /(\d*\s*\*+\s*0)|(0\s*\*+\s*\d+)/;

  if (multiplyByZeroRegex.test(expression)) {
    inputBox.value = "0";
    arr = [0];
    return;
  }

  // Regex to detect number divided by zero
  const divideByZeroRegex = /\/\s*0(?:\.0*)?\b/;
  if (divideByZeroRegex.test(expression)) {
    inputBox.value = "undefined";
    arr = [];
    return;
  }

  // Clean up expression before evaluation
  expression = expression
    .replace(doubleMinusRegex, "+")
    .replace(leadingZerosRegex, "")
    .replace(multipleZerosAfterOperatorRegex, "$1")
    .replace(standaloneZerosRegex, "0");

  const validExpression = expression.slice(0, -1); // Remove the last operator if "=" is pressed

  try {
    const result = eval(validExpression);
    inputBox.value = result;
    arr = [result];
  } catch (error) {
    inputBox.value = "Error";
    console.log(error);
  }
}

function handleButtonClick(event) {
  event.preventDefault();
  const buttonValue = event.target.dataset[event.target.id];

  if (event.target.tagName === "BUTTON") {
    if (buttonValue === "0" && inputBox.value === "0") {
      return;
    }

    inputBox.value += buttonValue;
    arr.push(buttonValue);
    adjustFontSize();

    // Prevent consecutive operators
    if (consecutiveOperatorsRegex.test(inputBox.value) && buttonValue !== "0") {
      arr.pop();
      inputBox.value = inputBox.value.slice(0, -1);
    }

    if (buttonValue === "C") {
      triggerClearAnimation();
    }

    if (buttonValue === "=") {
      if (["=", "+", "*", "/"].includes(arr[0])) {
        clear();
      } else {
        processEquals();
      }
    }
  }
  console.log(arr);
  console.log(inputBox.value);
}

// Attach event listener to capture button clicks
addEventListener("click", handleButtonClick);
