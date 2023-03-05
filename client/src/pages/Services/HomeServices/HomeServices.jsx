import Recomendados from "../../../components/Recomendados/Recomendados";
import PaginatorWalker from "./Components/PaginatorWalker/PaginatorWalker";
import PaginatorDayCare from "./Components/PaginatorDayCare/PaginatorDayCare";

function HomeServices() {
  return (
    <div className="scrollbar scrollbar-rounded-xl scrollbar-thumb-blue-500 scrollbar-track-blue-300 w-full justify-center bg-adopcion lg:flex lg:min-h-screen lg:flex-col lg:gap-12 lg:bg-slate-500 lg:pt-16 xl:items-center">
      <Recomendados />
      <div className="w-full border-2 border-black text-center">
        filtros globales "ubicacion" va con unos tag select
      </div>
      <div className="gap-10 border-2 lg:flex lg:h-full lg:w-full lg:gap-4 ">
        <div className="flex w-1/2 flex-wrap justify-center border-2 border-black">
          <PaginatorDayCare />
        </div>
        {/* <div className="flex w-1/2 flex-wrap justify-center border-2 border-black">
          <PaginatorWalker />
        </div> */}
      </div>
    </div>
  );
}

export default HomeServices;
