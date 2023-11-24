const inputV = document.getElementById("input-value");
//const btns = document.getElementById("btn")
const passwordform = document.querySelector(".password");
const msg = document.querySelector(".msg");
const success = document.querySelector(".success");
window.addEventListener("DOMContentLoaded", function () {
  // Handlesubmit()
  passwordform.addEventListener("submit", function (e) {
    e.preventDefault();
    let password = inputV.value;
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[0-9a-zA-Z!@#$%^&*()_+]{8,}$/;

    let lowercase = /[a-z]/;
    let uppercase = /[A-Z]/;
    let length = /[1-9]/;
    let symbols = /[@#$%&^/}()!]/;

    if (
      uppercase.test(password) &&
      lowercase.test(password) &&
      length.test(password) &&
      symbols.test(password)
    ) {
      success.innerHTML = "valid password";
      setTimeout(() => success.remove(), 1000);
    } else {
      msg.innerHTML = "invalid password";
      setTimeout(() => msg.remove(), 2000);
    }
    setbackToDefault();
    // console.log(password)
  });
});

function setbackToDefault() {
  inputV.value = "";
}
