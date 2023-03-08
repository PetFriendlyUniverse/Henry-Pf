import Paginator from "../../../components/Paginator/Paginator";
import Filters from "./components/Filters/Filters";
import Recomendados from "../../../components/Recomendados/Recomendados";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function HomeShop({ brands }) {
  const navigate = useNavigate();
  const serarchParams = new URLSearchParams(window.location.search);
  const id = serarchParams.get("i");
  const token = serarchParams.get("t");

  useEffect(() => {
    if (id && token) {
      localStorage.setItem("token", token);
      localStorage.setItem("id", id);
      navigate("/shop");
    }
    const tokenLocal = localStorage.getItem("token");
    if (tokenLocal) {
      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        Swal.fire({
          title: "Su sesión ha expirado",
          text: "Por favor inicie sesión de nuevo",
          icon: "warning",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
      }, 3600000);
    }
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="scrollbar scrollbar-rounded-xl scrollbar-thumb-blue-500 scrollbar-track-blue-300 w-full bg-adopcion lg:flex lg:min-h-screen lg:flex-col lg:gap-12 lg:bg-slate-500 lg:pt-16 xl:items-center">
      <Recomendados />
      <div className="gap-10  lg:mx-auto lg:flex lg:h-full lg:w-full lg:gap-0 lg:px-4 xl:min-h-screen xl:gap-0 2xl:pl-10">
        <Filters />
        <Paginator />
      </div>
    </div>
  );
}
