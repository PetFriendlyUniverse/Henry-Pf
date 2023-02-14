import { useRef } from "react";

function DropdownShop() {
  const dropdownShop = useRef(null);

  const showDropdownShop = () => {
    dropdownShop.current.classList.toggle("hidden");
  };
  return (
    <>
      <button
        onClick={showDropdownShop}
        className="relative flex justify-between"
      >
        $40.000
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

      <div ref={dropdownShop} className="absolute hidden h-52 bg-slate-500">
        <h2>Modal carrito de compras</h2>
      </div>
    </>
  );
}

export default DropdownShop;
