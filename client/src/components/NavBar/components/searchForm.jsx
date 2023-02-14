import search from "@/assets/search.svg";

function searchForm() {
  return (
    <form action="" className="relative flex w-96 items-center">
      <input type="search" name="" id="" className="w-full py-1 px-2" />
      <img src={search} alt="" className="absolute right-0" />
    </form>
  );
}

export default searchForm;
