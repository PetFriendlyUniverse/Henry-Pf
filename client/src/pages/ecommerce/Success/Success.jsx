import { useLocation } from "react-router-dom";
function Success() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paymentId = queryParams.get("payment_id");
  const merchantOrder = queryParams.get("merchant_order_id");
  const status = queryParams.get("status");

  return <div>Success</div>;
}

export default Success;
