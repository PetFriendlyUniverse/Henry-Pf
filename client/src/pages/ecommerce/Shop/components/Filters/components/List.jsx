import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../../../../../../redux/features/products/productsActions";

function List({ filter, options }) {
  const [mobile, setMobile] = useState(true);
  const dispatch = useDispatch();
  const value = useSelector(
    (state) => state.Products?.setFilters?.[filter] || ""
  ); // traemos el value del filtro especíifico y si no hay seteamos ""
  // console.log(value);

  const onClick = (newValue) => {
    if (newValue === value) {
      dispatch(setFilters({ filter, value: "" }));
    } else {
      dispatch(setFilters({ filter, value: newValue })); //{filter:"Breed", value: "breed1"}
    }
  };

  const resizeListener = (event) => {
    event.target.innerWidth > 600 && setMobile(false);
    event.target.innerWidth < 600 && setMobile(true);
  };
  useEffect(() => {
    window.innerWidth > 600 && setMobile(false); // esto es necesario para ejecutarlo la primera vez que entramos a la pag
    window.addEventListener("resize", resizeListener); // agrega la escucha al resize ( cambio de ancho de pantalla ) para que actualice el estado en caso de ser necesario
    return () => window.removeEventListener("resize", resizeListener); // importantísimo! esto remueve la escucha para no mantenerla en las demas paginas donde no se necesita
  }, []);

  return (
    <div className="flex flex-col">
      <hr class="my-2 h-px border-0 bg-gray-200 dark:bg-gray-700" />

      {mobile ? (
        <button className="font-semibold">{filter}</button>
      ) : (
        <span className="font-semibold">{filter}</span>
      )}
      {/* por ahora la ul tiene overflow hidden, proximamente va a renderizar 4 elementos y un btn ver mas en caso de haber mas opciones de filtro */}
      {value ? (
        <button
          className="border-red text-red relative rounded-none border"
          onClick={() => onClick(value)}
        >
          <span>{value}</span>
          <span className="absolute right-2">x</span> {/* boton de eliminar */}
        </button>
      ) : (
        <ul className="max-h-32 overflow-auto">
          {options?.map((opc, i) => (
            <li className="text-sm" onClick={() => onClick(opc.id)} key={i}>
              {opc.id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
