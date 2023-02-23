import Paginator from "../../../components/Paginator/Paginator";
import Filters from "./components/Filters/Filters";
import Recomendados from "../../../components/Recomendados/Recomendados";

export default function HomeShop({ brands }) {
  return (
    <div className="scrollbar scrollbar-rounded-xl scrollbar-thumb-blue-500 scrollbar-track-blue-300 w-full bg-[url('https://petfood.com.ar/img/cms/symphony.png')] pt-24 lg:flex lg:min-h-screen lg:flex-col lg:gap-12 lg:bg-slate-500 lg:pt-24 xl:items-center">
      <Recomendados />
      <div className="gap-10 lg:flex lg:h-full lg:justify-between xl:min-w-[1800px] ">
        <div className="h-fit w-full border-2 lg:sticky lg:top-[100px]  lg:mt-[70px] lg:ml-2 lg:w-1/5 lg:border-2 lg:border-[#645e9d] lg:p-2">
          <Filters />
        </div>

        <Paginator />
      </div>
    </div>
  );
}
