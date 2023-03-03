import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import html2canvas from "html2canvas";
import axios from "axios";
import payment from "../../../assets/imagenes/payment.svg";

function Success() {
  const location = useLocation();
  const userId = localStorage.getItem("id");
  const queryParams = new URLSearchParams(location.search);
  const paymentId = queryParams.get("payment_id");
  const merchantOrder = queryParams.get("merchant_order_id");
  const status = queryParams.get("status");
  /////////////-----------------------------------------////////////
  const objeto = {
    id: 7942700029,
    status: "closed",
    external_reference: "",
    preference_id: "1314980298-52bed631-403e-4af0-9717-0deccc12f452",
    payments: [
      {
        id: 55177661249,
        transaction_amount: 8100,
        total_paid_amount: 8100,
        shipping_cost: 0,
        currency_id: "ARS",
        status: "approved",
        status_detail: "accredited",
        operation_type: "regular_payment",
        date_approved: "2023-02-28T09:14:57.000-04:00",
        date_created: "2023-02-28T09:14:57.000-04:00",
        last_modified: "2023-02-28T09:14:57.000-04:00",
        amount_refunded: 0,
      },
    ],
    shipments: [],
    payouts: [],
    collector: {
      id: 1314980298,
      email: "",
      nickname: "TEST_USER_1314980298",
    },
    marketplace: "NONE",
    notification_url: null,
    date_created: "2023-02-28T09:14:56.949-04:00",
    last_updated: "2023-02-28T09:14:57.411-04:00",
    sponsor_id: null,
    shipping_cost: 0,
    total_amount: 8100,
    site_id: "MLA",
    paid_amount: 8100,
    refunded_amount: 0,
    payer: {
      id: 1314986491,
      email: "",
    },
    items: [
      {
        id: "1",
        category_id: "",
        currency_id: "ARS",
        description: "",
        picture_url:
          "https://http2.mlstatic.com/D_NQ_NP_932495-MLA54056839113_022023-F.jpg",
        picture_id: "932495-MLA54056839113_022023",
        title: "Alimento Eukanuba de Pollo y Cordero",
        quantity: 3,
        unit_price: 2700,
      },
      {
        id: "2",
        category_id: "",
        currency_id: "ARS",
        description: "",
        picture_url:
          "https://http2.mlstatic.com/D_NQ_NP_932495-MLA54056839113_022023-F.jpg",
        picture_id: "932495-MLA54056839113_022023",
        title: "Alimento Eukanuba de Pollo y Cordero",
        quantity: 3,
        unit_price: 2700,
      },
    ],
    cancelled: false,
    additional_info: "",
    application_id: null,
    order_status: "paid",
  };
  /////////////-----------------------------------------////////////
  const getToken = async () => {
    const { data } = await axios.get("/token");
    return data;
  };

  const getInvoicesInfo = async (token, merchantOrder) => {
    /* const { data } = await axios.get(
      `https://api.mercadopago.com/merchant_orders/${merchantOrder}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    */
    const requestData = {
      userId: userId,
      /// reemplazar la variable objeto por data
      products: objeto.items.map((product) => {
        return {
          id: product.id,
          unitPrice: product.unit_price,
          quantity: product.quantity,
        };
      }),
      paymentId: paymentId,
      merchantOrder: merchantOrder,
      status: status,
    };

    return requestData;
  };
  //  ----------------------------
  const screenshotInvoice = (id) => {
    const invoice = document.getElementById("invoice");

    html2canvas(invoice).then((canvas) => {
      const link = document.createElement("a");
      link.download = `invoice-petfriendly-${id}.png`;
      link.href = canvas.toDataURL();
      link.click();
    });
  };
  useEffect(() => {
    async function getPaymentData() {
      const mpToken = await getToken();
      const invoiceData = await getInvoicesInfo(mpToken, merchantOrder);
      await axios.post("/invoices/create", invoiceData);
    }
    getPaymentData();
  }, []);

  return (
    <div className="flex h-full min-h-[70vh] w-full flex-col items-center justify-center bg-adopcion py-5 md:min-h-[60vh] md:py-4 lg:min-h-[50h] xl:min-h-[73vh] 2xl:min-h-[82vh]">
      <div
        id="invoice"
        className=" mx-2 flex flex-col  items-center justify-center gap-3 rounded-lg  bg-russianviolet px-5 py-10 shadow-lg  shadow-black"
      >
        <div className="flex flex-col items-center justify-center ">
          <h2 className="text-center text-base font-semibold uppercase text-sky-400">
            Tu compra fue realizada con
            <span className=" text-yellow-400"> éxito</span>
          </h2>
          <img src={payment} alt="" className="h-36 w-36 " />
        </div>
        <div className="w-full px-3">
          <h3 className="pb-3 font-medium text-sky-400">
            <span className="text-white">Detalle</span> de tu{" "}
            <span className="text-yellow-400">compra:</span>
          </h3>
          <h4 className="text-white">
            Número de factura:{" "}
            <span className="text-yellow-400">{objeto.id}</span>{" "}
          </h4>
          <div className="">
            <h5 className="text-lg text-white">Productos:</h5>
            <ul
              className={`h-36 ${
                objeto.items.length > 3 && "overflow-scroll overflow-x-hidden"
              }`}
            >
              {objeto.items.map((item, i) => (
                <>
                  {/* <hr className="h-px bg-slate-900" /> */}
                  <li
                    className="flex justify-between gap-5 py-1 px-3 text-sm font-semibold text-cornflowerblue"
                    key={i}
                  >
                    <span>{item.title}</span>
                    <span>${item.unit_price}</span>
                  </li>
                </>
              ))}
            </ul>
          </div>
          <div className="flex justify-end pt-3">
            <h4 className="text-lg text-white">
              Monto total:{" "}
              <span className="text-base text-yellow-400">
                ${objeto.total_amount}
              </span>
            </h4>
          </div>
        </div>
      </div>
      {/* div boton */}
      <div className=" flex w-full justify-center   pt-8">
        <button
          className=" flex items-center gap-2 rounded-lg bg-cornflowerblue px-4 py-1 uppercase text-white shadow-lg shadow-[rgba(0,0,0,0.6)] transition-all duration-300 focus:translate-y-1"
          onClick={() => screenshotInvoice(objeto.id)}
        >
          guardar factura
          <svg
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            width="20px"
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m.75 12l3 3m0 0l3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Success;
