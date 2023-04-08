import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-157px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
};

export default App;
