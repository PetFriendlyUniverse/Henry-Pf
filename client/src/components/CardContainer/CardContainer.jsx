import useGetProducts from "../../hooks/useGetProducts";
import Card from "../Card/Card";

function CardContainer() {
  const products = useGetProducts();

  return (
    <div className="flex w-full flex-wrap justify-center gap-2 border-2 border-black">
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
