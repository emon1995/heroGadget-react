import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { createContext, useState } from "react";

export const ProductsContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  // console.log(products);
  return (
    <>
      <ProductsContext.Provider value={products}>
        <CartContext.Provider value={[cart, setCart]}>
          <Header></Header>
          <div className="min-h-[calc(100vh-157px)]">
            <Outlet />
          </div>
          <Footer></Footer>
        </CartContext.Provider>
      </ProductsContext.Provider>
    </>
  );
};

export default App;
