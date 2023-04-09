import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { createContext } from "react";

export const ProductsContext = createContext([]);

const App = () => {
  const products = useLoaderData();
  // console.log(products);
  return (
    <>
      <ProductsContext.Provider value={products}>
        <Header></Header>
        <div className="min-h-[calc(100vh-157px)]">
          <Outlet />
        </div>
        <Footer></Footer>
      </ProductsContext.Provider>
    </>
  );
};

export default App;
