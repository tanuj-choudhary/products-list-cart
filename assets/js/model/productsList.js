import { fetchProducts } from "../api/products.js";
import { state } from "../main.js";

/**
 * Get products data and update the global state
 */
export async function updateProducts() {
  try {
    const data = await fetchProducts();

    const productsListObj = data.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});

    state.productsList.data = productsListObj;
  } catch (error) {
    state.productsList.error = error;
  }
}

/**
 * Get product from id
 * @param {string} id
 */
export function getProductFromID(id) {
  return state.productsList.data[id];
}
