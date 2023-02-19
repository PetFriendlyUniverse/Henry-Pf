import useGetFilters from "../../../../../hooks/useGetFilters";
import useToggleBoolean from "../../../../../hooks/useToggleBoolean";
import useWidthIsLessThan from "../../../../../hooks/useWidthIsLessThan";
import List from "./components/List";

function Filters() {
  const filterLists = useGetFilters();
  const [show, toggleShow] = useToggleBoolean(); // recibe el estado inicial (default => false)
  const widthLessThan = useWidthIsLessThan(1024);
  const handleClick = () => {
    widthLessThan && toggleShow();
  };
  return (
    <aside className="flex w-full flex-col content-center justify-center  bg-blue-500 py-2 text-center  lg:bg-transparent">
      {/* <div className="border border-black"> */}
      <button
        onClick={handleClick}
        className={`w-min self-center rounded-md border border-cyan-50 px-4 py-1 text-xs text-lightwhite md:text-sm lg:cursor-auto lg:text-base lg:font-semibold lg:text-black`}
      >
        Filtros
      </button>
      {/* </div> */}
      <div
        className={`flex ${
          show ? "h-auto" : "h-0"
        } flex-col justify-evenly overflow-hidden sm:flex-row sm:justify-evenly lg:h-auto lg:flex-col lg:overflow-auto`}
      >
        {filterLists?.map((list, i) => (
          <List key={i} filter={list[0]} options={list[1]} />
        ))}
      </div>
    </aside>
  );
}

export default Filters;
