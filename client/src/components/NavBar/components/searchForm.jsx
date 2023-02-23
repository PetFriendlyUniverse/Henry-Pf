import search from "../../../assets/general/search.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/features/products/productsSlice";

function SearchForm() {
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();

  const handleInputSearch = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(setFilters({ filter: "name", value: searchValue }));
  };
  return (
    <form
      action=""
      onSubmit={handleSearch}
      className="w-2/3 md:mt-2 md:w-96 2xl:w-96  "
    >
      <div className="mx-auto h-full w-full ">
        <div className="relative mt-5 flex h-[42px] w-full items-center overflow-hidden rounded-xl bg-white focus-within:shadow-lg md:mt-0">
          <div className="grid h-full w-12 place-items-center rounded-md text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full pr-2 text-sm text-gray-700 outline-none"
            type="text"
            id="search"
            placeholder="Busca un producto.."
            value={searchValue}
            onChange={handleInputSearch}
          />
        </div>
      </div>

      {/* <input
        type="text"
        className="w-full rounded-xl px-2 py-1"
        value={searchValue}
        onChange={handleInputSearch}
      />
      <img
        src={search}
        alt="Buscar"
        onClick={handleSearch}
        className="absolute right-1 top-0 cursor-pointer py-[2px] hover:scale-105"
      /> */}
    </form>
  );
}

export default SearchForm;

/* 
relative flex items-center lg:w-96
w-full py-1 px-2
absolute right-0
*/

/* 
<div className="w-2/3 md:mt-2 md:w-96 2xl:w-96">
          <div className="mx-auto h-full w-full ">
            <div className="relative mt-5 flex h-[42px] w-full items-center overflow-hidden rounded-xl bg-white focus-within:shadow-lg md:mt-0">
              <div className="grid h-full w-12 place-items-center rounded-md text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer h-full w-full pr-2 text-sm text-gray-700 outline-none"
                type="text"
                id="search"
                placeholder="Busca un producto.."
                value={searchValue}
        onChange={handleInputSearch}
              />
            </div>
          </div>
        </div>





*/
