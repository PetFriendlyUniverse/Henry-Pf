import { useState } from "react";
const spanSyles = (value, name) =>
  `block w-full border-b border-l-4 border-b-gray-500  p-1  ${
    value == name
      ? "border-l-blue-500 text-blue-500"
      : "border-l-transparent hover:border-l-slate-400"
  }`;

function Sort() {
  const [value, setValue] = useState("Más relevantes");
  return (
    <>
      <div className="absolute left-[110%] z-10 flex w-80">
        <p>Ordenar por:</p>
        <div className=" ml-3 w-[150px]">
          <button className="peer cursor-default hover:text-blue-500">
            {value}
          </button>
          <div className="invisible mt-2 w-40 rounded-md border border-black bg-white peer-focus:visible">
            <span className={spanSyles(value, "Más relevantes")}>
              Más relevantes
            </span>
            <span className={spanSyles(value, "Menor precio")}>
              Menor precio
            </span>
            <span className={spanSyles(value, "Mayor precio")}>
              Mayor precio
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sort;
