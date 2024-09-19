const inputBox = document.querySelector("input");
const button = document.getElementById("clear");

//targets button 7
// const btn7 = document.getElementById("seven");
// const btn7Val = +btn7.dataset.seven;
let arr = [];

const regex = /[+\-*/]{2}/;

addEventListener("click", function (e) {
  e.preventDefault();
  const input = e.target.dataset[e.target.id];

  if (e.target.tagName === "BUTTON") {
    inputBox.value += input;
    arr.push(input);

    if (regex.test(inputBox.value) === true) {
      arr.pop();
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (input === "C") {
      button.style.backgroundImage = "url('./media/atomic.png')";

      setTimeout(() => {
        button.style.backgroundImage = "url('./media/download.png')";
      }, 500);

      inputBox.value = "";
      arr = [];
    } else if (input === "=") {
      const joinedArr = arr.join("");

      const sliced = joinedArr.slice(0, -1);
      const evaluated = eval(sliced);
      inputBox.value = evaluated;
      arr = [];
      arr.push(evaluated);
    }
  }
});
