/**
 * Takes the list of cart item and displays on UI
 * @param {*} cartList
 */
export function renderCartList(cartList) {
  const cartListArray = Object.values(cartList);
  
  if (cartListArray.length === 0) {
    renderEmptyCart();
    return;
  }

  const productsCart = document.querySelector(".products-cart");
  const productsCartFragment = document.createDocumentFragment();

  productsCart.innerHTML = "";

  for (let i = 0; i < cartListArray.length; i++) {
    const { id, title, qty, price } = cartListArray[i];
    const cartListItem = createCartItem(id, title, qty, price);
    productsCartFragment.append(cartListItem);
  }

  productsCart.append(productsCartFragment);
}

/**
 * Display Empty Cart
 */
function renderEmptyCart() {
  const productsCart = document.querySelector(".products-cart");
  productsCart.innerHTML = "<h1>Your Cart is empty ...</h1>";
}

/**
 * Create a cart item
 * @param {string} id
 * @param {string} title
 * @returns A cart item with id and title
 */
function createCartItem(id, title, qty, price) {
  const cartListItem = document.createElement("li");
  cartListItem.classList.add("cart-item");

  cartListItem.innerHTML = `
          <div class="cart-item-id">${id}</div>
          <div class="cart-item-title">${title}</div>
          <div class="cart-item-qty">x${qty}</div>
          <div class="cart-item-price">$${price}</div>
        `;

  return cartListItem;
}
