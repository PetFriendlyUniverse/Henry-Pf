import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { priceFormatter } from "../../../adapters/priceFormatter";
import ContainerRecomendados from "../../../components/ContainerRecomendados/ContainerRecomendados";
import Subcard from "../../../components/SubCard/Subcard";
import { clearShopCart } from "../../../redux/features/products/productsSlice";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userDetailId = useSelector((state) => state.User?.userId);

  const shopCartProducts = useSelector((state) => state.Products?.shopCart);
  console.log(shopCartProducts);
  const productsIds = Object.keys(shopCartProducts);
  let totalPrice = 0;
  const products = productsIds.map((id) => {
    totalPrice += shopCartProducts[id].amount * shopCartProducts[id].price;
    return shopCartProducts[id];
  });
  const arrProductsPayment = products.map((item) => {
    return {
      id: item.id,
      title: item.name,
      picture_url: item.img,
      unit_price: item.price,
      quantity: item.amount,
      currency_id: "ARS",
    };
  });
  console.log(arrProductsPayment);
  const handleClick = async () => {
    try {
      const { data } = await axios.post("/payment/new", arrProductsPayment);
      window.location.href = await data.response.body.init_point;
      await Swal.fire({
        icon: "success",
        title: "Tu compra ha sido realizada con éxito!",
        showConfirmButton: false,
        timer: 1100,
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "success",
        title: "No se pudo realizar la compra",
        showConfirmButton: false,
        timer: 1100,
      });
    }
    localStorage.removeItem("shopCart");
    dispatch(clearShopCart());
    navigate("/shop");
  };
  return (
    <div className="flex h-screen w-full items-center justify-center bg-slate-100 pt-24">
      <div className="my-4 flex h-[80vh] w-full flex-col items-center justify-center gap-8 bg-slate-100 lg:w-[60vw] lg:flex-row lg:gap-0">
        <div className="flex h-full w-full flex-col rounded-lg border  bg-white lg:m-4 lg:w-4/6 lg:items-center lg:justify-center lg:px-6 ">
          <div className="m-6 hidden h-[8%] w-full items-center justify-center rounded-lg border bg-blue-200 px-6 text-center text-xs  text-gray-600  lg:flex">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </div>

          <div
            className={` flex h-3/6 w-full flex-col items-center justify-center gap-2  ${
              products.length && "overflow-scroll"
            } overflow-x-hidden`}
          >
            <div className="h-full w-full">
              {products?.map((prod) => (
                <Subcard prod={prod} key={prod.id} />
              ))}
            </div>
          </div>

          <div className=" flex h-48  w-full items-center justify-center overflow-hidden bg-slate-100">
            <ContainerRecomendados />
          </div>
        </div>
        <div className=" flex h-4/6 w-full flex-col self-start lg:w-2/6 ">
          <div className="flex h-1/6 w-full items-center  justify-center rounded-lg bg-blue-200 text-lg  text-blue-700 lg:p-4">
            <span className="font-semibold">¿Tenes un cupón de decuento?</span>
          </div>
          <div className="flex h-5/6 w-full flex-col items-center justify-between p-2  lg:m-4">
            <h1 className=" self-start text-3xl font-bold  text-gray-900">
              Resumen de mi orden
            </h1>
            <h3 className="self-start text-xl font-medium text-blue-700">
              Promociones aplicadas
            </h3>
            <span className="self-start text-gray-500">
              producto descripcion breve lorem iptsu
            </span>
            <hr className="my-2 h-[0.10rem] w-full border-0 bg-gray-400" />
            <div className="flex w-full justify-between">
              <span className="font-semibold uppercase tracking-widest text-gray-500">
                Subtotal
              </span>
              <span className="font-semibold tracking-wider text-gray-500">
                {priceFormatter(totalPrice)}
              </span>
            </div>
            <hr className="my-2 h-[0.10rem] w-full border-0 bg-gray-400" />
            <div className="flex w-full  justify-between text-lg">
              <h3 className=" font-bold uppercase tracking-widest text-gray-900">
                Total
              </h3>
              <h3 className="font-semibold tracking-wider  text-blue-700">
                {priceFormatter(totalPrice)}
              </h3>
            </div>

            <button
              onClick={handleClick}
              type="button"
              className=" w-full self-end rounded-lg bg-emerald-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-900"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
