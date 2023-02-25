import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Suspense, lazy } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import LandingShop from "./pages/ecommerce/LandingShop/LandingShop";
import About from "./pages/About/About";

// import Shop2 from "./pages/ecommerce/Shop/Shop2";

const Loader = lazy(() => import("./components/Loader/Loader"));
const Shop = lazy(() => import("./pages/ecommerce/Shop/Shop"));
const Services = lazy(() => import("./pages/Services/Services"));

const Landing = lazy(() => import("./pages/Landing/Landing"));
const ProductDetail = lazy(() =>
  import("./pages/ecommerce/ProductDetail/ProductDetail")
);
const ShoppingCart = lazy(() =>
  import("./pages/ecommerce/ShoppingCart/ShoppingCart")
);
const Checkout = lazy(() => import("./pages/ecommerce/Checkout/Checkout"));
const FormCreateProduct = lazy(() =>
  import("./pages/ecommerce/Forms/FormCreateProduct/FormCreateProduct")
);
const Login = lazy(() => import("./components/Login/Login"));
const FormModifyProduct = lazy(() =>
  import("./pages/ecommerce/Forms/FormModifyProduct/FormModifyProduct")
);
const FormModifyUser = lazy(() =>
  import("./pages/ecommerce/Forms/FormModifyUser/FormModifyUser")
);
const Profile = lazy(() => import("./pages/ecommerce/Profile/Profile"));
const NotFound = lazy(() => import("./components/NotFound/NotFound"));

const TestComponent = lazy(() =>
  import("./pages/ecommerce/Forms/FormModifyStore/FormModifyStore")
); //Dejen esto asi para testear sus componentes a ver como se ven o si funcionan, solo cambien la importacion

function App() {
  const shopCart = useSelector((state) => state.Products.shopCart);
  const { pathname } = useLocation();
  window.addEventListener("beforeunload", () => {
    localStorage.setItem("shopCart", JSON.stringify(shopCart));
  });
  return (
    <div className="App min-h-screen">
      {pathname !== "/" && pathname !== "/landingshop" && <NavBar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/services" element={<Services />} />
          <Route path="/landingshop" element={<LandingShop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/detail/:id" element={<ProductDetail />} />
          <Route path="/shop/shoppingcart" element={<ShoppingCart />} />
          <Route path="/shop/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/edit/:id" element={<FormModifyUser />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/store/create" element={<FormCreateProduct />} />
          <Route
            path="/shop/detail/modify/:id"
            element={<FormModifyProduct />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/testcomponent" element={<TestComponent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      ;{pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
