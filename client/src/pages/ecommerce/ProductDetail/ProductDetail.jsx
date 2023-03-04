import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { Tabs } from "flowbite-react";
import MoarButton from "../../../components/Button/MoarButton";
import CountProduct from "../../../components/CountProduct/CountProduct";
import cardCredit from "../../../assets/cardCredit/cardCredit.svg";
import transport from "../../../assets/transport/transport.svg";
import { setShopCart } from "../../../redux/features/products/productsSlice";
import StoreDetail from "./components/StoreDetail/StoreDetail";
import ProductDetailSkeleton from "./ProductDetailSkeleton";
import useGetProductInfo from "./hooks/useGetProductInfo";
import QualificationStars from "./components/QualificationStars/QualificationStars";

function ProductDetail() {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(1);

  const shopCartProducts = useSelector((state) => state.Products?.shopCart);
  const auxCartAmount = shopCartProducts[id] ? shopCartProducts[id].amount : 0;

  const [product, comments, qualification, loading] = useGetProductInfo(id);
  const auxCartStock = product?.stock;
  const rating = parseFloat(qualification?.[0].avg).toFixed(2);

  const handleClickDeduct = () => {
    if (amount > 1) setAmount(amount - 1);
  };
  const handleClickAdd = () => {
    if (auxCartAmount + amount < auxCartStock) setAmount(amount + 1);
  };
  const handleClickAddProduct = async ({
    name,
    img,
    weight,
    price,
    stock,
    id,
  }) => {
    if (auxCartAmount + amount <= auxCartStock) {
      dispatch(
        setShopCart({
          id,
          data: {
            name,
            img,
            weight,
            price,
            stock,
            id,
            amount: auxCartAmount + amount,
          },
        })
      );

      await Swal.fire({
        icon: "success",
        title: "Tu producto ha sido agregado con éxito!",
        showConfirmButton: false,
        timer: 1100,
      });
    } else {
      await Swal.fire({
        icon: "error",
        title: "No hay stock disponible",
        showConfirmButton: false,
        timer: 1100,
      });
    }
  };

  if (loading) return <ProductDetailSkeleton />;

  return (
    <div className=" flex min-h-screen w-full flex-col items-center  justify-center pt-20">
      <div className=" max-w-[60vw] ">
        <div className="flex flex-col md:flex-col lg:flex-row">
          <picture className="block  w-full  items-center justify-center lg:w-6/12">
            <img src={product?.img} alt="" className="w-[460px] " />
          </picture>
          <div className="inline-block w-full lg:w-6/12 ">
            <div>
              <h1 className="font-bold md:text-2xl lg:text-3xl">
                {product?.name}
              </h1>
              <button className="text-xs">Old Pince</button>
              <span className="text-xs">
                -Código del producto:{product?.id}
              </span>
              {/* --------------------------------------     [ Stars ]     ------------------------------------------ */}
              <div className="-mt-3">
                <QualificationStars rating={rating} />
              </div>
            </div>

            <div className="flex flex-col flex-wrap items-start gap-4 md:flex-row md:gap-8">
              <div>
                <h3>{"$" + product?.price}</h3>
              </div>
              <div>
                <button className="flex items-center text-[12px] font-bold uppercase text-pink-700">
                  <img src={cardCredit} alt="" /> Ver medios de pagos
                </button>
                <button className="flex  items-center text-[12px] font-bold uppercase text-pink-700">
                  <img src={transport} alt="" />
                  Producto con envio gratis
                </button>
              </div>
            </div>
            <div>
              <span className="text-xs">({product?.price + "x Kg"})</span>
              <h3>Seleccione Tamaño:</h3>
              <div className=" md:w-1/5 lg:w-1/4">
                <MoarButton component={product?.weight + "kg"} />
              </div>
            </div>
            <div>
              <span> Seleccione Cantidad:</span>
              <div className="w-1/2">
                <CountProduct
                  handleClickDeduct={handleClickDeduct}
                  handleClickAdd={handleClickAdd}
                  value={amount}
                />
              </div>
              <button
                className="my-2 rounded-lg bg-[#4dbb47] py-2 px-4 md:min-w-full lg:w-1/2"
                onClick={() => handleClickAddProduct(product)}
              >
                Añadir al carrito
              </button>
            </div>
            <div className="text-sm">
              <div>
                Opciones de Envío
                <span></span>
              </div>
              <div> Envío a Domicilio </div>
              <div className="md:text-xs lg:text-sm ">
                Envío gratis +$7500 en CABA y zonas de GBA. No aplica para
                Envíos al Interior
              </div>

              <div>
                Envío Flash
                <span></span>
              </div>
              <div className="text-xs">
                Envíos a todo CABA y zonas seleccionadas de AMBA. Envíos a todo
                CABA y zonas seleccionadas de AMBA. Envíos a todo CABA y zonas
                seleccionadas de AMBA.
              </div>
            </div>
            <div>
              <div>
                <div>Retiro en Sucursal</div>
                <div className="text-xs">
                  Retirá sin cargo por tu sucursal preferida
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 h-full min-h-[200px] w-full bg-gray-100">
        <Tabs.Group aria-label="Tabs with underline" style="underline">
          <Tabs.Item title="Descripción">
            <div>
              <p>{product?.description}</p>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Comentarios">
            <div>Reseñas de clientes</div>
          </Tabs.Item>
          <Tabs.Item title="Vendedor">
            <StoreDetail />
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}
export default ProductDetail;
