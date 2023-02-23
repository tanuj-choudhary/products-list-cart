/**
 * Takes the list of products and displays on UI
 * @param {*} productsList
 */
export function renderProductsList(productsList) {
  if (productsList.error) {
    renderProductsListError();
    return;
  }

  if(productsList.data.length ===0) {
    renderEmptyProductsList();
    return;
  }

  const productsListElem = document.querySelector(".products-list");
  const productsListFragment = document.createDocumentFragment();

  for (let i = 0; i < productsList.data.length; i++) {
    const { id, title } = productsList.data[i];
    const productListItem = createProductListItem(id, title);
    productsListFragment.append(productListItem);
  }

  productsListElem.append(productsListFragment);
}

/**
 * Display Empty Products List
 */
function renderEmptyProductsList() {
  const productsListElem = document.querySelector(".products-list");
  productsListElem.innerHTML = "<h1> No Products found</h1>";
}

/**
 * Display Error on Products List
 */
function renderProductsListError() {
  const productsListElem = document.querySelector(".products-list");
  productsListElem.innerHTML = "<h1> Error Loading products...</h1>";
}

/**
 * Create a product item
 * @param {string} id
 * @param {string} title
 * @returns A product with id and title
 */
 function createProductListItem(id, title) {
  const productsListItem = document.createElement("li");
  productsListItem.classList.add("product-item");

  productsListItem.innerHTML = `
          <div class="product-item-id">${id}.</div>
          <div class="product-item-title">${title}</div>
          <button class="add-to-cart">Add to Cart</button>
        `;
  
  return productsListItem;
}
