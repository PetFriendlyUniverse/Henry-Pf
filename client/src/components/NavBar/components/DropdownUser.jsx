import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getUserApi } from "../../../redux/features/users/usersActions";
import axios from "axios";
import arrowDropdown from "../../../assets/arrows/arrowDropdown.svg";
import { clearShopCart } from "../../../redux/features/products/productsSlice";

function DropdownUser() {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();
  // traemos la data del usuario en redux
  const userDetailId = useSelector((state) => state.User?.userId);
  // buscar usuario por id
  useEffect(() => {
    dispatch(getUserApi(id));
  }, []);
  const logOut = () => {
    axios.post("user/logout").then((res) => {
      navigate("/shop");
    });
    localStorage.removeItem("token");
    localStorage.removeItem("shopCart");
    dispatch(clearShopCart());
    localStorage.removeItem("id");
  };

  const arrow = useRef();
  const dropdownUser = useRef();
  const toggleUserMenu = () => {
    dropdownUser.current.classList.toggle("hidden");
    arrow.current.classList.toggle("rotate-180");
  };
  let activeClassName = "border-t border-white ";
  const mouseOut = () => {
    dropdownUser.current.classList.add("hidden");
    arrow.current.classList.remove("rotate-180");
  };

  return (
    <div className="flex flex-col py-3 lg:w-full">
      <button
        onClick={toggleUserMenu}
        className="group flex w-full items-center gap-1 lg:justify-center"
        type="button"
      >
        <img src={arrowDropdown} alt="" />
        <span className="mr-2 font-bold uppercase text-cornflowerblue">
          {userDetailId?.name}
        </span>
        <img
          ref={arrow}
          src={userDetailId?.img}
          alt=""
          className="h-12 rounded-full transition-transform group-focus:rotate-180"
        />
      </button>

      <ul
        onMouseOut={mouseOut}
        ref={dropdownUser}
        className="ml-7 hidden list-none overflow-hidden border border-cornflowerblue py-1 text-left text-cornflowerblue shadow-lg hover:block  lg:absolute lg:top-12 lg:z-50 lg:ml-0 lg:w-40 lg:bg-russianviolet lg:p-2 xl:right-6 2xl:right-5 2xl:w-1/3  "
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
