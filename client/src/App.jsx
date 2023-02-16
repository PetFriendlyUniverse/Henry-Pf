import { Routes, Route, useLocation } from "react-router-dom";
import Shop from "./pages/ecommerce/Shop/Shop";
import Landing from "./pages/Landing/Landing";
import ProductDetail from "./pages/ecommerce/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ecommerce/ShoppingCart/ShoppingCart";
import Checkout from "./pages/ecommerce/Checkout/Checkout";
import FormProfile from "./pages/ecommerce/Forms/FormProfile/FormProfile";
import Profile from "./pages/ecommerce/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/footer/footer";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="App min-h-screen">
      {pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/detail/:id" element={<ProductDetail />} />
        <Route path="/shop/shoppingcart" element={<ShoppingCart />} />
        <Route path="/shop/checkout" element={<Checkout />} />
        <Route path="/register" element={<FormProfile />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
