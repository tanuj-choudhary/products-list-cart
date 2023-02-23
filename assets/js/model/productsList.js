import { fetchProducts } from "../api/products.js";
import { state } from "../main.js";

/**
 * Get products data and update the global state
 */
export async function updateProducts() {
  try {
    const productsList = await fetchProducts();
    state.productsList.data = productsList;
  } catch (error) {
    state.productsList.error = error;
  }
};

