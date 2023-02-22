import Paginator from "../../../components/Paginator/Paginator";
import Filters from "./components/Filters/Filters";
import Recomendados from "../../../components/Recomendados/Recomendados";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
  }, []);

  return (
    <div className="scrollbar scrollbar-rounded-xl scrollbar-thumb-blue-500 scrollbar-track-blue-300 w-full bg-[url('https://petfood.com.ar/img/cms/symphony.png')] pt-24 lg:flex lg:min-h-screen lg:flex-col lg:gap-12 lg:pt-20 xl:items-center">
      {/* <Recomendados /> */}
      <div className="lg:flex lg:h-full lg:justify-between lg:pt-24 xl:max-w-[1800px] ">
        <div className="lg:border-blue lg:border-#645e9d h-fit w-full border-2  lg:sticky lg:top-[100px] lg:ml-2 lg:w-1/5 lg:border-2">
          <Filters />
        </div>
        <div className="lg:min-h-screen lg:w-4/5 ">
          <Paginator />
        </div>
      </div>
    </div>
  );
}
