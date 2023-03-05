import Card from "./Card/Card";
import useGetDayCare from "../../../../../../hooks/useGetDayCare";
import Loader from "../../../../../../components/Loader/Loader";

function CardContainer() {
  const [loading, services] = useGetDayCare();
  console.log(services);
  if (loading)
    return (
      <div className="flex h-screen w-full flex-col content-center items-center py-72">
        <Loader />
      </div>
    );

  return (
    <div className="mx-auto flex h-full w-full flex-wrap items-center justify-center justify-items-center gap-7 sm:w-4/5 sm:grid-cols-2 md:max-w-2xl lg:m-0 lg:min-h-fit  lg:w-full  lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:max-w-5xl xl:grid-cols-4 xl:gap-x-2  2xl:max-w-7xl  2xl:gap-x-10 2xl:gap-y-12  ">
      {services?.length === 0 ? (
        <div className="min-h-[50vh]">
          <h2>No se encotraron coincidencias con los datos solicitados</h2>
        </div>
      ) : (
        services?.map((s) => {
          return (
            <Card key={s?.id} id={s?.id} name={s?.name} price={s?.price} />
          );
        })
      )}
    </div>
  );
}

export default CardContainer;
