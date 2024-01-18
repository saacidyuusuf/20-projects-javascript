const store = [
  {
    id: 1,
    title: "hp laptop",
    price: 200,
    text: "laptop 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nemo ullam, pariatur optio fuga impedit! Neque eveniet accusamus aliquam.",
    img: "/baxar-store/images/1.jpg",
  },
  {
    id: 2,
    title: "Mac laptop",
    price: 520,
    text: "laptop 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nemo ullam, pariatur optio fuga impedit! Neque eveniet accusamus aliquam.",
    img: "/baxar-store/images/2.jpg",
  },
  {
    id: 3,
    title: "Linova laptop",
    price: 450,
    text: "laptop 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum nemo ullam, pariatur optio fuga impedit! Neque eveniet accusamus aliquam.",
    img: "/baxar-store/images/3.jpg",
  },
];

const urlParams = new URLSearchParams(window.location.search);
const laptopId = parseInt(urlParams.get("id"));

const selectedLaptop = store.find((lap) => lap.id === laptopId);

if (selectedLaptop) {
  const titleElement = document.querySelector("#title");
  const priceElement = document.querySelector("#price");
  const textElement = document.querySelector("#text");
  const imgElement = document.querySelector("#image");
  const btncart = document.querySelector("#cart");

  titleElement.textContent = selectedLaptop.title;
  priceElement.textContent = `Price: $${selectedLaptop.price}`;
  textElement.textContent = selectedLaptop.text;
  imgElement.src = selectedLaptop.img;
  imgElement.alt = selectedLaptop.title;
}