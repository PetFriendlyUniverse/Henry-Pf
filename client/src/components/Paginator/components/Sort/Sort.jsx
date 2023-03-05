import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../../redux/features/products/productsSlice";

const spanSyles = (value, name) =>
  `block w-full border-b border-l-4 border-b-gray-500  p-1  ${
    value == name
      ? "border-l-blue-500 text-blue-500"
      : "border-l-transparent hover:border-l-slate-400"
  }`;

function Sort() {
  const [value, setValue] = useState("Menor precio");
  const dispatch = useDispatch();

  const handleSort = (val, by, type) => {
    setValue(val);
    dispatch(setFilters([by, type]));
  };

  return (
    <>
      <div className="flex w-4/5 items-center gap-2">
        <div className="w-5/12 border-b-2 border-b-black p-1 text-center text-lg">
          <p>Ordenar por:</p>
        </div>
        <div className="flex w-3/4 items-center">
          <button className="peer mt-1 cursor-default hover:border-b-2 hover:border-b-black hover:pb-2">
            {value}
          </button>
          <div className="invisible mt-2 ml-2 w-1/3 rounded-md border border-black bg-white hover:visible peer-focus:visible">
            {/* <span className={spanSyles(value, "Más relevantes")}>
              Más relevantes
            </span> */}
            <span
              onClick={() => {
                handleSort(
                  "Menor precio",
                  { filter: "sortBy", value: "price" },
                  { filter: "sortType", value: "ASC" }
                );
              }}
              className={spanSyles(value, "Menor precio")}
            >
              Menor precio
            </span>
            <span
              onClick={() => {
                handleSort(
                  "Mayor precio",
                  { filter: "sortBy", value: "price" },
                  { filter: "sortType", value: "DESC" }
                );
              }}
              className={spanSyles(value, "Mayor precio")}
            >
              Mayor precio
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sort;
