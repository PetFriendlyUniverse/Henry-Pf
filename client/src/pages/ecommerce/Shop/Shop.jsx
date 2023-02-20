import Paginator from "../../../components/Paginator/Paginator";
import Filters from "./components/Filters/Filters";
import Recomendados from "../../../components/Recomendados/Recomendados";

export default function HomeShop({ brands }) {
  return (
    <div className="scrollbar scrollbar-rounded-xl scrollbar-thumb-blue-500 scrollbar-track-blue-300  w-full lg:flex lg:min-h-screen lg:flex-col lg:gap-12 lg:pt-20 xl:items-center">
      <div className="flex border-2 border-black pt-20 md:block md:h-44  lg:h-28 lg:w-full"></div>
      <Recomendados></Recomendados>
      <div className="lg:flex lg:h-full lg:justify-between xl:max-w-[1800px]  ">
        <div className="lg:border-blue lg:border-#645e9d ml-2 h-fit w-full border-2 lg:sticky lg:top-16 lg:w-1/5 lg:border-2">
          <Filters />
        </div>
        <div className="lg:min-h-screen lg:w-4/5 ">
          <Paginator />
        </div>
      </div>
    </div>
  );
}
