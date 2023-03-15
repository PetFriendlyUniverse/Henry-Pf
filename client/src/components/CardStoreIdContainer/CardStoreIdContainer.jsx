import useGetProductsByStoreId from "../../pages/ecommerce/Profile/hooks/useGetProductsByStoreId";

import CardStoreId from "../CardStoreId/CardStoreId";
function CardStoreIdContainer({ id }) {
  const products = useGetProductsByStoreId(id);

  return (
    <div
      className={` max-h[800] flex min-h-[350px] min-w-full flex-wrap justify-center gap-8 overflow-x-hidden ${
        products.length > 0 && "overflow-y-scroll"
      }  border-2 border-gray-50 bg-[#fff] px-3 pb-2`}
    >
      {products?.map((product) => {
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
      })}
    </div>
  );
}

export default CardStoreIdContainer;
