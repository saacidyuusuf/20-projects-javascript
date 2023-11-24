// wxa u bahanthy marka leedahy multilple page hal html index ku jiro
// marka rabto mid inaa so saarto marka midka klena so sarayso in
// sii kowad u boxo

function showpage(page) {
  // in kii hore la qariyo kan kle marku so boxo
  document.querySelectorAll(".qabsasho").forEach((div) => {
    div.style.display = "none";
  });
  document.querySelector(`#${page}`).style.display = "block";
}

// btnada
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("button").forEach((button) => {
    button.onclick = function () {
      showpage(button.dataset.page);
    };
  });
});

// dynamicli inaakuso darto inta html kuso dari lehed u can ask the server
// what part of the page we need to change and replice that part
