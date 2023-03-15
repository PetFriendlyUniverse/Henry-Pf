import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import blog from "../../assets/general/blog.svg";
import shop from "../../assets/general/shop.svg";
import services from "../../assets/general/services.svg";
import about from "../../assets/general/about.svg";
import SearchForm from "./components/SearchForm";
import DropdownUser from "./components/DropdownUser";
import login from "../../assets/general/login.svg";
import DropdownShop from "./components/DropdownShop";
import { useLocation } from "react-router-dom";

function NavBarPrueba() {
  const location = useLocation();
  const isShopPage = location.pathname.includes("shop");

  // Logica de usuario
  const token = localStorage.getItem("token");
  // -------------------------------------
  const [active, setActive] = useState(false);
  // ---------------------------
  const menu = useRef(null);
  const toggleSvgBars = () => {
    setActive(!active);
    menu.current.classList.toggle("hidden");
  };
  const selectOption = () => {
    setActive(!active);
    menu.current.classList.add("hidden");
  };

  let activeClassName = "border-b border-white ";

  return (
    <nav className="sticky top-0  z-50 flex w-full flex-col items-center justify-between bg-russianviolet py-4 px-5 ">
      {/* Contenedor flex logo y button mobile */}
      <div className="flex w-full items-center justify-between    pb-2">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14"
          />
        </Link>
        {/* Button bars mobile */}
        <div className="block xl:hidden">
          <button onClick={toggleSvgBars}>
            {!active ? (
              <svg
                fill="#ffffff"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1792 1792"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>fiction</title>{" "}
                  <path d="M1673.9,1363.2L1673.9,1363.2c0,52.3-42.4,94.3-94.3,94.3H212.7c-52.3,0-94.3-42.4-94.3-94.3l0,0 c0-52.3,42.4-94.3,94.3-94.3h1366.8C1631.5,1268.5,1673.9,1310.9,1673.9,1363.2z"></path>{" "}
                  <path d="M1673.9,895.6L1673.9,895.6c0,52.3-42.4,94.3-94.3,94.3H213c-52.3,0-94.3-42.4-94.3-94.3l0,0c0-52.3,42.4-94.3,94.3-94.3 h1366.6C1631.5,800.8,1673.9,843.2,1673.9,895.6z"></path>{" "}
                  <path d="M1673.9,427.9L1673.9,427.9c0,52.3-42.4,94.3-94.3,94.3H212.7c-52.3,0-94.3-42.4-94.3-94.3l0,0c0-52.3,42.4-94.3,94.3-94.3 h1366.8C1631.5,333.2,1673.9,375.6,1673.9,427.9z"></path>{" "}
                </g>
              </svg>
            ) : (
              <svg
                fill="#ffffff"
                height="20px"
                width="20px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1792 1792"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <title>fiction</title>{" "}
                  <path d="M1673.9,1363.2L1673.9,1363.2c0,52.3-42.4,94.3-94.3,94.3H212.7c-52.3,0-94.3-42.4-94.3-94.3l0,0 c0-52.3,42.4-94.3,94.3-94.3h1366.8C1631.5,1268.5,1673.9,1310.9,1673.9,1363.2z"></path>{" "}
                  <path d="M1673.9,895.6L1673.9,895.6c0,52.3-42.4,94.3-94.3,94.3H659c-52.3,0-94.3-42.4-94.3-94.3l0,0c0-52.3,42.4-94.3,94.3-94.3 h920.6C1631.5,800.8,1673.9,843.2,1673.9,895.6z"></path>{" "}
                  <path d="M1673.9,427.9L1673.9,427.9c0,52.3-42.4,94.3-94.3,94.3H212.7c-52.3,0-94.3-42.4-94.3-94.3l0,0c0-52.3,42.4-94.3,94.3-94.3 h1366.8C1631.5,333.2,1673.9,375.6,1673.9,427.9z"></path>{" "}
                </g>
              </svg>
            )}
          </button>
        </div>
      </div>
      {/* Contenedor links ([ "shop", "services", "aboutUs", "userMenu"]) */}
      <div
        ref={menu}
        className=" hidden  w-full pt-5 xl:absolute  xl:right-0  xl:top-7 xl:flex  xl:w-[900px] xl:items-center xl:gap-3  xl:p-0 xl:pt-0   2xl:top-6 2xl:right-0  "
      >
        {/* link to shop */}
        <NavLink
          onClick={selectOption}
          to="/shop"
          className="flex w-full gap-3 py-3 text-cornflowerblue "
        >
          {({ isActive }) => (
            <div
              className={`${
                isActive ? activeClassName : undefined
              } flex w-full  gap-3 pb-1 lg:justify-center`}
            >
              <img src={shop} alt="" />
              <span className="font-bold uppercase">tienda</span>
            </div>
          )}
        </NavLink>
        {/* link to services */}
        <NavLink
          onClick={selectOption}
          to="/services"
          className="flex w-full gap-3 py-3 text-cornflowerblue "
        >
          {({ isActive }) => (
            <div
              className={`${
                isActive ? activeClassName : undefined
              } flex w-full gap-3 pb-1 lg:justify-center`}
            >
              <img src={services} alt="" />
              <span className="font-bold uppercase">servicios</span>
            </div>
          )}
        </NavLink>
        {/* link to blog */}
        <NavLink
          onClick={selectOption}
          to="/adopcion/blog"
          className="flex w-full gap-3 py-3 text-cornflowerblue "
        >
          {({ isActive }) => (
            <div
              className={`${
                isActive ? activeClassName : undefined
              } flex w-full  gap-3 pb-1 lg:justify-center`}
            >
              <img src={blog} alt="" />
              <span className="font-bold uppercase">blog</span>
            </div>
          )}
        </NavLink>
        {/* Link to about */}
        <NavLink
          onClick={selectOption}
          to="/about"
          className="flex w-full gap-3 py-3 text-cornflowerblue  "
        >
          {({ isActive }) => (
            <div
              className={`${
                isActive ? activeClassName : undefined
              } flex w-full gap-3 pb-1 lg:justify-center lg:gap-2 xl:gap-3`}
            >
              <img src={about} alt="" />
              <span className=" font-bold uppercase">sobre nosotros</span>
            </div>
          )}
        </NavLink>
        {/* dropdown menu User */}
        {token ? (
          <DropdownUser />
        ) : (
          <NavLink
            onClick={selectOption}
            className="flex w-full justify-center gap-3 py-3 text-cornflowerblue  "
            to={"/login"}
          >
            {({ isActive }) => (
              <div
                className={`${
                  isActive ? activeClassName : undefined
                } flex w-full gap-3 pb-1 lg:justify-center lg:gap-2 xl:gap-3`}
              >
                <img src={login} alt="" />
                <span className=" font-bold uppercase">ingresar</span>
              </div>
            )}
          </NavLink>
        )}
      </div>

      {/* contenedor serchBar and modalShop */}
      <div className=" flex w-full flex-col items-center justify-center gap-4  sm:w-[500px] md:w-full md:flex-row md:justify-end lg:h-16 2xl:absolute 2xl:left-36  2xl:top-4 2xl:w-[600px] 2xl:flex-row-reverse ">
        {/* searchBar  */}
        {isShopPage && <SearchForm />}
        {/* Renderiza SearchForm solo en la página de tienda */}
        {/* ShopModal */}
        {isShopPage && <DropdownShop />}
      </div>
    </nav>
  );
}

export default NavBarPrueba;
