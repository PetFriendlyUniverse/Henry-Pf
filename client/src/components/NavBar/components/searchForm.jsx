import search from "@/assets/search.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/features/products/productsSlice";

function searchForm() {
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
    <form action="" onSubmit={handleSearch} className="relative flex ">
      <input
        type="text"
        className="w-full rounded-xl px-2 py-1"
        value={searchValue}
        onChange={handleInputSearch}
      />
      <img src={search} alt="" className="absolute right-0 top-1" />
    </form>
  );
}

export default searchForm;

/* 
relative flex items-center lg:w-96
w-full py-1 px-2
absolute right-0
*/
