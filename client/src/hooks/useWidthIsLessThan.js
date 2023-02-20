import { useState, useEffect } from "react";

function useWidthIsLessThan(breakpoint) {
  const [lessThan, setLessThan] = useState(true);

  const resizeListener = (event) => {
    event.target.innerWidth >= breakpoint && setLessThan(false);
    event.target.innerWidth < breakpoint && setLessThan(true);
  };
  useEffect(() => {
    window.innerWidth >= breakpoint && setLessThan(false); // esto es necesario para ejecutarlo la primera vez que entramos a la pag
    window.addEventListener("resize", resizeListener); // agrega la escucha al resize ( cambio de ancho de pantalla ) para que actualice el estado en caso de ser necesario
    return () => window.removeEventListener("resize", resizeListener); // importantísimo! esto remueve la escucha para no mantenerla en las demas paginas donde no se necesita
  }, []);
  return lessThan;
}

export default useWidthIsLessThan;
