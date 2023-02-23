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
