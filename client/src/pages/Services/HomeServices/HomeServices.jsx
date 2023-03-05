import Recomendados from "../../../components/Recomendados/Recomendados";
import PaginatorWalker from "./Components/PaginatorWalker/PaginatorWalker";
import PaginatorDayCare from "./Components/PaginatorDayCare/PaginatorDayCare";
import { useState } from "react";

function HomeServices() {
  const [show, setShow] = useState("daycare");

  const handleShow = (e) => {
    setShow(e.target.value);
  };

  return (
    <div className="scrollbar scrollbar-rounded-xl scrollbar-thumb-blue-500 scrollbar-track-blue-300 w-full justify-center bg-adopcion lg:flex lg:min-h-screen lg:flex-col lg:gap-12 lg:bg-slate-500 lg:pt-16 xl:items-center">
      <Recomendados />
      <div className="w-full border-2 border-black text-center">
        filtros globales "ubicacion" va con unos tag select
      </div>
      <div className="flex justify-center gap-96">
        <button
          value="daycare"
          onClick={handleShow}
          className={
            show === "daycare"
              ? "rounded-md border bg-violet-900 p-2 text-white"
              : "rounded-md border bg-ultraviolet p-2 text-white"
          }
        >
          Guarderias
        </button>
        <button
          value="walkers"
          onClick={handleShow}
          className={
            show === "walkers"
              ? "rounded-md border bg-violet-900 p-2 text-white"
              : "rounded-md border bg-ultraviolet p-2 text-white"
          }
        >
          Paseadores
        </button>
      </div>
      <div className="justify-center gap-10  lg:flex lg:h-full lg:w-full lg:gap-4 ">
        {show === "daycare" ? (
          <div className="flex flex-wrap justify-center">
            <PaginatorDayCare />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center ">
            <PaginatorWalker />
          </div>
        )}
      </div>
    </div>
  );
}

export default HomeServices;
