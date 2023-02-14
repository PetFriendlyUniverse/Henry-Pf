import search from "@/assets/search.svg";

function searchForm() {
  return (
    <form action="" className="relative flex">
      <input
        type="search"
        name=""
        id=""
        className="w-full rounded-xl px-2 py-1"
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
