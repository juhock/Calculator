const inputBox = document.querySelector("input");

//targets button 7
// const btn7 = document.getElementById("seven");
// const btn7Val = +btn7.dataset.seven;

addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.tagName === "BUTTON" && e.target.classList.contains("btn")) {
    console.log(e.target.dataset[e.target.id]);
  }
});
