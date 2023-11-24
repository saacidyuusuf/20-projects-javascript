//
const numbers = document.querySelectorAll(".numbers");
const displayCalculation = document.querySelector(".display");
const minus = document.querySelector(".minus");
const divide = document.querySelector(".divide");
const plus = document.querySelector(".plus");
const equal = document.querySelector(".equal");
const ac = document.querySelector(".ac");
const operator = document.querySelectorAll(".operator");

let input = ''

operator.forEach((operators) => {
  operators.addEventListener("click", () =>{
   /*  operators.style.color = "white";
    operators.style.backgroundColor = "lightgray"; */
    input+= operators.textContent
    displayCalculation.innerHTML = input
  });
});

equal.addEventListener("click", () =>{
  let value = eval(displayCalculation.innerHTML)
  displayCalculation.innerHTML = value;
});

numbers.forEach((num) => {
  num.addEventListener("click", () =>{
    input += num.textContent;
    displayCalculation.innerHTML = input;
  });
});

const handleClear = () => {
  ac.addEventListener("click", (e) => {
    displayCalculation.e.target.value = '';
    input.value = ''
  });
};
handleClear();

/* let handleOperators = (e) => {
  let operator = e.target.textContent;
  console.log(operator);
  //
};

let handleNumbersClick = (e) => {
  displayCalculation.innerHTML = ${e.target.textContent};
}; */

/* const equalButton = () => {
  //evalute experession and display
  //result
  let value = eval(displayCalculation.value)
  displayCalculation.value = value;

};
 */
plus.addEventListener("click", () => {
  plus.style.color = "red";
});