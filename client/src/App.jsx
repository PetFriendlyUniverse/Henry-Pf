import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Shop from "./pages/ecommerce/Shop/Shop";
import Landing from "./pages/Landing/Landing";
import ProductDetail from "./pages/ecommerce/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ecommerce/ShoppingCart/ShoppingCart";
import Checkout from "./pages/ecommerce/Checkout/Checkout";
import FormCreateProduct from "./pages/ecommerce/Forms/FormCreateProduct/FormCreateProduct";
import FormModifyProduct from "./pages/ecommerce/Forms/FormModifyProduct/FormModifyProduct";
import Profile from "./pages/ecommerce/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/footer";
import Login from "./components/Login/Login";

function App() {
  const shopCart = useSelector((state) => state.Products.shopCart);
  const { pathname } = useLocation();
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("shopCart", JSON.stringify(shopCart));
  });
  return (
    <div className="App min-h-screen">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/detail/:id" element={<ProductDetail />} />
        <Route path="/shop/shoppingcart" element={<ShoppingCart />} />
        <Route path="/shop/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile/store/create" element={<FormCreateProduct />} />
        <Route path="/shop/detail/modify/:id" element={<FormModifyProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
