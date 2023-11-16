const msg = document.querySelector(".msg");
let namefield = document.querySelector(".namefield");
const submit = document.querySelector(".submit");
const list = document.querySelector(".list");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let value = namefield.value;
  console.log(value);
  if (value == "") {
    msg.innerHTML = "enter something";
    setTimeout(() => msg.remove(), 1000);
    return;
  }
  let li = document.createElement("li");
  list.appendChild(li);
  li.innerHTML = `${value}`;
  let remove = document.createElement("button");
  remove.classList.add("remove");
  remove.innerText = "remove";
  li.appendChild(remove);

  remove.addEventListener("click", (e) => {
    e.target.parentElement.remove();
  });

  namefield.value = "";
});
