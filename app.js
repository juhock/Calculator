const inputBox = document.querySelector("input");

addEventListener("click", function (e) {
  e.preventDefault();
  //   console.log(e.target);
  //   console.log(e.target.dataset.seven);
  console.log(e.target.dataset[e.target.id]);
});

//targets button 7
const btn7 = document.getElementById("seven");
const btn7Val = +btn7.dataset.seven;

// console.log(btn7Val);

// console.log(typeof btn7Val);
