import { Carousel } from "flowbite-react";
import proximamente from "../../../assets/imagenes/proximamente.png";
import Filters from "./components/Filters/Filters";

// imports <Filters />
import useGetFilters from "../../../hooks/useGetFilters";
import useToggleBoolean from "../../../hooks/useToggleBoolean";
import useWidthIsLessThan from "../../../hooks/useWidthIsLessThan";
import List from "../../../pages/ecommerce/Shop/components/Filters/components/List";
import Paginator from "../../../components/Paginator/Paginator";

function Shop2() {
  // functiones <Filters />
  const filterLists = useGetFilters();
  const [show, toggleShow] = useToggleBoolean(); // recibe el estado inicial (default => false)
  const widthLessThan = useWidthIsLessThan(1024);
  const handleClick = () => {
    widthLessThan && toggleShow();
  };
  return (
    <div className="flex min-h-screen flex-col gap-5 pt-24">
      <div className="h-36 w-full bg-black">
        <div className="h-full sm:h-64 xl:h-80 2xl:h-96">
          <Carousel leftControl="left" rightControl="right">
            <div className="h-full">
              <img src={proximamente} alt="..." className="h-full" />
            </div>
            <div className="h-full">
              <img src={proximamente} alt="..." className="h-full" />
            </div>
            <div className="h-full">
              <img src={proximamente} alt="..." className="h-full" />
            </div>
            <div className="h-full">
              <img src={proximamente} alt="..." className="h-full" />
            </div>
            <div className="h-full">
              <img src={proximamente} alt="..." className="h-full" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="flex min-h-screen flex-col gap-2 bg-[url('https://petfood.com.ar/img/cms/symphony.png')] px-5">
        <hr className="h-0.5 bg-black" />
        {/* seccion filtros */}
        <div className="flex h-7  justify-between">
          <aside className="h-full bg-slate-50 lg:flex lg:w-full lg:flex-col lg:content-center  lg:justify-center lg:bg-transparent lg:py-2  lg:text-center">
            {/* <div className="border border-black"> */}
            <button
              onClick={handleClick}
              className={`flex h-full w-24 items-center justify-center gap-2 self-center border border-gray-500 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-gray-500 md:text-sm lg:cursor-auto lg:text-base lg:font-bold lg:tracking-widest lg:text-black`}
            >
              <span>Filtrar</span>
              <svg
                width="28px"
                height="28px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M20.17 3.91C20.1062 3.78712 20.0101 3.68399 19.8921 3.61173C19.774 3.53947 19.6384 3.50084 19.5 3.5H4.5C4.36157 3.50084 4.226 3.53947 4.10792 3.61173C3.98984 3.68399 3.89375 3.78712 3.83 3.91C3.76636 4.03323 3.73915 4.17204 3.75155 4.31018C3.76395 4.44832 3.81544 4.58007 3.9 4.69L9.25 12V19.75C9.25259 19.9481 9.33244 20.1374 9.47253 20.2775C9.61263 20.4176 9.80189 20.4974 10 20.5H14C14.1981 20.4974 14.3874 20.4176 14.5275 20.2775C14.6676 20.1374 14.7474 19.9481 14.75 19.75V12L20.1 4.69C20.1846 4.58007 20.236 4.44832 20.2484 4.31018C20.2608 4.17204 20.2336 4.03323 20.17 3.91Z"
                    fill="#000000"
                  ></path>
                </g>
              </svg>
            </button>
            {/* </div> */}
            <div
              className={`${
                show ? "h-auto" : "h-0"
              } flex flex-col justify-evenly overflow-hidden text-xs sm:flex-row sm:justify-evenly lg:h-auto lg:flex-col lg:overflow-auto`}
            >
              {filterLists?.map((list, i) => (
                <List key={i} filter={list[0]} options={list[1]} />
              ))}
            </div>
          </aside>
          <button className="flex items-center justify-center border border-gray-500 bg-slate-50 px-2 text-center text-xs font-semibold uppercase tracking-widest">
            <span>Ordenar</span>
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
            </svg>
          </button>
        </div>

        {/* Seccion paginador */}

        {/* <div>
          <Paginator />
        </div> */}
      </div>
    </div>
  );
}

export default Shop2;
