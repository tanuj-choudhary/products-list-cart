async function fetchProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
}

async function renderProducts() {
  const products = await fetchProducts();

  const productsListElem = document.querySelector(".products-list");
  const productsListFragment = document.createDocumentFragment();

  for (let i = 0; i < products.length; i++) {
    const productListItem = document.createElement("li");
    productListItem.classList.add("product-item");

    productListItem.innerHTML = `
          <div class="product-item-id">${products[i].id}.</div>
          <div class="product-item-title">${products[i].title}</div>
          <button class="add-to-cart">Add to Cart</button>
        `;

    productsListFragment.append(productListItem);
  }

  productsListElem.append(productsListFragment);
}

function renderCart() {
  const productsCart = document.querySelector(".products-cart");

  productsCart.innerHTML = "";

  for (let i = 0; i < cartItems.length; i++) {
    const cartListItem = document.createElement("li");
    cartListItem.classList.add("cart-item");

    cartListItem.innerHTML = `
          <div class="cart-item-id">${cartItems[i].id}</div>
          <div class="cart-item-title">${cartItems[i].title}</div>
        `;

    productsCart.append(cartListItem);
  }
}

const cartItems = [];

(() => {
  renderProducts();

  document.querySelector(".products-list").addEventListener("click", (e) => {
    cartItems.push({
      id: e.target.closest(".product-item").children[0].textContent,
      title: e.target.closest(".product-item").children[1].textContent,
    });

    renderCart();
  });
})();
