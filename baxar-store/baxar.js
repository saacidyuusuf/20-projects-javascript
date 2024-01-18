const cartka = document.querySelector("#cartka");
const cartbtn = document.querySelector(".hide");
const menubtn = document.querySelector("#menu-btn");
const dispalyrow = document.querySelector(".row");
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const checkout = document.querySelector(".checkout");
const backtoshop = document.querySelector(".backtoshop");
const isItEmpty = document.querySelector(".isItEmpty");
const notification = document.querySelector(".notif");
const counters = document.querySelectorAll('.count')

const addToCartButtons = document.querySelectorAll(".cart");
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

const updateCartNumber = () => {
  const cartNumber = document.querySelector(".cartNumber");
  cartNumber.textContent = cartCounter;
};
let cart = [];
let cartCounter = 0;

window.addEventListener("DOMContentLoaded", () => {
  showLaptops(store);
});

const showLaptops = (laptops, searchQuery = "") => {
  let filteredLaptops = laptops;

  if (searchQuery) {
    filteredLaptops = laptops.filter((laptop) =>
      laptop.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  let displaylaptops = filteredLaptops
    .map((lap) => {
      const { id, title, text, img, price } = lap;
      return `<div class="col-3" data-id="${id}">
      <img class="wow" src=${img} alt="our labary" />
      <div class="info">
      <button class="cart">Add to Cart</button>
        <h4>${title}</h4>
        <p>${price}</p>
        <span class="details">Details</span>
      </div>
    </div>`;
    })
    .join("");
  dispalyrow.innerHTML = displaylaptops;

  const addToCartButtons = document.querySelectorAll(".cart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const laptopItem = event.target.closest(".col-3");
      const laptopId = laptopItem.dataset.id;
      const selectedLaptop = laptops.find(
        (lap) => lap.id === parseInt(laptopId)
      );

      if (selectedLaptop) {
        const laptopIndex = cart.findIndex(
          (lap) => lap.id === selectedLaptop.id
        );

        if (laptopIndex === -1) {
          button.innerHTML = "Added to Cart";
          displayCartItem(selectedLaptop);
          cartCounter++;

          notification.innerHTML = `${selectedLaptop.title} added to the cart`;
          notification.classList.add("show");
          setTimeout(() => {
            notification.classList.remove("show");
          }, 2000);

          isItEmpty.innerHTML = "you have items in cart";
          toggle.classList.add("showitems");
          cart.push(selectedLaptop);
          updateCartNumber();
          calculateTotalPrice();
        } else {
          button.innerHTML = "Add to Cart";
          const cartItem = document.getElementById(
            `cart-item-${selectedLaptop.id}`
          );
          cartItem.remove();
          cart.splice(laptopIndex, 1);
          cartCounter--;
        }
        updateCartNumber();
        calculateTotalPrice();
      }
    });
  });
  /* redirect to details  */
  const detailsButton = document.querySelectorAll(".details");

  detailsButton.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.stopPropagation();
      const laptopItem = event.target.closest(".col-3");
      const laptopId = laptopItem.dataset.id;
      const detailsPageUrl = `store.html?id=${laptopId}`;
      window.location.href = detailsPageUrl;
    });
  });

  /* redirect to details end */
};

