import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useWidthIsLessThan from "../../../../../../hooks/useWidthIsLessThan";
import { setFilters } from "../../../../../../redux/features/products/productsActions";
import filterTranslator from "../adapters/filterTranslator";

function List({ filter, options }) {
  const mobile = useWidthIsLessThan(768); //recibe el breakpoint  retorna true si el innerWidth es menor, sino retorna false
  const [showAll, setShowAll] = useState(false);
  const dispatch = useDispatch();
  const toggleFilter = useRef(null);
  const value = useSelector(
    (state) => state.Products?.setFilters?.[filter] || ""
  ); // traemos el value del filtro específico y si no hay seteamos ""

  const toggleFilters = () => {
    mobile && toggleFilter.current.classList.toggle("hidden");
  };

  const onClick = (newValue) => {
    if (newValue === value) {
      dispatch(setFilters({ filter, value: "" }));
    } else {
      dispatch(setFilters({ filter, value: newValue })); //{filter:"Breed", value: "breed1"}
    }
  };
  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="flex flex-col">
      <hr className="my-2 h-px border-0 bg-gray-400" />
      <button
        className={`bg-green-50  text-lg font-bold uppercase tracking-wider text-black  ${
          mobile ? "hover:text-yellow-600" : "cursor-default"
        }`}
        type="button"
        id="filters-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="filters-dropdown"
        data-dropdown-placement="bottom"
        onClick={toggleFilters}
      >
        {filterTranslator(filter)}
      </button>
      {/* si hay filtro seteado, lo muestra como boton y sino los filtros a elejir */}
      {value ? (
        <button
          className="border-red text-red relative  border border-none pr-4 pl-1 text-[#5380a4] lg:px-0 "
          onClick={() => onClick(value)}
        >
          <span>{value}</span>
          <span className="absolute right-2">x</span> {/* boton de eliminar */}
        </button>
      ) : (
        <ul
          ref={toggleFilter}
          className={`hidden ${
            options.length > 5 && (!showAll ? "md:h-[90px] lg:h-full" : "h-fit")
          } overflow-hidden md:block `}
        >
          {options?.map((opc, i) => (
            <li
              className={`text- my-1 cursor-pointer`}
              onClick={() => onClick(opc.id)}
              key={i}
            >
              {opc.id}
            </li>
          ))}
        </ul>
      )}
      {/* si hay mas de 5 filtros y no hay filtro elejido muestra el Ver Todos */}
      {options.length > 5 && !value && (
        <button
          className={`hidden py-2 text-sm font-bold md:block ${
            !showAll ? "text-blue-500" : "text-blue-500"
          }`}
          onClick={handleShowAll}
        >
          {showAll ? "Ver Menos" : "Ver Todo"}
        </button>
      )}
    </div>
  );
}

export default List;
