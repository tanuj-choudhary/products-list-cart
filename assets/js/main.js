import { addProductToCart } from "./model/cartList.js";
import { getProductFromID, updateProducts } from "./model/productsList.js";
import { renderCartList } from "./view/cartList.js";
import { renderProductsList } from "./view/productsList.js";

// productList.data : { id1: product1, id2: product2}
// cartList : { id1: product1, id2: product2}
export const state = {
  productsList: { data: null, error: null },
  cartList: {},
};

(async function() {
  await updateProducts();
  renderCartList(state.cartList);
  renderProductsList(state.productsList);
  setupEventListeners();
})()

function setupEventListeners() {
  document.querySelector(".products-list").addEventListener("click", addToCart);

  function addToCart(e) {
    const id = e.target.closest(".product-item").id;
    const currProduct = getProductFromID(id);
    addProductToCart(currProduct);
    renderCartList(state.cartList);
  }
}