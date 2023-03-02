import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

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

  useEffect(async () => {
    const mpToken = await getToken();
    const invoiceData = await getInvoicesInfo(mpToken, merchantOrder);
    await axios.post("/invoices/create", invoiceData);
  }, []);

  return (
    <div>
      <span>{paymentId}</span>
      <br />
      <span>{merchantOrder}</span>
      <br />
      <span>{status}</span>
    </div>
  );
}

export default Success;
