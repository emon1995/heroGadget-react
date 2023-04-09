import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { createContext, useState } from "react";
import Modal from "./components/Modal.jsx";

export const ProductsContext = createContext([]);
export const CartContext = createContext([]);

const App = () => {
  const { products, initialCart } = useLoaderData();
  let [isOpen, setIsOpen] = useState(false);

  const cartAlert = sessionStorage.getItem("alert");

  if (initialCart.length > 0 && cartAlert !== "true") {
    setIsOpen(true);
    sessionStorage.setItem("alert", true);
  }
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
          <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        </CartContext.Provider>
      </ProductsContext.Provider>
    </>
  );
};

export default App;
