import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../../../redux/features/products/productsActions";

function List({ filter, options }) {
  const [mobile, setMobile] = useState(true);
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

  const resizeListener = (event) => {
    event.target.innerWidth > 768 && setMobile(false);
    event.target.innerWidth < 768 && setMobile(true);
  };
  useEffect(() => {
    window.innerWidth > 768 && setMobile(false); // esto es necesario para ejecutarlo la primera vez que entramos a la pag
    window.addEventListener("resize", resizeListener); // agrega la escucha al resize ( cambio de ancho de pantalla ) para que actualice el estado en caso de ser necesario
    return () => window.removeEventListener("resize", resizeListener); // importantísimo! esto remueve la escucha para no mantenerla en las demas paginas donde no se necesita
  }, []);

  return (
    <div className="flex flex-col">
      <hr class="my-2 h-px border-0 bg-gray-400" />
      <button
        className={`font-semibold  text-yellow-500 ${
          mobile ? "hover:text-yellow-600" : "cursor-default"
        }`}
        type="button"
        id="filters-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="filters-dropdown"
        data-dropdown-placement="bottom"
        onClick={toggleFilters}
      >
        {filter}
      </button>
      {/* si hay filtro seteado, lo muestra como boton y sino los filtros a elejir */}
      {value ? (
        <button
          className="border-red text-red relative rounded-sm border border-yellow-400 pr-4 pl-1 text-yellow-400 lg:px-0 "
          onClick={() => onClick(value)}
        >
          <span>{value}</span>
          <span className="absolute right-2">x</span> {/* boton de eliminar */}
        </button>
      ) : (
        <ul
          ref={toggleFilter}
          className={`hidden ${
            options.length > 5 && (!showAll ? "md:h-[90px] lg:h-28" : "h-fit")
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
          className={`hidden text-sm font-bold md:block ${
            !showAll ? "text-yellow-300" : "text-red-300"
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
