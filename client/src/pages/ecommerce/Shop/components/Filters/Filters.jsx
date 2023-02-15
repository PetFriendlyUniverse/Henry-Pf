import List from "./components/List";
import { filterLists } from "./fakeData";

function Filters() {
  return (
    <aside className="flex w-full flex-col content-center py-4 px-3 text-center">
      <h2 className="text-lg font-semibold">Enabled Filters</h2>
      {filterLists.map((list, i) => (
        <List key={i} filter={list.filter} options={list.options} />
      ))}
    </aside>
  );
}

export default Filters;
