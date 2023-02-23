import { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";

import shop from "../../assets/general/shop.svg";
import services from "../../assets/general/services.svg";
import about from "../../assets/general/about.svg";
import user from "../../assets/general/profile.svg";
import arrowDropdown from "../../assets/arrows/arrowDropdown.svg";
import shopcart from "../../assets/general/shopcart.svg";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { clearShopCart } from "../../redux/features/products/productsSlice";
import deleteBtn from "../../assets/general/delete.svg";
import LinkButton from "../Button/LinkButton";
import Subcard from "../SubCard/Subcard";
import SearchForm from "./components/SearchForm";
import DropdownUser from "./components/DropdownUser";
import login from "../../assets/general/login.svg";

function NavBarPrueba() {
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
  // ----------------------------
  const userMenu = useRef(null);
  const toggleUserMenu = () => {
    userMenu.current.classList.toggle("hidden");
    arrow.current.classList.toggle("rotate-180");
  };
  // ----------------------------
  const arrow = useRef(null);
  let activeClassName = "border-b border-white ";
  // --------------- Logic Shop Modal -------------------- //
  const dispatch = useDispatch();
  const shopCartProducts = useSelector((state) => state.Products?.shopCart);
  const productsIds = Object.keys(shopCartProducts);
  let totalPrice = 0;
  const products = productsIds.map((id) => {
    totalPrice += shopCartProducts[id].amount * shopCartProducts[id].price;
    return shopCartProducts[id];
  });
  const handleDelete = () => {
    totalPrice > 0 &&
      Swal.fire({
        icon: "warning",
        title: "Está seguro de que quiere eliminar su carro de compras?",
        showConfirmButton: true,
        confirmButtonText: "Si",
        showDenyButton: true,
        denyButtonText: "No",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(dispatch(clearShopCart()));
          Swal.fire({
            title: "Productos Eliminados",
            icon: "success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const modalShop = useRef(null);
  const img = useRef(null);
  const handleModalShow = () => {
    modalShop.current.classList.toggle("hidden");
    img.current.classList.toggle("rotate-180");
  };
  return (
    <nav className="sticky top-0  z-50 flex w-full flex-col items-center justify-between bg-russianviolet p-4 2xl:py-5">
      {/* Contenedor flex logo y button mobile */}
      <div className="flex w-full items-center justify-between    pb-2">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16"
          />
        </Link>
        {/* Button bars mobile */}
        <div className="block lg:hidden">
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
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
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
        className=" hidden  w-full pt-5 lg:absolute  lg:right-0  lg:top-7 lg:flex  lg:w-[900px] lg:items-center lg:gap-3  lg:p-0 lg:pt-0   2xl:top-6 2xl:right-0   2xl:w-[750px]"
      >
        {/* link to landing shop */}
        <NavLink
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
              <span className="font-bold uppercase">shop</span>
            </div>
          )}
        </NavLink>
        {/* link to services */}
        <NavLink
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
              <span className="font-bold uppercase">services</span>
            </div>
          )}
        </NavLink>
        {/* Link to about */}
        <NavLink
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
                <span className=" font-bold uppercase">login</span>
              </div>
            )}
          </NavLink>
        )}
      </div>

      {/* contenedor serchBar and modalShop */}
      <div className="xl:w- flex w-full flex-col items-center justify-center gap-4 sm:w-[500px] md:w-full md:flex-row md:justify-end lg:h-16 2xl:absolute 2xl:left-36  2xl:top-4 2xl:w-[800px] 2xl:flex-row-reverse ">
        {/* searchBar  */}
        <SearchForm />

        {/* ShopModal */}
        <div className="flex w-full flex-col items-center  md:relative md:mt-2 md:w-52">
          {/* button modalShop */}
          <button
            onClick={handleModalShow}
            className="flex w-1/2 items-center justify-around  rounded-xl border border-cornflowerblue py-2 md:w-full "
          >
            <img src={shopcart} alt="" />
            <span className="font-bold text-cornflowerblue">
              $ {totalPrice}
            </span>
            <img
              ref={img}
              src={arrowDropdown}
              alt=""
              className="  transition-transform"
            />
          </button>
          {/* contenedor modalShop */}
          <div
            ref={modalShop}
            className=" z-10 mt-2 hidden  w-full rounded-b-lg bg-blue-100 group-hover:block  md:absolute md:right-0 md:top-10 md:h-80  md:w-[500px] lg:h-96 2xl:left-0"
          >
            <div className=" flex w-full items-center justify-between border-b border-black px-4 py-1 ">
              <p className="inline-block">{products.length} productos</p>
              <span onClick={handleDelete}>
                <img
                  src={deleteBtn}
                  className="w-7 cursor-pointer hover:scale-105"
                  alt="vaciar carrito"
                />
              </span>
            </div>
            <div
              className={`flex h-40 flex-col gap-2 ${
                products.length && "overflow-scroll overflow-x-hidden"
              }  py-3 md:h-56 lg:h-[340px] `}
            >
              {products?.map((prod) => (
                <Subcard prod={prod} key={prod.id} />
              ))}
            </div>
            <hr />
            <div className="flex items-center justify-between rounded-b-lg bg-blue-200 p-2 ">
              <Link to="/shop/checkout">
                <LinkButton component={"Confirmar Compra"} />
              </Link>
              <h2 className="border-blue inline-block rounded-md border py-2 px-4">
                Total: ${totalPrice}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarPrueba;
