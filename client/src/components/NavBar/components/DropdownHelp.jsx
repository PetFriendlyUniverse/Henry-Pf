function dropdownHelp() {
  return (
    <div className="group">
      <button className="flex w-full items-center justify-between rounded-md border border-black px-4 py-1 text-xs text-black shadow-sm shadow-black md:text-sm lg:relative lg:text-base">
        Ayuda
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
        </svg>
      </button>
      <div className="hidden rounded-b-lg bg-white p-2 text-lightwhite group-hover:block lg:absolute lg:z-10 lg:w-32">
        <p class="text-gray-500 ">
          Para contactarte con nosotros puedes comunicarte a travez de nuestro{" "}
          <a
            href="#"
            class="font-medium text-green-500 underline hover:no-underline "
          >
            Whatsapp
          </a>
        </p>

        {/* <ul
          className="rounded-md bg-blue-100 py-2 text-sm text-white dark:text-gray-400"
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
        </ul> */}
      </div>
    </div>
  );
}

export default dropdownHelp;
