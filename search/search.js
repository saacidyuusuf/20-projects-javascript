function search() {
  const input = document.querySelector(".search");
  const titles = document.querySelectorAll("h1");

  input.addEventListener("keyup", (e) => {
    titles.forEach((title) => {
      if (
        title.textContent.toLowerCase().includes(e.target.value.toLowerCase())
      ) {
        title.parentNode.style.display = "block";
      } else {
        title.parentNode.style.display = "none";
        console.log("hello");
      }
    });
  });
}
search();
