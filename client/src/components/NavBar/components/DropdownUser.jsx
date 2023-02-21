import { useRef } from "react";
import { Link } from "react-router-dom";
import user from "../../../assets/general/profile.svg";

function DropdownUser() {
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
            Federico Almeida
          </span>
          <span className="block truncate text-sm font-medium text-gray-500 dark:text-gray-400">
            federicoalmeida15@gmail.com
          </span>
        </div>
        <ul className="py-2" aria-labelledby="user-menu-button">
          <li>
            <Link
              to="/login"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              to="profile/1"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </Link>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-700 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Sign out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownUser;
