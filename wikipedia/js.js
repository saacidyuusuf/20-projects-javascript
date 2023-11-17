const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=10&format=json&origin=*&srsearch=";

const field = document.querySelector(".field");
const form = document.querySelector(".form");
const submit = document.querySelector(".submit");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let value = field.value;
  if (!value) {
    result.innerHTML = "no value";
    return;
  } else {
    fetchValue(value);
  }
  console.log(value);
  field.value = "";
});

let fetchValue = async (value) => {
  result.innerHTML = `<div>loading</div>`;
  try {
    let response = await fetch(`${url} ${value}`);
    let data = await response.json();
    const dataResult = data.query.search;
    console.log(data);
    if (dataResult.length < 1) {
      result.innerHTML = `<div>there is no data on that thing</div>`;
      return;
    }
    displayResult(dataResult);
  } catch (err) {
    result.innerHTML = "<div>there was an error</div>";
  }
}

let displayResult = (data) => {
  let datalist = data.map((datas) => {
    const { title, snippet, pageid } = datas;
    return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
        <h4>${title}</h4>
        <p>${snippet}</p>
        </a>`;
  }).join("");
  result.innerHTML =
   `<div class='data'>${datalist}</div>`;
};

