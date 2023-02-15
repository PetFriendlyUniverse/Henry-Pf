import { NavLink } from "react-router-dom";
import SearchForm from "./components/SearchForm";
import DropdownHelp from "./components/DropdownHelp";
import DropdownAccount from "./components/dropdownAccount";
import DropdownShop from "./components/DropdownShop";
import react from "@/assets/react.svg";
import { useRef } from "react";
function NavBar() {
  const toolBar = useRef(null);
  const toggleBar = () => {
    toolBar.current.classList.toggle("hidden");
  };
  const userMenu = useRef(null);
  const toggleMenuUser = () => {
    userMenu.current.classList.toggle("hidden");
  };
  return (
    <nav className="border-gray-200  dark:bg-gray-900 flex h-16 bg-primary sm:px-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </a>

        <div>
          <NavLink className="text-lightwhite" to="/services">
            Servicios
          </NavLink>
        </div>

        <div className="relative flex items-center gap-2 md:order-2 lg:flex-col">
          <button
            type="button"
            className="bg-gray-800 focus:ring-gray-300 dark:focus:ring-gray-600 mr-3 flex rounded-full text-sm focus:ring-4 md:mr-0"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
            onClick={toggleMenuUser}
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://pbs.twimg.com/profile_images/1584012412272971776/ngjy-YE8_400x400.jpg"
              alt="user photo"
            />
          </button>
          <div
            className="divide-gray-100 dark:divide-gray-600 dark:bg-gray-700 absolute top-7 -left-20 z-50 my-4 hidden list-none divide-y rounded-lg  bg-primary text-base text-lightwhite shadow lg:-left-12"
            id="user-dropdown"
            ref={userMenu}
          >
            <div className="px-4 py-3">
              <span className="text-gray-900 block text-sm dark:text-white">
                Bonnie Green
              </span>
              <span className="text-gray-500 dark:text-gray-400 block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 block px-4 py-2 text-sm dark:hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 block px-4 py-2 text-sm dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 block px-4 py-2 text-sm dark:hover:text-white"
                >
                  Earnings
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 block px-4 py-2 text-sm dark:hover:text-white"
                >
                  Sign out
                </a>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="text-gray-500 hover:bg-gray-100 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 ml-1 inline-flex items-center rounded-lg p-2 text-sm focus:outline-none focus:ring-2 lg:hidden"
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
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className="md:w-scren absolute top-14 left-0 z-10 hidden w-full items-center justify-between bg-primary md:order-1 lg:static lg:flex lg:w-[900px]"
          id="mobile-menu-2"
          ref={toolBar}
        >
          <ul className="border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 md:dark:bg-gray-900 mt-4 flex flex-col items-center rounded-lg border p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0  md:text-sm md:font-medium">
            <li className="w-96">
              <SearchForm />
            </li>
            <li>
              <DropdownHelp />
            </li>
            <li>
              <DropdownAccount />
            </li>
            <li>
              <DropdownShop />
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
