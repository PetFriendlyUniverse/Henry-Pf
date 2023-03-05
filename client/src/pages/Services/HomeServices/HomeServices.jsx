import Recomendados from "../../../components/Recomendados/Recomendados";
import PaginatorWalker from "./Components/PaginatorWalker/PaginatorWalker";
import PaginatorDayCare from "./Components/PaginatorDayCare/PaginatorDayCare";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPronvinciasAsync } from "../../../redux/features/ubicaciones/ubicacionesActions";
import { setProvince } from "../../../redux/features/services/servicesSlice";

function HomeServices() {
  const [show, setShow] = useState("daycare");
  const dispatch = useDispatch();

  const handleShow = (e) => {
    setShow(e.target.value);
  };
  const handleChange = (e) => {
    dispatch(setProvince(e.target.value));
  };
  useEffect(() => {
    dispatch(getPronvinciasAsync());
  }, []);

  const provincia = useSelector((state) => state.Ubicaciones.provincias);

  return (
    <div className="scrollbar scrollbar-rounded-xl scrollbar-thumb-blue-500 scrollbar-track-blue-300 w-full justify-center bg-adopcion lg:flex lg:min-h-screen lg:flex-col lg:gap-12 lg:bg-slate-500 lg:pt-16 xl:items-center">
      <Recomendados />
      <div className="w-full border-2 border-black text-center">
        <select onChange={handleChange} name="province" className="max-w-full">
          {provincia.map((p) => (
            <option key={p.id} value={p.nombre}>
              {p.nombre.slice(0, 25)}
            </option>
          ))}
        </select>
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
