import { Link } from "react-router-dom";

import LinkButton from "../Button/LinkButton";
import NF404 from "../../assets/general/error-404.png";

function NotFound() {
  return (
    <div className=" w-full py-28">
      <div className="flex justify-center px-0 align-middle">
        <img src={NF404} alt="PageNotFound" className="w-96" />
      </div>
      <div className="flex justify-center px-0 align-middle">
        <Link to="/shop">
          <LinkButton component={"Tienda"} />
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
