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
        className=" bg-slate-500 flex w-full items-center justify-between rounded-md px-4 py-1 text-xs text-green md:text-sm lg:relative lg:text-base"
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

      <div
        ref={dropdownShop}
        className=" z-10 hidden w-64 rounded-b-lg bg-primary pt-8 lg:absolute"
      >
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
        <h2>Modal carrito de compras</h2>
      </div>
    </>
  );
}

export default DropdownShop;
