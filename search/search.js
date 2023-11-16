function search() {
  const input = document.querySelector(".search");
  const titles = document.querySelectorAll("h1");
  const filter = input.value.toLowerCase();

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

  /*  input.addEventListener("keyup", () => {
    titles.forEach((h1) => {
      const text = h1.textContent.toLowerCase();

      h1.style.display = text.includes(filter) ? "" : "none";
    });
  }); */
}
search();
