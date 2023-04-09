import React, { useContext } from "react";
import { ProductsContext } from "../App";
import ProductCard from "./Cards/ProductCard";
import { addToDB } from "../utils/fakeDB";

const Shop = () => {
  const products = useContext(ProductsContext);

  const handleAddToCart = (product) => {
    console.log(product);
    addToDB(product.id);
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
