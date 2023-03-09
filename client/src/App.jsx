import { Routes, Route, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
// import FormPassword from "./pages/FormPassword/FormPassword";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./pages/About/About"));
const DashboardAdmin = lazy(() =>
  import("./components/DashboardAdmin/DashboardAdmin")
);
const Landing = lazy(() => import("./pages/Landing/Landing"));
const LandingShop = lazy(() =>
  import("./pages/ecommerce/LandingShop/LandingShop")
);
const LandingServices = lazy(() =>
  import("./pages/Services/LandingServices/LandingServices")
);
const TabStore = lazy(() =>
  import("./pages/ecommerce/Profile/components/TabStore")
);
const TabWalker = lazy(() => import("./pages/Services/Profile/TabWalker"));
const TabDaycare = lazy(() => import("./pages/Services/Profile/TabDaycare"));

const ChangePassword = lazy(() =>
  import("./pages/ChangePassword/ChangePassword")
);
const Adopcion = lazy(() => import("./pages/Adopcion/Adopcion"));

const Shop = lazy(() => import("./pages/ecommerce/Shop/Shop"));
const Services = lazy(() =>
  import("./pages/Services/HomeServices/HomeServices")
);
const WalkerDetail = lazy(() =>
  import("./pages/Services/Detail/DetailWalker/DetailWalker")
);
const DaycareDetail = lazy(() =>
  import("./pages/Services/Detail/DetailDaycare/DetailDaycare")
);
const ProductDetail = lazy(() =>
  import("./pages/ecommerce/ProductDetail/ProductDetail")
);
const Checkout = lazy(() => import("./pages/ecommerce/Checkout/Checkout"));
const Success = lazy(() => import("./pages/ecommerce/Success/Success"));
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

const FormModifyStore = lazy(() =>
  import("./pages/ecommerce/Forms/FormModifyStore/FormModifyStore")
);

const FormCreateStore = lazy(() =>
  import("./pages/ecommerce/Forms/FormCreateStore/FormCreateStore")
);

const FormModifyDaycare = lazy(() =>
  import("./pages/Services/Forms/FormModifyDaycare/FormModifyDaycare")
);
const FormCreateDaycare = lazy(() =>
  import("./pages/Services/Forms/FormCreateDaycare/FormCreateDaycare")
);
const FormModifyWalker = lazy(() =>
  import("./pages/Services/Forms/FormModifyWalker/FormModifyWalker")
);
const FormCreateWalker = lazy(() =>
  import("./pages/Services/Forms/FormCreateWalker/FormCreateWalker")
);

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
          <Route path="/landingservices" element={<LandingServices />} />
          <Route path="/services" element={<Services />} />
          <Route path="/walker/detail/:id" element={<WalkerDetail />} />
          <Route path="/daycare/detail/:id" element={<DaycareDetail />} />
          <Route path="/landingshop" element={<LandingShop />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/detail/:id" element={<ProductDetail />} />
          <Route path="/shop/checkout" element={<Checkout />} />
          <Route path="/shop/success" element={<Success />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/profile/edit/:id" element={<FormModifyUser />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/profile/store/:id" element={<TabStore />} />
          <Route path="/profile/walker/:id" element={<TabWalker />} />
          <Route path="/profile/daycare/:id" element={<TabDaycare />} />
          <Route path="adopcion/blog" element={<Adopcion />} />
          <Route
            path="/profile/store/create/:id"
            element={<FormCreateProduct />}
          />
          <Route
            path="/shop/detail/modify/:id"
            element={<FormModifyProduct />}
          />
          <Route path="/about" element={<About />} />
          {/* <Route path="/loginpassword" element={<FormPassword />} /> */}

          <Route path="/store/create/:id" element={<FormCreateStore />} />
          <Route path="/store/modify/:id" element={<FormModifyStore />} />

          <Route path="/dashboardadmin" element={<DashboardAdmin />} />

          <Route path="/walker/create/:id" element={<FormCreateWalker />} />
          <Route path="/walker/modify/:id" element={<FormModifyWalker />} />

          <Route path="/daycare/create/:id" element={<FormCreateDaycare />} />
          <Route path="/daycare/modify/:id" element={<FormModifyDaycare />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
