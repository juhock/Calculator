const inputBox = document.querySelector("input");

//targets button 7
// const btn7 = document.getElementById("seven");
// const btn7Val = +btn7.dataset.seven;

addEventListener("click", function (e) {
  e.preventDefault();
  const input = e.target.dataset[e.target.id];

  if (e.target.tagName === "BUTTON") {
    inputBox.value += input;
  }

  if (input === "C") {
    inputBox.value = "";
  }
});
