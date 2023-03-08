import perronegro from "../../assets/imagenes/perro-negro.jpg";
import comida from "../../assets/imagenes/comida.jpg";
import retrato from "../../assets/imagenes/retrato.jpg";
import pool from "../../assets/imagenes/poolside.jpg";
import perrojugo from "../../assets/imagenes/perrojugo.jpg";
import gatolentes from "../../assets/imagenes/gatolentes.jpg";
import Buttons from "../../assets/Buttons/Buttons.jsx";
import logo from "../../assets/logo/logo.png";
import htmlLogo from "../../assets/general/html-1.svg";
import cssLogo from "../../assets/general/css-3.svg";
import jsLogo from "../../assets/general/javascript-1.svg";
import nodeLogo from "../../assets/general/nodejs-1.svg";
import reactLogo from "../../assets/general/react-2.svg";
import reduxLogo from "../../assets/general/redux.svg";
import tailwindLogo from "../../assets/general/tailwind-css-2.svg";
import expressLogo from "../../assets/general/express-109.svg";
import postgressLogo from "../../assets/general/postgresql.svg";
import nativeLogo from "../../assets/general/react-native-1.svg";

function Landing() {
  return (
    <div className=" flex h-full w-full flex-col-reverse bg-adopcion  font-mono font-semibold  lg:flex-row ">
      <div className=" z-20 mt-10 flex h-14 w-full justify-center  gap-4 border-2 border-black sm:mt-0 lg:h-full lg:w-96  lg:justify-start ">
        <Buttons />
      </div>

      <div className="flex h-full w-full flex-col justify-start sm:w-full">
        <div className="flex flex-col items-center justify-center p-4 text-center sm:mt-10 ">
          <img src={logo} alt="" className="mb-2 w-1/5 pb-2 sm:w-2/12" />
          <h1 className="pb-2 text-xl font-bold sm:mb-4 sm:w-full sm:text-lg">
            BIENVENIDOS a{" "}
            <span className="rounded-xl px-1 text-2xl text-yellow-400">
              PET
            </span>{" "}
            <span className="rounded-xl px-1 text-2xl text-cornflowerblue">
              FRIENDLY UNIVERSE
            </span>{" "}
          </h1>
          <hr className="h-1 w-10/12 rounded-full bg-gray-600 text-base opacity-20 sm:w-6/12"></hr>
          <article className=" flex flex-col items-center justify-center p-4  text-start sm:mb-4 sm:w-full">
            <p className="w-full pt-2 sm:w-6/12 sm:text-sm">
              Nuestra sección de{" "}
              <span className="rounded-xl bg-cornflowerblue px-1 text-white">
                SHOP
              </span>{" "}
              tiene un final solidario, parte de la recaudación será donada a
              una protectora designada en la sección de adopción responsable
              para poder colaborar a una mejora cultural en el cuidado de
              nuestros animalitos. En nuestra sección de servicios podrán
              encontrar guarderias y paseadores de mascotas. También tenemos un
              apartado especial{" "}
              <span className="rounded-xl bg-cornflowerblue px-1 text-white">
                ADOPCIONES
              </span>{" "}
              para publicar mascotas en busqueda de hogares transitorios y
              permanentes para darle visibilad y mayor alcance e intentar
              acelerar las adopciones{" "}
              <span className="rounded-xl bg-cornflowerblue px-1 text-white">
                RESPONSABLES
              </span>{" "}
              Esperamos disfruten su estadia !
            </p>
          </article>
          {/* <div className="mt-4 mb-0 flex w-full flex-wrap justify-center gap-6 self-center rounded-xl bg-violet-200 p-4 sm:mt-8 sm:w-10/12">
            <img
              src={htmlLogo}
              alt="Html"
              title="Html"
              className="w-10 sm:w-12 md:w-14"
            />
            <img
              src={cssLogo}
              alt="Css"
              title="Css"
              className="w-10 sm:w-12 md:w-14"
            />
            <img
              src={jsLogo}
              alt="Javascrip "
              title="Javascrip"
              className="w-10 sm:w-12 md:w-14"
            />
            <img
              src={nodeLogo}
              alt="Node Js"
              title="Node Js"
              className="w-10 sm:w-12 md:w-14"
            />
            <img
              src={reactLogo}
              alt="React Js"
              title="React Js"
              className="w-10 sm:w-12 md:w-14"
            />
            <img
              src={reduxLogo}
              alt="Redux Toolkit"
              title="Redux Toolkit"
              className="w-10 sm:w-12 md:w-14"
            />
            <img
              src={tailwindLogo}
              alt="Tailwind Css"
              title="Tailwind Css"
              className="w-10 sm:w-12 md:w-14"
            />
            <img
              src={expressLogo}
              alt="Express Js"
              title="Express Js"
              className="w-10 sm:w-12 md:w-14"
            />
            <img
              src={postgressLogo}
              alt="Postgress Sql"
              title="Postgress Sql"
              className="w-10 sm:w-12 md:w-14"
            />
            <img
              src={nativeLogo}
              alt="React Native"
              title="React Native"
              className="w-10 sm:w-12 md:w-14"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Landing;
