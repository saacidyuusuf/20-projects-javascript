const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const random = document.querySelector("#random");

const names = document.querySelector("#name");
const job = document.querySelector("#job");
const content = document.querySelector(".content");
const img = document.getElementById("img");

const testi = [
  {
    name: `saacid`,
    job: `coder`,
    text: `assumenda nesciunt consectetur voluptate asperiores, sunt cum vitae eligendi eveniet sequi tempore aperiam laborum.
    Saepe provident nesciunt repudiandae debitis quod accusamus ex delectusque a minima et nostrum excepturi, esse quisquam enim placeat dicta facere
    doloribus beatae at pariatur. Aspernat`,
    img: ".//images/nin.jpg",
  },
  {
    name: `jamac`,
    job: `banbay`,
    text: `bcaecati tempore nobis natus excepturi laboriosam inventore fuga quas explicabo minima nemo voluptates,
    itaque dignissimos sed eos libero dolores architecto. Aliquam magnam non minima similique perspiciatis velit
    assumenda ntate a`,
    img: ".//images/nin1.jpg",
  },
  {
    name: `cumar`,
    job: `maraale`,
    text: `oluptate asperiores, sunt cum vitae eligendi eveniet sequi tempore aperiam laborum.
    Saepe, provident nesciunt repudiandae debitis quod accusamus ex delectus
     in ullam aut neque illo totam maiores Id voluptas atque a minima et nostrum excepturi,
    esse quisquam enim placeat dicta facere`,
    img: `./images/nin2.jpg`,
  },
];

let currentone = 0;

document.addEventListener("DOMContentLoaded", () => {
  showperson();
});


function showperson() {
  /* name.innerHTML = review[currentone].name;
  img.innerHTML = review[currentone].img;
  job.innerHTML = review[currentone].job;
  content.innerHTML = review[currentone].text; */

  const item = testi[currentone];
  names.innerHTML = item.name;
  job.innerHTML = item.job;
  content.innerHTML = item.text;
  img.src = testi[currentone].img;
}


next.addEventListener('click', () => {
    currentone++
    if(currentone > testi.length){
        currentone = 0
    }
    showperson()
})

prev.addEventListener('click', () => {
    currentone++
    if(currentone > testi.length){
        currentone = 0
    }
    showperson()
})

random.addEventListener('click', () =>{
    currentone = Math.floor(Math.random() * testi.length)

    showperson()
})





