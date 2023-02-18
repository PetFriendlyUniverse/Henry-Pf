import Paginator from "../../../components/Paginator/Paginator";
import Filters from "./components/Filters/Filters";

export default function HomeShop() {
  return (
    <div className="w-full lg:flex lg:min-h-screen lg:flex-col lg:gap-12 lg:pt-20 xl:items-center">
      <div className=" hidden border-2 border-black pt-20 md:block md:h-44  lg:h-28 lg:w-full">
        Banner de Recomendados
      </div>

      <div className="lg:flex lg:h-full lg:justify-between xl:max-w-[1800px]  ">
        <div className="lg:border-blue h-fit w-full bg-colorFilter text-gray-300 lg:top-16 lg:w-64  lg:border-2">
          <Filters />
        </div>
        <div className="lg:min-h-screen lg:w-4/5 ">
          <Paginator />
        </div>
      </div>
    </div>
  );
}
