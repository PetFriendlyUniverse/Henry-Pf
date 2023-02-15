import { useSelector } from "react-redux";
import Card from "../Card/Card";

function CardContainer() {
  const products = useSelector((state) => state.Products?.products);
  console.log(products);

  return (
    <>
      {products.map((product) => {
        return (
          <Card
            key={product.id}
            name={product.name}
            img={product.img}
            weight={product.weight}
            price={product.price}
          ></Card>
        );
      })}
    </>
  );
}

export default CardContainer;
