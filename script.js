//Selectors
const productSection = document.querySelector(".productContainer");

//Render Products
const renderProducts = () => {
  products.map((product) => {
    productSection.innerHTML += `
    <div class="productCard">
        <div class="cartSign">
          <p>In Cart</p>
        </div>
        <button class="cardBtn">Add to cart</button>
        <img
          class="productImage"
          src=${product.imgSrc}
          alt=${product.name}
        />
        <hr class="divider" />
        <p class="productTitle" id="blue-flower">${product.name}</p>
        <p class="productPrice">${product.price}</p>
        <div class="ratingContainer">${productRatingHandler(
          product.rate
        )}</div>  
      </div>
    `;
  });
};

//Render Product rating
const productRatingHandler = (productRate) => {
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < productRate) {
      stars += `<img src="assets/star.svg" alt="rating-star" />`;
    } else {
      stars += `<img class="inactiveStar" src="assets/star.svg" alt="rating-star" />`;
    }
  }
  return stars;
};

let cardButtons = document.querySelectorAll(".cardBtn");

let productAdded = false;

const handleProductCart = (ev) => {
  console.log(productAdded);

  console.log(ev.target);
  if (!productAdded) {
    ev.target.innerText = "Remove from cart";
    productAdded = true;
  } else {
    ev.target.innerText = "Add to cart";
    productAdded = false;
  }
};

cardButtons.forEach((btn) => {
  btn.addEventListener("click", (ev) => handleProductCart(ev));
});

renderProducts();
