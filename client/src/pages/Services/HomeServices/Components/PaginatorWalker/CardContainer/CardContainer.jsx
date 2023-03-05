import Loader from "../../../../../../components/Loader/Loader";
import useGetWalkers from "../../../../../../hooks/useGetWalkers";
import Card from "./Card/Card";

function CardContainer() {
  const [loading, walkers] = useGetWalkers();
  console.log(walkers);
  if (loading)
    return (
      <div className="flex h-screen w-full flex-col content-center items-center py-72">
        <Loader />
      </div>
    );

  return (
    <div className="mx-auto flex h-full w-full flex-wrap items-center justify-center justify-items-center gap-7 sm:w-4/5 sm:grid-cols-2 md:max-w-2xl lg:m-0 lg:min-h-fit  lg:w-full  lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:max-w-5xl xl:grid-cols-4 xl:gap-x-2  2xl:max-w-7xl  2xl:gap-x-10 2xl:gap-y-12  ">
      {walkers?.length === 0 ? (
        <div className="min-h-[50vh]">
          <h2>No se encotraron coincidencias con los datos solicitados</h2>
        </div>
      ) : (
        walkers?.map((w) => {
          return <Card key={w?.id} id={w?.id} name={w?.name} />;
        })
      )}
    </div>
  );
}

export default CardContainer;
