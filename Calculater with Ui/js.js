//
const numbers = document.querySelectorAll(".numbers");
const displayCalculation = document.querySelector(".display");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const plus = document.querySelector(".plus");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".ac");
const operator = document.querySelectorAll(".operator");

let input = "";



operator.forEach((operators) => {
  operators.addEventListener("click", () => {
    input += operators.textContent;
    displayCalculation.innerHTML = input;
  });
});

equal.addEventListener("click", () => {
  let value = eval(displayCalculation.innerHTML);
  displayCalculation.innerHTML = value;
  input = value;
});

numbers.forEach((num) => {
  num.addEventListener("click", () => {
    input += num.textContent;
    displayCalculation.innerHTML = input;
  });
});

ac.addEventListener("click", () => {
  displayCalculation.innerHTML = '';
  input = ''
});


