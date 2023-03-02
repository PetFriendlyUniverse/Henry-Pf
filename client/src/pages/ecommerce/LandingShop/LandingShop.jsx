import { Link } from "react-router-dom";
import { Carousel } from "flowbite-react";
import logo from "../../../assets/logo/logo.png";
import img1 from "../../../assets/imagenes/doghouse-01.png";
import img2 from "../../../assets/imagenes/food-01.png";
import img3 from "../../../assets/imagenes/toys-01.png";
import img4 from "../../../assets/imagenes/gatos-juguetes-0.jpg";
import img5 from "../../../assets/imagenes/cat-tree.jpg";
import img6 from "../../../assets/imagenes/camaa-gato.jpg";
import Recomendados from "../../../components/Recomendados/Recomendados";
import { useDispatch } from "react-redux";
import { setFilters } from "../../../redux/features/products/productsSlice";
import universe from "../../../assets/imagenes/ASD-01.png";

function LandingShop() {
  const dispatch = useDispatch();
  const handleSetFilter = (specie) => {
    dispatch(setFilters({ filter: "Species", value: specie }));
  };
  return (
    <>
      <header className="clip-header relative flex w-full flex-col overflow-hidden  bg-cover bg-fixed bg-center bg-no-repeat pt-0 text-black sm:h-[350px] lg:h-[550px] lg:min-h-[400px]  xl:min-h-[400px]">
        <img
          src={universe}
          alt=""
          className="absolute -top-20 h-0 w-0 object-cover contrast-125 sm:top-0 sm:h-full sm:w-full"
        ></img>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="z-10 overflow-hidden sm:mx-auto  sm:grid sm:h-0 sm:w-0 sm:grid-cols-3 sm:items-center sm:justify-center sm:gap-1 md:justify-items-center lg:top-1/2 lg:grid-cols-6 lg:gap-4">
          <Link
            onClick={() => {
              handleSetFilter("Perros");
            }}
            className="lg:col-start-1 lg:col-end-3 lg:h-3/5 lg:w-full xl:w-3/4"
            to="/shop"
          >
            <div className="relative flex h-[450px] items-center  justify-center   overflow-hidden sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-full lg:w-full">
              <div className=" absolute inset-0 z-10 bg-perros bg-cover bg-center bg-no-repeat duration-200  hover:scale-125 hover:contrast-125 lg:bg-cover "></div>
            </div>
          </Link>

          <Link
            onClick={() => {
              handleSetFilter("Gatos");
            }}
            className="lg:col-start-3 lg:col-end-5 lg:h-3/5 lg:w-full xl:w-3/4"
            to="/shop"
          >
            <div className="relative flex h-[450px] items-center  justify-center   overflow-hidden sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-full lg:w-full">
              <div className=" absolute inset-0 z-10  bg-gatos bg-cover bg-center bg-no-repeat duration-200 hover:scale-125 hover:contrast-125 lg:bg-cover "></div>
            </div>
          </Link>

          <Link
            className="lg:col-start-5 lg:col-end-8 lg:h-3/5 lg:w-full xl:w-3/4"
            to="/shop"
          >
            <div className="relative flex h-[450px] items-center  justify-center   overflow-hidden sm:h-48 sm:w-48 md:h-52 md:w-52 lg:h-full lg:w-full">
              <div className=" absolute inset-0 z-10 bg-contacto bg-cover bg-center bg-no-repeat duration-200  hover:scale-125 hover:contrast-125 lg:bg-cover "></div>
            </div>
          </Link>
        </div>
      </header>
      <main className="bg-[url('https://petfood.com.ar/img/cms/symphony.png')] py-6 px-3 sm:px-5 md:px-10 lg:px-32 xl:px-52 2xl:px-80 ">
        <section className="mt-5 flex w-full flex-col items-center sm:grid sm:grid-cols-2 sm:gap-3">
          <div className="flex flex-col items-center justify-center sm:col-start-1 sm:col-end-3">
            <h1 className="text-center font-bold uppercase sm:text-2xl">
              productos
              <span className="font-bold uppercase text-cornflowerblue sm:text-2xl">
                {" "}
                destacados
              </span>
            </h1>
            <Link
              to="/shop"
              className="my-3 mt-12 flex w-10/12 items-center justify-center gap-2  bg-russianviolet py-1 text-white sm:gap-5 sm:py-2  sm:px-4 lg:h-16"
            >
              <span>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Menu</title>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g id="Menu">
                        {" "}
                        <rect
                          id="Rectangle"
                          fillRule="nonzero"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          {" "}
                        </rect>{" "}
                        <line
                          x1="5"
                          y1="7"
                          x2="19"
                          y2="7"
                          id="Path"
                          stroke="#0C0310"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          {" "}
                        </line>{" "}
                        <line
                          x1="5"
                          y1="17"
                          x2="19"
                          y2="17"
                          id="Path"
                          stroke="#0C0310"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          {" "}
                        </line>{" "}
                        <line
                          x1="5"
                          y1="12"
                          x2="19"
                          y2="12"
                          id="Path"
                          stroke="#0C0310"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          {" "}
                        </line>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </span>
              <span className="text-xs uppercase sm:text-base">
                ver nuestro shop completo
              </span>
            </Link>
          </div>
          <div className="mt-8 flex w-full flex-col items-center sm:col-start-1 sm:col-end-2">
            <Link
              to="/shop"
              className="my-3 flex w-4/5 items-center justify-center gap-2 bg-russianviolet py-1 text-white sm:gap-5 sm:py-2  sm:px-4 lg:h-16"
            >
              <span>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Menu</title>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g id="Menu">
                        {" "}
                        <rect
                          id="Rectangle"
                          fillRule="nonzero"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          {" "}
                        </rect>{" "}
                        <line
                          x1="5"
                          y1="7"
                          x2="19"
                          y2="7"
                          id="Path"
                          stroke="#0C0310"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          {" "}
                        </line>{" "}
                        <line
                          x1="5"
                          y1="17"
                          x2="19"
                          y2="17"
                          id="Path"
                          stroke="#0C0310"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          {" "}
                        </line>{" "}
                        <line
                          x1="5"
                          y1="12"
                          x2="19"
                          y2="12"
                          id="Path"
                          stroke="#0C0310"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          {" "}
                        </line>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </span>
              <span className="text-xs uppercase sm:text-base">
                ver todos los articulos para perros
              </span>
            </Link>
            <div className="mt-12 h-96 w-full sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                <img src={img1} alt="..." />
                <img src={img2} alt="..." />
                <img src={img3} alt="..." />
              </Carousel>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col items-center sm:col-start-2 sm:col-end-3">
            <Link
              to="/shop"
              className="mb-3 mt-10  flex w-4/5 items-center justify-center gap-2 bg-russianviolet py-1 text-white sm:my-3 sm:gap-5 sm:py-2 sm:px-4 lg:h-16 "
            >
              <span>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Menu</title>{" "}
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth="1"
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g id="Menu">
                        {" "}
                        <rect
                          id="Rectangle"
                          fillRule="nonzero"
                          x="0"
                          y="0"
                          width="24"
                          height="24"
                        >
                          {" "}
                        </rect>{" "}
                        <line
                          x1="5"
                          y1="7"
                          x2="19"
                          y2="7"
                          id="Path"
                          stroke="#0C0310"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          {" "}
                        </line>{" "}
                        <line
                          x1="5"
                          y1="17"
                          x2="19"
                          y2="17"
                          id="Path"
                          stroke="#0C0310"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          {" "}
                        </line>{" "}
                        <line
                          x1="5"
                          y1="12"
                          x2="19"
                          y2="12"
                          id="Path"
                          stroke="#0C0310"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          {" "}
                        </line>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </span>
              <span className="text-xs uppercase sm:text-base">
                ver todos los articulos para gatos
              </span>
            </Link>
            <div className="mt-12 h-96 w-full sm:h-64 xl:h-80 2xl:h-96">
              <Carousel>
                <img src={img4} alt="..." />
                <img src={img5} alt="..." />
                <img src={img6} alt="..." />
              </Carousel>
            </div>
          </div>
        </section>
        <section className="clip-aboutUs mt-12 flex h-96 flex-col items-center justify-center gap-10   bg-colorFilter lg:px-52 xl:h-[500px] xl:px-64">
          <div className="flex flex-col items-center justify-center gap-2 pt-3 ">
            <h2 className="text-2xl font-bold text-yellow-400 sm:text-3xl">
              Pet Friendly Universe
            </h2>
            <span className="text-xl font-bold uppercase text-green-500 sm:text-2xl">
              Tienda Online
            </span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 ">
            <h3 className="text-slate-2 00 text-2xl font-bold  uppercase sm:text-3xl">
              Sobre nosotros
            </h3>
            <p className="p-2 text-center  text-slate-200 sm:px-10 ">
              Somos un grupo de 8 estudiantes de Henry apasionados por la
              programación. <br /> ¡Estamos muy felices de su visita, esperamos
              que disfrutes la experiencia en nuestra sitio web!.
            </p>
          </div>
        </section>
        <section className="clip-payMethod mt-5 flex h-96 flex-col items-center justify-center gap-6 bg-[#F7B508] px-4 sm:h-[420px] lg:px-52 xl:h-[500px] xl:px-64">
          <div className="">
            <h4 className="text-center font-bold uppercase sm:text-3xl">
              medios <span className="uppercase text-white">de pago</span>
            </h4>
            <p className="mt-3 text-center font-semibold uppercase sm:mt-5 sm:px-2 sm:text-xl">
              Trabajamos con todos los medios de pago ofrecidos por <br />
              <span className="text-blue-700">MERCADO PAGO</span>
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://petfood.com.ar/img/cms/mercado2.gif"
              alt=""
              className="w-40"
            />
            <img
              src="https://petfood.com.ar/img/cms/mercadopago-horizontal-listo.png"
              alt=""
              className="w-4/5"
            />
          </div>
        </section>

        <section className="relative mt-5 flex h-96 flex-col items-center justify-center gap-8 bg-slate-600  bg-gradient-to-b  from-slate-600 to-slate-900 bg-cover bg-center bg-no-repeat px-4 lg:px-52 xl:h-[500px] xl:px-64">
          <img src={logo} alt="" className="w-28" />
          <p className="text-center font-medium text-white sm:text-lg">
            Nuestra sección de shop tiene un final solidario, parte de la
            recaudacion sera donada a una protectora designada en la seccion de
            adopcion responsable para poder colaborar a una mejora cultural en
            el cuidado de nuestros animalitos. Esperamos disfruten su estadia !
          </p>
        </section>
        <section className="mt-5 ">
          <div className="flex  h-20 items-center ">
            <h4 className="w-full text-center text-2xl font-bold uppercase">
              <span className="text-cornflowerblue">nuestras</span> marcas
            </h4>
          </div>
          <div className="h-40 ">
            <Recomendados />
          </div>
        </section>
      </main>
    </>
  );
}

export default LandingShop;
