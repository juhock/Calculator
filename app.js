"use strict";

const inputBox = document.querySelector("input");
const button = document.getElementById("clear");

let arr = [];
const regex = /[+*/=]{2}/;
const doubleMinusRegex = /--/g;
const startingZerosRegex = /^0+/;
const zerosPostOpRegex = /([+\-*/])0+/g;
const emptyZeros = /\b0{2,}|\b0+\b/g;

function clear() {
  inputBox.value = "";
  arr = [];
}

function clearDisplayBomb() {
  button.style.backgroundImage = "url('./media/atomic.png')";

  setTimeout(() => {
    button.style.backgroundImage = "url('./media/download.png')";
  }, 500);

  inputBox.value = "";
  arr = [];
}

function adjustFontSize() {
  if (inputBox.value.length > 10) {
    inputBox.style.fontSize = "40px";
  } else if (inputBox.value.length > 5) {
    inputBox.style.fontSize = "50px";
  } else {
    inputBox.style.fontSize = "60px";
  }
  inputBox.scrollLeft = inputBox.scrollWidth;
}

function equals() {
  let joinedArr = arr.join("");

  joinedArr = joinedArr
    .replace(doubleMinusRegex, "+")
    .replace(startingZerosRegex, "")
    .replace(zerosPostOpRegex, "$1")
    .replace(emptyZeros, "0");

  const sliced = joinedArr.slice(0, -1);
  try {
    const evaluated = eval(sliced);
    console.log(eval(sliced));

    inputBox.value = evaluated;
    arr = [];
    arr.push(evaluated);
  } catch (error) {
    inputBox.value = "Error";
    console.log(error);
  }
}

addEventListener("click", function (e) {
  e.preventDefault();
  const input = e.target.dataset[e.target.id];

  if (e.target.tagName === "BUTTON") {
    if (input === "0" && inputBox.value === "0") {
      return;
    }

    inputBox.value += input;
    arr.push(input);
    adjustFontSize();

    if (regex.test(inputBox.value) === true && input !== "0") {
      arr.pop();
      inputBox.value = inputBox.value.slice(0, -1);
    }
    if (input === "C") {
      clearDisplayBomb();
    }

    if (input === "=") {
      if (
        arr[0] === "=" ||
        arr[0] === "+" ||
        // arr[0] === "-" ||
        arr[0] === "*" ||
        arr[0] === "/"
        // arr[0] === "."
      ) {
        clear();
      } else if (arr[0] === "." && Number.isInteger(arr[1])) {
        equals();
      } else {
        equals();
      }
    }
  }
  console.log(arr);
  console.log(inputBox.value);
});

// if (regex2.test(inputBox.value) === true) {
//   arr.shift();
//   inputBox.value = inputBox.value.slice(0, -1);
// }
