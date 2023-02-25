import useGetProductsByStoreId from "../../pages/ecommerce/Profile/hooks/useGetProductsByStoreId";

import CardStoreId from "../CardStoreId/CardStoreId";
function CardStoreIdContainer() {
  const products = useGetProductsByStoreId();

  return (
    <div className="h-46 flex flex-wrap gap-1  border-2 border-gray-50 bg-[#fff] px-3 pb-2">
      {products?.length === 0 ? (
        <h2>No se encotraron coincidencias con los datos solicitados</h2>
      ) : (
        products?.map((product) => {
          return (
            <CardStoreId
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

export default CardStoreIdContainer;
