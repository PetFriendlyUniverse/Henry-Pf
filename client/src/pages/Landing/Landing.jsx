import { NavLink } from "react-router-dom";
import perronegro from "../../assets/perro-negro.jpg";
import comida from "../../assets/comida.jpg";
import retrato from "../../assets/retrato.jpg";
import pool from "../../assets/poolside.jpg";
import perrojugo from "../../assets/perrojugo.jpg";
import gatolentes from "../../assets/gatolentes.jpg";
import Buttons from "../../assets/Buttons/Buttons.jsx";

function Landing() {
  return (
    <div className="flex h-full w-full overflow-hidden bg-slate-100">
      <div className="flex h-16 w-96">
        <Buttons />
      </div>
      <div className="flex h-screen w-screen items-end justify-start border-2 border-black bg-slate-100 pr-48 pb-10">
        <section className="flex h-[400px] w-[430px] ">
          <img
            src={perrojugo}
            alt=""
            className="flex-grow-1 ease w-[200px] rounded-3xl object-cover opacity-80 drop-shadow-custom duration-500 hover:w-full hover:cursor-crosshair hover:opacity-100 hover:contrast-125"
          />
          <img
            src={gatolentes}
            alt=""
            className="flex-grow-1 ease w-[200px] rounded-3xl object-cover opacity-80 drop-shadow-custom duration-500 hover:w-full hover:cursor-crosshair hover:opacity-100 hover:contrast-125"
          />
          <img
            src={perronegro}
            alt=""
            className="flex-grow-1 ease w-[200px] rounded-3xl object-cover opacity-80 drop-shadow-custom duration-500 hover:w-full hover:cursor-crosshair hover:opacity-100 hover:contrast-125"
          />
          <img
            src={comida}
            alt=""
            className="flex-grow-1 ease w-[200px] rounded-3xl object-cover opacity-80 drop-shadow-custom duration-500 hover:w-full hover:cursor-crosshair hover:opacity-100 hover:contrast-125"
          />
          <img
            src={retrato}
            alt=""
            className="flex-grow-1  ease w-[200px] rounded-3xl object-cover opacity-80 drop-shadow-custom duration-500 hover:w-full hover:cursor-crosshair hover:opacity-100 hover:contrast-125"
          />
          <img
            src={pool}
            alt=""
            className="flex-grow-1 ease w-[200px] rounded-3xl object-cover opacity-80 drop-shadow-custom duration-500 hover:w-full hover:cursor-crosshair hover:opacity-100 hover:contrast-125"
          />
        </section>
      </div>
    </div>
  );
}

export default Landing;
