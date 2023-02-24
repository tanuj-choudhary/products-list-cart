import { state } from "../main.js"

/**
 * Adds a product to cart
 * @param {object} product 
 */
export function addProductToCart(product) {
  const { id, title, price } = product;

  if (id in state.cartList) {
    state.cartList[id].qty++;
    state.cartList[id].price = state.cartList[id].qty * product.price;
  } else {
    state.cartList[id] = { id, title, price, qty: 1 };
  }
}
