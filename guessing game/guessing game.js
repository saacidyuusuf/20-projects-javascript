let guesses = 0;
let result = document.querySelector(".result");
let btn = document.querySelector('.btn')

let answer = Math.floor(Math.random() * 10 + 1);


btn.addEventListener('click', () =>{
  let guess = document.getElementById("guessfield").value;
  guesses += 1;
  if(isNaN(guess)){
    result.innerHTML = 'enter a number'
  }
  if (guess == answer) {
    result.innerHTML = `<h1>${answer} is the number it took you  ${guesses} guesses</h1>`;
  } else if (guess < answer) {
    result.innerHTML = `<h1>small</h1>`;
  } else {
    result.innerHTML = `<h1>large</h1>`;
  }
  guess.value = "";
})

btn.onclick = function () {

};

