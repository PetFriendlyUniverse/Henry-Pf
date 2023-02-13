import { Routes, Route } from "react-router-dom";
import Shop from "./pages/ecommerce/Shop/Shop";
import Landing from "./pages/Landing/Landing";
import ProductDetail from "./pages/ecommerce/ProductDetail/ProductDetail";
import ShoppingCart from "./pages/ecommerce/ShoppingCart/ShoppingCart";
import Checkout from "./pages/ecommerce/Checkout/Checkout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/detail/:id" element={<ProductDetail />} />
        <Route path="/shop/shoppingcart" element={<ShoppingCart />} />
        <Route path="/shop/checkout" element={<Checkout />} />
      </Routes>
    </div>
  );
}

export default App;
