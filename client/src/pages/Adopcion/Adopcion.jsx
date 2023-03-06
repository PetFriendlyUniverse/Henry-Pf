import { InstagramEmbed } from "react-social-media-embed";
import { Carousel } from "flowbite-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdopcionesApi } from "../../redux/features/adopcion/adopcionActions";
import { setProvince } from "../../redux/features/services/servicesSlice";
import { getPronvinciasAsync } from "../../redux/features/ubicaciones/ubicacionesActions";
import PaginatorAdoption from "./components/PaginationAdoption";

function Adopcion() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAdopcionesApi());
  }, []);

  useEffect(() => {
    dispatch(getPronvinciasAsync());
  }, []);

  const handleChange = (e) => {
    dispatch(setProvince(e.target.value));
  };

  const adopciones = useSelector((state) => state.Adopciones.adopcion);

  return (
    <div className="h-full w-full  bg-adopcion ">
      <div className="flex  justify-center bg-transparent pb-24 sm:py-32">
        <div className=" border-fray-200 flex w-full flex-col justify-center rounded-xl border-2 px-6 py-10 pb-28 lg:px-8">
          {/* este div de abajo tiene el titular pro patas */}
          <div className="w-full  lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pro Patas Rosario & Pet Friendly Universe
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Ong animalista
            </p>
          </div>
          {/* este div de abajo tiene los embeed de instagram */}
          <div className="  mt-10 flex  w-full  flex-wrap  justify-center gap-2  border-t border-gray-200 pt-10 lg:mx-0 lg:max-w-none   lg:grid-cols-3 lg:gap-20 ">
            <div className="my-4 flex w-96 justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/reel/CpSf8fJuQbl/"
                width={328}
                height={500}
              />
            </div>

            <div className="my-4 flex justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/reel/CpRDz4vtIq1/"
                width={328}
                height={500}
              />
            </div>
            <div className="my-4 flex justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/p/CpOrZgNuF3L/"
                width={328}
                height={500}
              />
            </div>
            <div className="my-4 flex justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/reel/CpEDBusNcB4/"
                width={328}
                height={500}
              />
            </div>
            <div className="my-4 flex justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/p/CpDhrWJJuDQ/"
                width={328}
                height={500}
              />
            </div>
            <div className="my-4 flex justify-center">
              <InstagramEmbed
                url="https://www.instagram.com/p/Co-KvuyOZ_I/"
                width={328}
                height={500}
              />
            </div>

            {/* <!-- More posts... --> */}
          </div>
          {/* el de abajo es el div de la card */}
          <div className=" mt-10  flex h-full  w-full flex-wrap justify-center gap-2 border-t  border-gray-200 pt-10  lg:mx-0 lg:max-w-none   lg:grid-cols-3 lg:gap-20 2xl:h-[600px]">
            {/* <article className="my-4 flex h-[600px]  w-[328px] max-w-xl flex-col items-start justify-between border bg-white ">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Ubicacion
                </a>
              </div>
              <Carousel>
                <img
                  src="https://dogfriendlysanantonio.com/wp-content/uploads/2020/06/dog-adoption-san-antonio-1024x768.png"
                  alt=""
                />
                <img
                  src="https://dogfriendlysanantonio.com/wp-content/uploads/2020/06/dog-adoption-san-antonio-1024x768.png"
                  alt=""
                />
                <img
                  src="https://dogfriendlysanantonio.com/wp-content/uploads/2020/06/dog-adoption-san-antonio-1024x768.png"
                  alt=""
                />
              </Carousel>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Adopcion RESPONSABLE
                  </a>
                </h3>
                <p className="line-clamp-3 mt-5 text-sm leading-6 text-gray-600">
                  este texto es para una descripcion breve de las
                  caracteristicas correspondientes a la mascota, situacion
                  medica, zona donde se encuentra, requisitos para adopcion en
                  caso de ser requeridos
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      <p>Raul Gimenez</p>
                      <p>3417777777</p>
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Alojamiento: hogar de transito{" "}
                  </p>
                </div>
              </div>
            </article>
            <article className="my-4 flex h-[600px]  w-[328px] max-w-xl flex-col items-start justify-between border bg-white ">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Ubicacion
                </a>
              </div>
              <Carousel>
                <img
                  src="https://dogfriendlysanantonio.com/wp-content/uploads/2020/06/dog-adoption-san-antonio-1024x768.png"
                  alt=""
                />
                <img
                  src="https://dogfriendlysanantonio.com/wp-content/uploads/2020/06/dog-adoption-san-antonio-1024x768.png"
                  alt=""
                />
                <img
                  src="https://dogfriendlysanantonio.com/wp-content/uploads/2020/06/dog-adoption-san-antonio-1024x768.png"
                  alt=""
                />
              </Carousel>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Adopcion RESPONSABLE
                  </a>
                </h3>
                <p className="line-clamp-3 mt-5 text-sm leading-6 text-gray-600">
                  este texto es para una descripcion breve de las
                  caracteristicas correspondientes a la mascota, situacion
                  medica, zona donde se encuentra, requisitos para adopcion en
                  caso de ser requeridos
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      <p>Martin Garcia</p>
                      <p>341888888</p>
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Alojamiento: hogar de transito{" "}
                  </p>
                </div>
              </div>
            </article>
            <article className="my-4 flex h-[600px]  w-[328px] max-w-xl flex-col items-start justify-between border bg-white ">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime="2020-03-16" className="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                >
                  Ubicacion
                </a>
              </div>
              <Carousel>
                <img
                  src="https://dogfriendlysanantonio.com/wp-content/uploads/2020/06/dog-adoption-san-antonio-1024x768.png"
                  alt=""
                />
                <img
                  src="https://dogfriendlysanantonio.com/wp-content/uploads/2020/06/dog-adoption-san-antonio-1024x768.png"
                  alt=""
                />
                <img
                  src="https://dogfriendlysanantonio.com/wp-content/uploads/2020/06/dog-adoption-san-antonio-1024x768.png"
                  alt=""
                />
              </Carousel>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span className="absolute inset-0"></span>
                    Adopcion RESPONSABLE
                  </a>
                </h3>
                <p className="line-clamp-3 mt-5 text-sm leading-6 text-gray-600">
                  este texto es para una descripcion breve de las
                  caracteristicas correspondientes a la mascota, situacion
                  medica, zona donde se encuentra, requisitos para adopcion en
                  caso de ser requeridos
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0"></span>
                      <p>Diego gutierrez</p>
                      <p>34166666</p>
                    </a>
                  </p>
                  <p className="text-gray-600">
                    Alojamiento: hogar de transito{" "}
                  </p>
                </div>
              </div>
            </article> */}
            <PaginatorAdoption />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adopcion;
