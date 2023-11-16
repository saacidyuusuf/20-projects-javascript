const calculatevalue = document.querySelector(".calculate");
const btnCalculate = document.querySelector(".btnCalculate");
const msgc = document.querySelector(".msgc");
const result = document.querySelector(".result");

btnCalculate.addEventListener("click", (e) => {
  e.preventDefault();
  let value = calculatevalue.value;
  console.log(value);
  let operators = ["+", "-", "*", "/"];

  if (value == "") {
    msgc.innerHTML = "enter 2 number  and opertor";
    setTimeout(() => msgc.remove(), 5000);
    return;
  }
  const regex = /(\d+)([+\-*/])(\d+)/;
  // /d stands for 0 ilaa 9 + la socotana waa
  //in in numberada ay bdan karan wye () ayku
  // dhaxjiarana waa in uu group ka dhigo
  //laguna hayo meshas digtiska
  let matches = value.match(regex);

  /* let [num1, operator, num2] = value.split("");*/

  if (!matches) {
    msgc.innerHTML =
      "Invalid input. Please enter two numbers and a valid operator.";
    setTimeout(() => msgc.remove(), 5000);
    return;
  }
  const Num1 = parseFloat(matches[1]);
  const operator = matches[2];
  const Num2 = parseFloat(matches[3]);

  if (!operators.includes(operator)) {
    msgc.innerHTML = "Invalid operator";
    setTimeout(() => msgc.remove(), 5000);
    return;
  }
  let resultValue;
  switch (operator) {
    case "+":
      resultValue = Num1 + Num2;
      break;
    case "-":
      resultValue = Num1 - Num2;
      break;
    case "*":
      resultValue = Num1 * Num2;
      break;
    case "/":
      if (Num2 === 0) {
        msgc.innerHTML = "Division by zero is not allowed.";
        setTimeout(() => msgc.remove(), 1000);
        return;
      }
      resultValue = Num1 / Num2;
      break;
    default:
      msgc.innerHTML = "Invalid operator.";
      setTimeout(() => msgc.remove(), 1000);
      return;
  }
  msgc.textContent = "";
  result.textContent = `Result: ${resultValue}`;
  console.log(result);
  calculatevalue.value = "";
});