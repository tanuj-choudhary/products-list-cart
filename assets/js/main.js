import { updateProducts } from "./model/productsList.js";
import { renderCartList } from "./view/cartList.js";
import {
  renderProductsList,
} from "./view/productsList.js";

export const state = {
  productsList: { data: null, error: null },
  cartList: [],
};

async function init() {
  await updateProducts();
  renderProductsList(state.productsList);
  renderCartList(state.cartList);
  setupEventListeners();
}

function setupEventListeners() {
  document.querySelector(".products-list").addEventListener("click", (e) => {
    state.cartList.push({
      id: e.target.closest(".product-item").children[0].textContent,
      title: e.target.closest(".product-item").children[1].textContent,
    });

    renderCartList(state.cartList);
  });
}

init();