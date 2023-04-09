export const addToDB = (id) => {
  const shoppingCart = getShoppingCart();
  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

export const getShoppingCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

export const removeFromDB = (id) => {
  const storedCart = JSON.parse(localStorage.getItem("shopping-cart"));
  if (storedCart) {
    if (id in storedCart) {
      delete storedCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(storedCart));
    }
  }
};

export const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};
