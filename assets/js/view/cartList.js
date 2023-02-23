/**
 * Takes the list of cart item and displays on UI
 * @param {*} cartList
 */
export function renderCartList(cartList) {
  if(cartList.length === 0) {
    renderEmptyCart();
    return;
  }

  const productsCart = document.querySelector(".products-cart");
  const productsCartFragment = document.createDocumentFragment();

  productsCart.innerHTML = "";

  for (let i = 0; i < cartList.length; i++) {
    const { id, title } = cartList[i];
    const cartListItem = createCartItem(id, title);
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
function createCartItem(id, title) {
  const cartListItem = document.createElement("li");
  cartListItem.classList.add("cart-item");

  cartListItem.innerHTML = `
          <div class="cart-item-id">${id}</div>
          <div class="cart-item-title">${title}</div>
        `;

  return cartListItem;
}
