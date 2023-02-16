import { useSelector } from "react-redux";
import useGetProducts from "../../hooks/useGetProducts";
import Card from "../Card/Card";

function CardContainer() {
  // const products = useSelector((state) => state.Products?.products);
  const product = useSelector((state) => state.Products?.shopCart);
  console.log(product);
  const products = useGetProducts();
  console.log(products);
  return (
    <div className="flex w-full flex-wrap justify-center gap-2 border-2 border-black">
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            weight={product.weight}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default CardContainer;
