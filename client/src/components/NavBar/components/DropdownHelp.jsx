import { useRef } from "react";
function dropdownHelp() {
  const dropdown = useRef(null);
  const showDropdown = () => {
    dropdown.current.classList.toggle("hidden");
  };
  return (
    <>
      <button
        onClick={showDropdown}
        className="bg-slate-500 flex w-full items-center justify-between rounded-md px-4 py-1 text-xs text-green md:text-sm lg:relative lg:text-base"
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
        className="hidden rounded-b-lg bg-primary text-green lg:absolute lg:z-10"
      >
        <ul
          className="bg-slate-500 text-white dark:text-gray-400 rounded-md py-2 text-sm"
          aria-labelledby="dropdownNavbarButton"
        >
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white block px-4 py-2"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white block px-4 py-2"
            >
              Settings
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white block px-4 py-2"
            >
              Earnings
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default dropdownHelp;
