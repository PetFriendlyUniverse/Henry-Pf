import search from "@/assets/search.svg";

function searchForm() {
  return (
    <form action="" className="relative flex items-center">
      <input type="search" name="" id="" className="py-1" />
      <img src={search} alt="" className="absolute right-11" />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default searchForm;
