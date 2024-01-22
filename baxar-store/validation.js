const form = document.querySelector("#form");
const forminput = document.querySelector("#forminput");
const password = document.querySelector("#password");
const nameka = document.querySelector("#name");
const gmail = document.querySelector("#gmail");
const submitbtn = document.querySelector("#submit");
let msg = document.querySelector('.msg')
let success = document.querySelector('.success')


form.addEventListener("submit", (e) => {
  e.preventDefault()
  let passvalue = password.value;
  console.log(passvalue);
  let lowercase = /[a-z]/;
  let uppercase = /[A-Z]/;
  //let length = /[1-8]/;
  let length = /.{8,}/;
  let symbols = /[@#$%&^/}()!]/;

  if (
    uppercase.test(passvalue) &&
    lowercase.test(passvalue) &&
    length.test(passvalue) &&
    symbols.test(passvalue)
  ) {
    success.innerHTML = "valid password";
    setTimeout(() => success.remove(), 2000);
  } else {
    msg.innerHTML = "password must contain at least 8 number,uppercase character and symbol";
    setTimeout(() => msg.remove(), 2000);
  }
  console.log(passvalue)
  setbackToDefault();
});

function setbackToDefault() {
  password.value = "";
  nameka.value = ''
  gmail.value = ''
}

