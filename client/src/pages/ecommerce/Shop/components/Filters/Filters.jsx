import useGetFilters from "../../../../../hooks/useGetFilters";
import useToggleBoolean from "../../../../../hooks/useToggleBoolean";
import useWidthIsLessThan from "../../../../../hooks/useWidthIsLessThan";
import ClearFiltersBtn from "./components/ClearFiltersBtn";
import List from "./components/List";
import PriceRange from "./components/PriceRange";
import usePriceRangeControll from "./hooks/usePriceRangeControll";
import Loader from "../../../../../components/Loader/Loader";
import FiltersSkeleton from "./FiltersSkeleton";

function Filters() {
  const [loading, filterLists] = useGetFilters();
  const [show, toggleShow] = useToggleBoolean(); // recibe el estado inicial (default => false)
  const widthLessThan = useWidthIsLessThan(768);
  const widthLess1080 = useWidthIsLessThan(1080);
  const handleClick = () => {
    widthLess1080 && toggleShow();
  };

  const { min, max, onSet } = usePriceRangeControll();

  if (loading) return <FiltersSkeleton />;

  return (
    <div className="h-fit w-full border-2  lg:top-[115px]  lg:mt-[70px] lg:flex lg:w-64 lg:border-2 lg:border-[#645e9d] lg:p-2 lg:pl-2 xl:w-64 ">
      <aside className="h-full  lg:flex lg:w-full lg:flex-col lg:content-center lg:items-center  lg:justify-center  lg:bg-transparent lg:py-2  lg:text-center">
        <button
          onClick={handleClick}
          className={`h-full w-min self-center rounded-md  px-4 py-1 text-xs uppercase text-lightwhite md:text-sm lg:cursor-auto lg:text-base lg:font-bold lg:tracking-widest lg:text-black`}
        >
          Filtros
        </button>
        <ClearFiltersBtn />
        <div
          className={`flex w-full ${
            show ? "h-auto" : "h-0"
          } flex-col justify-evenly overflow-hidden sm:flex-row sm:justify-evenly lg:h-auto lg:flex-col lg:overflow-auto`}
        >
          {filterLists?.map((list, i) => (
            <List
              key={i}
              filter={list[0]}
              options={list[1]}
              mobile={widthLessThan}
            />
          ))}
          {!!min && !!max && (
            <PriceRange
              title="Rango de Precio"
              min={min}
              max={max}
              onSet={onSet}
              mobile={widthLessThan}
            />
          )}
        </div>
      </aside>
    </div>
  );
}

export default Filters;
