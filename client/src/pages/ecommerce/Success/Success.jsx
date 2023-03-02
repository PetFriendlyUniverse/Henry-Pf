import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function Success() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paymentId = queryParams.get("payment_id");
  const merchantOrder = queryParams.get("merchant_order_id");
  const status = queryParams.get("status");

  const getToken = async () => {
    const { data } = await axios.get("/token");
    return data;
  };

  const getInvoicesInfo = async (token, merchantOrder) => {
    const { data } = await axios.get(
      `https://api.mercadopago.com/merchant_orders/${merchantOrder}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return data;
  };

  useEffect(async () => {
    const mpToken = await getToken();
    const invoiceData = await getInvoicesInfo(mpToken, merchantOrder);
    console.log(invoiceData);
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
