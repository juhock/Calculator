const inputBox = document.querySelector("input");
const button = document.getElementById("clear");

let arr = [];
const regex = /[+\-*=/]{2}/;
// const regex2 = /[+\-*=./]/;

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
  const joinedArr = arr.join("");

  const sliced = joinedArr.slice(0, -1);
  const evaluated = eval(sliced);
  inputBox.value = evaluated;
  arr = [];
  arr.push(evaluated);
}

addEventListener("click", function (e) {
  e.preventDefault();
  const input = e.target.dataset[e.target.id];

  if (e.target.tagName === "BUTTON") {
    inputBox.value += input;
    arr.push(input);
    adjustFontSize();

    if (regex.test(inputBox.value) === true) {
      arr.pop();
      inputBox.value = inputBox.value.slice(0, -1);
    }
    if (input === "C") {
      clearDisplayBomb();
    }
    if (input === "=") {
      equals();
    }
  }
  console.log(arr);
  console.log(inputBox.value);
});

// if (regex2.test(inputBox.value) === true) {
//   arr.shift();
//   inputBox.value = inputBox.value.slice(0, -1);
// }
