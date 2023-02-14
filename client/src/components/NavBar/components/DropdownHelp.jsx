import { useRef } from "react";
function dropdownHelp() {
  const dropdown = useRef(null);
  const showDropdown = () => {
    dropdown.current.classList.toggle("hidden");
  };
  return (
    <li>
      <button
        onClick={showDropdown}
        className="realtive flex w-full items-center justify-between border-b border-gray-100 py-2 pl-3 pr-4 font-medium text-black hover:bg-gray-50 dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white dark:focus:text-white md:w-auto md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-white md:dark:hover:bg-transparent"
      >
        Ayuda
        <svg
          className="ml-1 h-4 w-4"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
        </svg>
      </button>
      <div
        ref={dropdown}
        className="absolute z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-400"
          aria-labelledby="dropdownNavbarButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Earnings
            </a>
          </li>
        </ul>
        <div className="py-2">
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </li>
  );
}

export default dropdownHelp;
