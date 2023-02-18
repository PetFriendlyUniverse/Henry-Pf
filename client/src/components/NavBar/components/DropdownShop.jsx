import { useRef } from "react";
import Subcard from "../../SubCard/Subcard";
import { useSelector } from "react-redux";
import LinkButton from "../../Button/LinkButton";
import { Link } from "react-router-dom";

function DropdownShop() {
  const shopCartProducts = useSelector((state) => state.Products?.shopCart);
  const productsIds = Object.keys(shopCartProducts);
  let totalPrice = 0;
  const products = productsIds.map((id) => {
    totalPrice += shopCartProducts[id].amount * shopCartProducts[id].price;
    return shopCartProducts[id];
  });

  return (
    <div className="group rounded-xl">
      <button className="  flex w-full items-center justify-between rounded-md border border-cyan-50 px-4 py-1 text-xs text-lightwhite md:text-sm lg:relative lg:text-base">
        ${totalPrice}
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"></path>
        </svg>
      </button>

      <div className=" z-10 hidden max-h-96 w-96 overflow-y-scroll rounded-b-lg bg-blue-100 pt-8  group-hover:block lg:absolute">
        {products?.map((prod) => (
          <Subcard prod={prod} key={prod.id} />
        ))}
        <hr />
        <div className="flex justify-between p-2">
          <Link to="/shop/checkout">
            <LinkButton component={"Confirmar Compra"} />
          </Link>
          <h2 className="border-blue inline-block border">
            Total: ${totalPrice}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default DropdownShop;
