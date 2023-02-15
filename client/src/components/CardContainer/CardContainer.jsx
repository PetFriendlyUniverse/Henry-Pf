import { useSelector } from "react-redux";
import Card from "../Card/Card";

function CardContainer() {
  const products = useSelector((state) => state.Products?.products);
  console.log(products);

  return (
    <div className="flex w-full flex-wrap justify-center gap-2 border-2 border-black">
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
    </div>
  );
}

export default CardContainer;
