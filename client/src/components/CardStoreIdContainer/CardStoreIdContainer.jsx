import useGetProductsByStoreId from "../../pages/ecommerce/Profile/hooks/useGetProductsByStoreId";

import CardStoreId from "../CardStoreId/CardStoreId";
function CardStoreIdContainer() {
  const products = useGetProductsByStoreId();

  return (
    <div className=" flex h-[500px] flex-wrap justify-center gap-8 overflow-scroll overflow-x-hidden border-2 border-gray-50 bg-[#fff] px-3 pb-2">
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
