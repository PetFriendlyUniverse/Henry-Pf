import Paginator from "@/components/Paginator/Paginator";

export default function HomeShop() {
  return (
    <div className="flex h-full flex-col">
      <div className="h-36 w-full border-2  border-black">
        Banner de Recomendados
      </div>

      <div className="relative flex h-full justify-between gap-20 px-2">
        <div className="sticky top-0 h-[500px] w-1/4 border-2  border-blue">
          filtros
        </div>
        <div className=" w-[75%] bg-red">
          <Paginator />
        </div>
      </div>
    </div>
  );
}
