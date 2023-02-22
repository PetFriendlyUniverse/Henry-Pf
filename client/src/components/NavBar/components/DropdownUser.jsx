import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import user from "../../../assets/general/profile.svg";
import { getUserApi } from "../../../redux/features/users/usersActions";

function DropdownUser() {
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();

  const userDetailId = useSelector((state) => state.User?.userId);

  useEffect(() => {
    dispatch(getUserApi(id));
  }, []);

  return (
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
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Cerrar sesión
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownUser;
