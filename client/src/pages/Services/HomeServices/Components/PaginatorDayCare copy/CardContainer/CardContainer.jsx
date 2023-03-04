import Card from "./Card/Card";
// const [loading, services] = useGetProducts();

function CardContainer() {
  return (
    <div className="mx-auto flex h-full w-full items-center justify-center justify-items-center gap-7 border-2 border-black sm:w-4/5 sm:grid-cols-2 md:max-w-2xl lg:m-0 lg:min-h-fit  lg:w-full  lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:max-w-5xl xl:grid-cols-4 xl:gap-x-2  2xl:max-w-7xl  2xl:gap-x-10 2xl:gap-y-12  ">
      {/* {products?.length === 0 ? (
      <div className="min-h-[50vh]">
        <h2>No se encotraron coincidencias con los datos solicitados</h2>
      </div>
    ) : (
      products?.map((product) => {
        return ( */}
      <Card />
      {/* );
      })
    )} */}
    </div>
  );
}

export default CardContainer;
