//Selectors
const productSection = document.querySelector(".productContainer");

//cart array
let cart = [];

//Render Products
const renderProducts = () => {
  products.map((product) => {
    productSection.innerHTML += `
      <div class="productCard">
        <div class="cartSign">
          <p>In Cart</p>
        </div>
        <button class="cardBtn" onclick="productShoppingHandler('${
          product.id
        }', this)">
          Add to cart
        </button>
        <img
          alt='${product.name}'
          class="productImage"
          src=${product.imgSrc}
        />
        <hr class="divider" />
        <p class="productTitle">
          ${product.name}
        </p>
        <p class="productPrice">
          ${product.price}
        </p>
        <div class="ratingContainer">
          ${productRatingHandler(product.rate)}
        </div>  
      </div>
      `;
  });
};

//Render Product rating
const productRatingHandler = (productRate) => {
  let ratingSign = "";
  for (let i = 0; i < 5; i++) {
    if (i < productRate) {
      ratingSign += `<img src="assets/star.svg" alt="rating-star" />`;
    } else {
      ratingSign += `<img class="inactiveSign" src="assets/star.svg" alt="rating-star" />`;
    }
  }
  return ratingSign;
};

//add or remove products
const productShoppingHandler = (productId, btnElement) => {
  const addedProduct = products.find((product) => product.id === productId);

  const cartSign = btnElement.parentNode.querySelector(".cartSign");

  if (cart.some((item) => item.id === productId)) {
    cart = cart.filter((item) => item.id !== productId);
    btnElement.innerText = "Add to Cart";
    cartSign.style.display = "none";
  } else {
    cart.push({ ...addedProduct, quantity: 1 });
    btnElement.innerText = "Remove from cart";
    cartSign.style.display = "block";
  }
};

renderProducts();
