import React, { useContext } from "react";
import { CartContext, ProductsContext } from "../App";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utils/fakeDB";
import toast from "react-hot-toast";

const Shop = () => {
  const products = useContext(ProductsContext || []);
  const [cart, setCart] = useContext(CartContext || []);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = cart.find((existProduct) => existProduct.id === product.id);

    if (!exists) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      const rest = cart.filter(
        (existProduct) => existProduct.id !== product.id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDB(product.id);
    toast.success("Product Added! 🛒", { autoClose: 500 });
  };

  return (
    <div className="my-container">
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
