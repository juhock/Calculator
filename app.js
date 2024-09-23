const inputBox = document.querySelector("input");
const button = document.getElementById("clear");

let arr = [];
const regex = /[+\-*=/]{2}/;
const regex2 = /[+\-*=./]/;

function clearDisplay() {
  button.style.backgroundImage = "url('./media/atomic.png')";

  setTimeout(() => {
    button.style.backgroundImage = "url('./media/download.png')";
  }, 500);

  inputBox.value = "";
  arr = [];
}

// create function for = button (calculate())
// create function adjustFontSize() for display

addEventListener("click", function (e) {
  e.preventDefault();
  const input = e.target.dataset[e.target.id];

  if (e.target.tagName === "BUTTON") {
    inputBox.value += input;
    arr.push(input);

    if (regex2.test(inputBox.value) === true) {
      arr.shift();
      inputBox.value = inputBox.value.slice(0, -1);
    }

    if (regex.test(inputBox.value) === true) {
      arr.pop();
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (input === "C") {
      clearDisplay();
    } else if (input === "=") {
      if (inputBox.value === "") {
        return;
      } else {
        const joinedArr = arr.join("");

        const sliced = joinedArr.slice(0, -1);
        const evaluated = eval(sliced);
        inputBox.value = evaluated;
        arr = [];
        arr.push(evaluated);
      }
    }
  }
  console.log(arr);
  console.log(inputBox.value);
});
