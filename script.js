const swiper = new Swiper('.swiper', {
  //enable hash navigation
  hashNavigation: true,
});

const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartTable = document.querySelector(".cart-table");

let cartItems = [];

function addToCart(event) {
  const productCard = event.target.closest(".product-card");
  const productImage = productCard.querySelector("img").src;
  const productName = productCard.querySelector("h1").textContent;
  const productDescription = productCard.querySelector("p").textContent;
  const productSize = productCard.querySelector("#product-size").value;
  const productColor = productCard.querySelector("#product-color").value;
  const productQuantity = productCard.querySelector("#product-quantity").value;

  const cartItem = {
    image: productImage,
    name: productName,
    description: productDescription,
    size: productSize,
    color: productColor,
    quantity: productQuantity,
  };

  cartItems.push(cartItem);

  updateCartTable();
}

function updateCartTable() {
  cartTable.innerHTML = `
    <thead>
      <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Description</th>
        <th>Size</th>
        <th>Color</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      ${cartItems
        .map((item, index) => {
          return `
            <tr>
              <td><img src="${item.image}" alt="${item.name}"></td>
              <td>${item.name}</td>
              <td>${item.description}</td>
              <td>${item.size}</td>
              <td>${item.color}</td>
              <td><input type="number" value="${item.quantity}" min="1" max="10" data-index="${index}"></td>
              <td><button class="remove-from-cart" data-index="${index}">Remove</button></td>
            </tr>
          `;
        })
        .join("")}
    </tbody>
  `;

  const quantityInputs = cartTable.querySelectorAll('input[type="number"]');
  quantityInputs.forEach((input) =>
    input.addEventListener("input", updateQuantity)
  );

  const removeButtons = cartTable.querySelectorAll(".remove-from-cart");
  removeButtons.forEach((button) =>
    button.addEventListener("click", removeFromCart)
  );
}

function updateQuantity(event) {
  const index = event.target.dataset.index;
  const quantity = event.target.value;
  cartItems[index].quantity = quantity;

  updateCartTable();
}

function removeFromCart(event) {
  const index = event.target.dataset.index;
  cartItems.splice(index, 1);

  updateCartTable();
}

addToCartButtons.forEach((button) =>
  button.addEventListener("click", addToCart)
);

const searchForm = document.querySelector(".search-form");
const productCards = document.querySelectorAll(".product-card");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const searchTerm = searchForm.querySelector('input[type="text"]').value.toLowerCase();

  productCards.forEach((card) => {
    const productName = card.querySelector("h1").textContent.toLowerCase();
    const productDescription = card.querySelector("p").textContent.toLowerCase();

    if (productName.includes(searchTerm) || productDescription.includes(searchTerm)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
