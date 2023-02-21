import { Link } from "react-router-dom";

import LinkButton from "../../components/Button/LinkButton";
import Construction from "../../assets/borrador/construction.png";

function Incoming() {
  return (
    <div className=" w-full py-28">
      <div className="flex justify-center px-0 align-middle">
        <img src={Construction} alt="InProgress" className="w-96" />
      </div>
      <div className="flex justify-center px-0 pb-10 align-middle">
        <h1 className="text-7xl font-extrabold">Sitio en desarrollo</h1>
      </div>
      <div className="flex justify-center px-0 align-middle">
        <Link to="/landingshop">
          <LinkButton component={"Volver"} />
        </Link>
      </div>
    </div>
  );
}

export default Incoming;
