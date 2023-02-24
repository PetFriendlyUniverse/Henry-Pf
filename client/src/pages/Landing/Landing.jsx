import perronegro from "../../assets/imagenes/perro-negro.jpg";
import comida from "../../assets/imagenes/comida.jpg";
import retrato from "../../assets/imagenes/retrato.jpg";
import pool from "../../assets/imagenes/poolside.jpg";
import perrojugo from "../../assets/imagenes/perrojugo.jpg";
import gatolentes from "../../assets/imagenes/gatolentes.jpg";
import Buttons from "../../assets/Buttons/Buttons.jsx";
import logo from "../../assets/logo/logo.png";

function Landing() {
  return (
    <div className=" flex h-full w-full bg-whitepattern bg-cover bg-no-repeat font-mono font-semibold ">
      <div className="z-20 flex h-16 w-96 gap-4 ">
        <Buttons />
      </div>

      <div className="flex h-[99.6vh] flex-col justify-between">
        <div className="">
          <article className=" flex flex-col items-center justify-center pt-8 text-center">
            <img src={logo} alt="" className="pb-2" />
            <h1 className="w-2/12 pb-2 font-bold">
              Bienvenidos a pet friendly universe
            </h1>
            <hr className="h-1  w-3/12 rounded-full bg-gray-600 opacity-20"></hr>
            <p className="w-4/12 pt-2">
              Nuestra sección de shop tiene un final solidario, parte de la
              recaudacion sera donada a una protectora designada en la seccion
              de adopcion responsable para poder colaborar a una mejora cultural
              en el cuidado de nuestros animalitos. Esperamos disfruten su
              estadia !
            </p>
          </article>
        </div>

        <div className="flex  w-full flex-col justify-end   pr-48 pl-10 pb-10 ">
          <section className="flex h-[400px] w-[430px] ">
            <img
              src={perrojugo}
              alt=""
              className="flex-grow-1 ease w-[200px] rounded-3xl object-cover opacity-80 drop-shadow-custom duration-500 hover:h-full hover:w-full hover:cursor-crosshair hover:opacity-100 hover:contrast-125"
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
    </div>
  );
}

export default Landing;
