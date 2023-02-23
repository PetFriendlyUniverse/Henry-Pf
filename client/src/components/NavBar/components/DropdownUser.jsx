import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import user from "../../../assets/general/profile.svg";
import { getUserApi } from "../../../redux/features/users/usersActions";
import axios from "axios";
import arrowDropdown from "../../../assets/arrows/arrowDropdown.svg";

function DropdownUser() {
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();
  // traemos la data del usuario en redux
  const userDetailId = useSelector((state) => state.User?.userId);
  // buscar usuario por id
  useEffect(() => {
    dispatch(getUserApi(id));
  }, []);
  const logOut = () => {
    axios.post("user/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.reload();
  };
  const userMenu = useRef(null);
  const arrow = useRef(null);

  const toggleUserMenu = () => {
    userMenu.current.classList.toggle("hidden");
    arrow.current.classList.toggle("rotate-180");
  };
  let activeClassName = "border-t border-white ";

  return (
    <div className="flex flex-col py-3 lg:w-full">
      <button
        onClick={toggleUserMenu}
        className="group flex w-full items-center gap-1 lg:justify-center"
        type="button"
      >
        <img src={user} alt="" className="" />
        <span className="font-bold uppercase text-cornflowerblue">usuario</span>
        <img
          ref={arrow}
          src={arrowDropdown}
          alt=""
          className="transition-transform"
        />
      </button>

      <ul
        ref={userMenu}
        className="ml-7 hidden list-none overflow-hidden border border-cornflowerblue py-1 text-left text-cornflowerblue shadow-lg lg:absolute lg:top-12 lg:z-50 lg:ml-0 lg:w-40 lg:bg-russianviolet lg:p-2 xl:right-6 2xl:right-5 2xl:w-1/3  "
      >
        <li>
          <div className="px-4 py-3">
            <span className="block text-sm text-gray-900 dark:text-white">
              {userDetailId?.name}
            </span>
            <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
              {userDetailId?.mail}
            </span>
          </div>
        </li>
        {/* Link to Profile */}
        <li className="mb-1 py-1">
          <NavLink
            to={`profile/${id}`}
            className="flex w-full gap-3 text-cornflowerblue lg:inline-block"
          >
            {({ isActive }) => (
              <div
                className={`${
                  isActive ? activeClassName : undefined
                } flex w-full gap-3 pb-1`}
              >
                <span className=" font-bold ">Perfil</span>
              </div>
            )}
          </NavLink>
        </li>
        {/* Link to LogOut */}
        <li className="py-1">
          <NavLink
            onClick={logOut}
            className="flex w-full gap-3 text-cornflowerblue lg:inline-block"
          >
            {({ isActive }) => (
              <div
                className={`${
                  isActive ? activeClassName : undefined
                } flex w-full gap-3 pb-1`}
              >
                <span className=" font-bold ">Cerrar Sesión</span>
              </div>
            )}
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DropdownUser;

/* 

<div className="flex flex-col py-3 lg:w-full">
          <button
            onClick={toggleUserMenu}
            className="group flex w-full items-center gap-1 lg:justify-center"
            type="button"
          >
            <img src={user} alt="" className="" />
            <span className="font-bold uppercase text-cornflowerblue">
              usuario
            </span>
            <img
              ref={arrow}
              src={arrowDropdown}
              alt=""
              className="transition-transform"
            />
          </button>
          

          <ul
            ref={userMenu}
            className="ml-7 hidden list-none overflow-hidden border border-cornflowerblue py-1 text-left text-cornflowerblue shadow-lg lg:absolute lg:top-12 lg:z-50 lg:ml-0 lg:w-40 lg:bg-russianviolet lg:p-2 xl:right-6 2xl:right-5"
          >
          <li><div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            {userDetailId?.name}
          </span>
          <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
            {userDetailId?.mail}
          </span>
        </div></li>
            {/* Link to Profile *
            <li className="mb-1 py-1">
              <NavLink
                to={`profile/${id}`}
                className="flex w-full gap-3 text-cornflowerblue lg:inline-block"
              >
                {({ isActive }) => (
                  <div
                    className={`${
                      isActive ? activeClassName : undefined
                    } flex w-full gap-3 pb-1`}
                  >
                    <span className=" font-bold ">Perfil</span>
                  </div>
                )}
              </NavLink>
            </li>
            {/* Link to LogOut *
            <li className="py-1">
              <NavLink
                to="/shop"
                className="flex w-full gap-3 text-cornflowerblue lg:inline-block"
              >
                {({ isActive }) => (
                  <div
                    className={`${
                      isActive ? activeClassName : undefined
                    } flex w-full gap-3 pb-1`}
                  >
                    <span className=" font-bold ">Cerrar Sesión</span>
                  </div>
                )}
              </NavLink>
            </li>
          </ul>
        </div>

-------------------------------------------------------
 <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={logOut}
            >
              Cerrar Sesion
            </button>
----------------------------------------------------------------

<div className="group  relative flex items-center gap-2 md:order-2 lg:flex-col">
      <button
        type="button"
        className="mr-3 flex rounded-full  text-sm focus:ring-4 focus:ring-gray-300  md:mr-0"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="h-10 rounded-full sm:h-12 md:h-12 lg:h-12"
          src={user}
          alt="user photo"
        />
      </button>
      <div
        className="absolute top-8 -left-20 z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-blue-600 p-2 text-base text-lightwhite  shadow group-hover:block  lg:-left-12"
        id="user-dropdown"
      >
        <div className="px-4 py-3">
          <span className="block text-sm text-gray-900 dark:text-white">
            {userDetailId?.name}
          </span>
          <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
            {userDetailId?.mail}
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link
              to={`profile/${id}`}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Configuración
            </Link>
          </li>
          <li>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={logOut}
            >
              Cerrar Sesion
            </button>
          </li>
        </ul>
      </div>
    </div>

*/
