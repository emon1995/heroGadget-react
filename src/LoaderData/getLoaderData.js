import { getShoppingCart } from "../utils/fakeDB";

export const getProductsAndCartData = async () => {
  const res = await fetch("products.json");
  const products = await res.json();
  //   console.log(data);

  const getCartData = getShoppingCart();
  const initialCart = [];

  for (const id in getCartData) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      addedProduct.quantity = getCartData[id];
      initialCart.push(addedProduct);
    }
  }

  return { products, initialCart };
};
