import Recomendados from "../../../components/Recomendados/Recomendados";
import Filters from "./Components/FiltersServices/FiltersServices";
import Paginator from "./Components/PaginatorServices/PaginatorServices";

function HomeServices() {
  return (
    <div className="scrollbar scrollbar-rounded-xl scrollbar-thumb-blue-500 scrollbar-track-blue-300 w-full bg-adopcion lg:flex lg:min-h-screen lg:flex-col lg:gap-12 lg:bg-slate-500 lg:pt-16 xl:items-center">
      <Recomendados />
      <div className="gap-10  lg:mx-auto lg:flex lg:h-full lg:w-full lg:gap-0 lg:px-4 xl:min-h-screen xl:gap-0 2xl:pl-10">
        <div className="h-fit w-full border-2  lg:top-[115px]  lg:mt-[70px] lg:flex lg:w-64 lg:border-2 lg:border-[#645e9d] lg:p-2 lg:pl-2 xl:w-64 ">
          <Filters />
        </div>

        <Paginator />
      </div>
    </div>
  );
}

export default HomeServices;
