import useGetProducts from "../../hooks/useGetProducts";
import Card from "../Card/Card";
import CardSkeleton from "../Card/CardSkeleton";
import Loader from "../Loader/Loader";
import img404 from "../../assets/general/error-404.png";

function CardContainer() {
  const [loading, products, productsPerPage] = useGetProducts();
  const skeletonMap = [];
  for (let index = 0; index < productsPerPage; index++) {
    skeletonMap.push(index);
  }
  if (loading)
    return (
      <div className="mx-auto grid w-72 grid-cols-1 items-center justify-center justify-items-center gap-7 sm:w-4/5 sm:grid-cols-2 md:max-w-2xl lg:m-0 lg:min-h-fit  lg:w-full  lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:max-w-5xl xl:grid-cols-4 xl:gap-x-2  2xl:max-w-7xl  2xl:gap-x-10 2xl:gap-y-12  ">
        {skeletonMap.map((i) => (
          <CardSkeleton key={"cs" + i} />
        ))}
      </div>
    );
  else {
    return (
      <div>
        {products?.length === 0 ? (
          <div className="md flex min-h-[50vh] w-96 flex-col items-center justify-center">
            <img className="h-[200px] w-[200px]" src={img404} alt="not found" />
            <h2 className="border-b-2 border-gray-700 text-center text-lg font-semibold text-gray-700">
              Uups!... Lo sentimos, tuvimos un problema !
            </h2>
          </div>
        ) : (
          <div className="mx-auto grid w-72 grid-cols-1 items-center justify-center justify-items-center gap-7 sm:w-4/5 sm:grid-cols-2 md:max-w-2xl lg:m-0 lg:min-h-fit  lg:w-full  lg:grid-cols-3 lg:gap-x-5 lg:gap-y-6 xl:max-w-5xl xl:grid-cols-4 xl:gap-x-2  2xl:max-w-7xl  2xl:gap-x-10 2xl:gap-y-12  ">
            {products?.map((product) => {
              return (
                <Card
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  img={product.img}
                  weight={product.weight}
                  price={product.price}
                  stock={product.stock}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default CardContainer;
