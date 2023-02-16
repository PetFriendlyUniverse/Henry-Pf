import useGetFilters from "../../../../../hooks/useGetFilters";
import List from "./components/List";
// import { filterLists } from "./fakeData";

function Filters() {
  const filterLists = useGetFilters();
  console.log(filterLists);
  return (
    <aside className="flex w-full flex-col content-center justify-center py-4 px-3 pt-20 text-center md:pt-0">
      <div>
        <h2 className="text-lg font-semibold">Enabled Filters</h2>
      </div>
      <div className="flex justify-evenly sm:justify-evenly lg:flex-col">
        {filterLists?.map((list, i) => (
          <List key={i} filter={list[0]} options={list[1]} />
        ))}
      </div>
    </aside>
  );
}

export default Filters;
