import { useEffect, useState } from "react";

function List({ filter, options }) {
  const [mobile, setMobile] = useState(true);
  const [value, setValue] = useState("");

  const onClick = (newValue) => {
    // console.log(value);
    newValue === value ? setValue("") : setValue(newValue);
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
          className="relative rounded-none border border-red text-red"
          onClick={() => onClick(value)}
        >
          <span>{value}</span>
          <span className="absolute right-2">x</span> {/* boton de eliminar */}
        </button>
      ) : (
        <ul className="max-h-32 overflow-auto">
          {options?.map((opc, i) => (
            <li className="text-sm" onClick={() => onClick(opc)} key={i}>
              {opc}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
