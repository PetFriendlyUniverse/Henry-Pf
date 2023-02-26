import useGetProducts from "../../hooks/useGetProducts";
import Card from "../Card/Card";

function CardContainer() {
  const products = useGetProducts();
  //flex w-[90%] flex-wrap justify-center gap-2
  return (
    <div className="mx-auto grid w-11/12 grid-cols-1 items-center justify-center justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:w-10/12 lg:grid-cols-4  lg:gap-x-10 lg:gap-y-12  ">
      {products?.length === 0 ? (
        <h2>No se encotraron coincidencias con los datos solicitados</h2>
      ) : (
        products?.map((product) => {
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
        })
      )}
    </div>
  );
}

export default CardContainer;