/* create item elemeents start */
const displayCartItem = (laptop) => {
  const cartItems = document.querySelector(".cart-items");

  const cartItem = document.createElement("div");
  cartItem.classList.add("item");
  cartItem.id = `cart-item-${laptop.id}`;

  const imgQuantity = document.createElement("div");
  imgQuantity.classList.add("imgQuantity");

  const img = document.createElement("img");
  img.src = laptop.img;
  img.alt = laptop.title;

  const title = document.createElement("h4");
  title.textContent = laptop.title;

  const price = document.createElement("span");
  price.textContent = `Price: ${laptop.price}$`;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove");
  removeButton.textContent = "remove";
  const addToCartButtons = document.querySelectorAll(".cart");

  removeButton.addEventListener("click", () => {
    const cartItem = removeButton.closest(".item");
    cartItem.remove();
    addToCartButtons.forEach((button) => {
      button.innerHTML = "Add to Cart";
    });
    const laptopIndex = cart.findIndex((lap) => lap.id === laptop.id);
    if (laptopIndex !== -1) {
      cart.splice(laptopIndex, 1);
      cartCounter--;
      updateCartNumber();
      calculateTotalPrice();
    }
    if (cart < 1) {
      isItEmpty.innerHTML = "you shop cart is empty";
    }
  });

  const quantityDiv = document.createElement("div");

  const increaseButton = document.createElement("i");
  increaseButton.classList.add("fa-solid", "fa-angle-up");
  increaseButton.id = `up-${laptop.id}`;

  let quantityDisplay = document.createElement("p");
  quantityDisplay.id = `quantity-${laptop.id}`;
  quantityDisplay.textContent = "1";
  quantityDisplay.classList.add("Quantity");

  let decreaseButton = document.createElement("i");
  decreaseButton.classList.add("fa-solid", "fa-angle-down");
  decreaseButton.id = `down-${laptop.id}`;

  quantityDiv.appendChild(increaseButton);
  quantityDiv.appendChild(quantityDisplay);
  quantityDiv.appendChild(decreaseButton);

  imgQuantity.appendChild(img);
  imgQuantity.appendChild(title);
  imgQuantity.appendChild(price);
  imgQuantity.appendChild(removeButton);
  imgQuantity.appendChild(quantityDiv);

  /* const button = createElement('button')
  button.classList.add('checkout')
  cartItem.appendChild(button)
  button.textContent = 'checkout'  */

  cartItem.appendChild(imgQuantity);
  cartItems.appendChild(cartItem);

  /* create item elemeents end */

  /* quantity increase */
  let quantityCount = 1;

  increaseButton.addEventListener("click", () => {
    quantityCount++;
    quantityDisplay.textContent = quantityCount;
    calculateTotalPrice();
  });

  decreaseButton.addEventListener("click", () => {
    if (quantityCount > 0) {
      quantityCount--;
      quantityDisplay.textContent = quantityCount;
      calculateTotalPrice();
    }
  });
  /* quantity increase */
};

/* total of items in cart */

const calculateTotalPrice = () => {
  const totalBtn = document.getElementById("total");
  let totalPrice = 0;

  cart.forEach((laptop) => {
    const laptopItem = document.getElementById(`cart-item-${laptop.id}`);
    const quantity = parseInt(
      laptopItem.querySelector(".Quantity").textContent
    );
    totalPrice += laptop.price * quantity;
  });

 

  totalBtn.textContent = `$${totalPrice}`;
};

/* hooos basics */

const displaycart = () => {
  cartka.addEventListener("click", () => {
    toggle.classList.toggle("showitems");
  });

  cart.forEach((laptop) => {
    displayCartItem(laptop);
    saveCartToLocalStorage(laptop);
  });
};
displaycart();

const displaymenu = () => {
  menubtn.addEventListener("click", () => {
    menu.classList.toggle("show-menu");
  });
};

displaymenu();


/* product we selled count */

counters.forEach((countwalba) =>{
  countwalba.innerHTML = '0'
  const countUpdate = () =>{
    const target = Number(
      countwalba.getAttribute('data-target')
    )
    //kan kore numbarad dataset bala so qday
    const count = Number(countwalba.innerHTML)
    //kan kore string aa number lo badalay
    const inc = target / 50
    if(count < target){
      countwalba.innerHTML = 
      `${Math.ceil(count + inc)}`
      setTimeout(countUpdate,20)
      //marwalbo count wxa ku darta 
      // target oo lo qaybiyay 200
    }else{
      countwalba.innerHTML = target
    }
  }
  countUpdate()
})

backtoshop.addEventListener("click", () => {
  cartka.addEventListener("click", () => {
    toggle.classList.remove("showitems");
  });
  window.location.replace("/baxar-store/stores.html");
});

/* window.addEventListener('click', function(event) {
  if (!cartka.contains(event.target)) {
      toggle.classList.remove("showitems");
  }
}); */

/* Search laptop */

const search = document.querySelector(".search");
search.addEventListener("keyup", () => {
  const searchQuery = search.value;
  showLaptops(store, searchQuery);
});

checkout.addEventListener("click", () => {
  if (cart.length < 1) {
    alert("add product to the cart");
  } else {
    alert("Thank for purchasing our Product");
  }
});
