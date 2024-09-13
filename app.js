const inputBox = document.querySelector("input");

//targets button 7
// const btn7 = document.getElementById("seven");
// const btn7Val = +btn7.dataset.seven;
let arr = [];

addEventListener("click", function (e) {
  e.preventDefault();
  const input = e.target.dataset[e.target.id];

  if (e.target.tagName === "BUTTON") {
    inputBox.value += input;
    arr.push(input);
    console.log(arr);

    if (input === "C") {
      inputBox.value = "";
      arr = [];
      console.log(arr);
    } else if (input === "=") {
      //join arr
      const joinedArr = arr.join(" ");
      const sliced = joinedArr.slice(0, -1);
      console.log(sliced);
      const evaluated = eval(sliced);
      console.log(evaluated);
      //eval(joinedArr)
      // inputBox.value = evaluated arr);
    }
  }
});
