import { Link, NavLink } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import DropdownHelp from "./components/DropdownHelp";
import DropdownShop from "./components/DropdownShop";
import logo from "../../assets/logo/logo.png";

import { useRef } from "react";
import DropdownUser from "./components/DropdownUser";
function NavBar() {
  const toolBar = useRef(null);
  const toggleBar = () => {
    toolBar.current.classList.toggle("hidden");
  };

  return (
    <nav className="fixed z-30 flex h-24 w-full bg-gradient-to-b from-blue-500  via-blue-400 to-blue-500 sm:px-4">
      <div className="container mx-auto flex items-center justify-around sm:justify-evenly md:justify-between lg:justify-around">
        <Link to={`/`}>
          <img
            src={logo}
            className="mr-3 h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20"
            alt="PetShopUniverse Logo"
          />
        </Link>
        <div>
          <NavLink
            className="rounded-md border border-black py-1 px-4 text-base font-semibold text-black shadow-sm shadow-black active:shadow-inner active:shadow-black"
            to="/landingshop"
          >
            Shop
          </NavLink>
        </div>
        <div>
          <NavLink
            className="rounded-md border border-black py-1 px-4 text-base font-semibold text-black shadow-sm shadow-black active:shadow-inner active:shadow-black"
            to="/services"
          >
            Servicios
          </NavLink>
        </div>

        <DropdownUser />
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-gray-200    lg:hidden"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          onClick={toggleBar}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="md:w-scren absolute top-14 left-0 z-10 hidden w-full items-center justify-between md:order-1 lg:static lg:flex lg:w-[900px]"
          id="mobile-menu-2"
          ref={toolBar}
        >
          <ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-100 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm  md:font-medium ">
            <li className="w-96">
              <SearchForm />
            </li>
            <li>
              <DropdownHelp />
            </li>
            <li>
              <DropdownShop />
            </li>
            <li>
              <Link
                to="/about"
                className="rounded-md border border-black py-1 px-4 shadow-sm shadow-black active:shadow-inner active:shadow-black"
              >
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

/* 
  <nav className="flex flex-col lg:flex lg:justify-between ">
      <div className="bg-cyan-700 flex items-center justify-between bg-primary px-2 py-2 ">
        <div className="">
          <img src={react} alt="" />
        </div>

        <div>
          <NavLink to="/services" className="">
            servicios
          </NavLink>
        </div>

        <div className="">
          <button
            onClick={toggleBar}
            type="button"
            className="text-white focus:bg-cyan-0 ml-3 inline-flex items-center rounded-lg p-2  text-sm focus:outline-none focus:ring-2  lg:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={toolBar}
        className="bg-cyan-500 mr-2 hidden w-1/2 self-end rounded-b-xl py-1 px-2 lg:block"
      >
        <div className="flex flex-col items-center justify-center gap-1 ">
          <div>
            <SearchForm />
          </div>
          <div className="flex h-14 flex-col items-center justify-between">
            <DropdownHelp />
            <DropdownAccount />
          </div>
        </div>
      </div>
    </nav>

*/
