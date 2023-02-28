import { Carousel } from "flowbite-react";

function Adopcion() {
  return (
    <div className="h-full w-full  bg-adopcion ">
      <div class="flex  justify-center bg-transparent py-24 sm:py-32">
        <div class=" border-fray-200 flex w-4/5 flex-col justify-center rounded-xl border-2 px-6 py-28 lg:px-8">
          {/* este div de abajo tiene el titular pro patas */}
          <div class=" max-w-full  lg:mx-0">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pro Patas Rosario & Pet Friendly Universe
            </h2>
            <p class="mt-2 text-lg leading-8 text-gray-600">Ong animalista</p>
          </div>
          {/* el de abajo es el div de la card */}
          <div class=" mt-10 grid  w-full grid-cols-1 gap-y-16 gap-x-8  border-t border-gray-200 pt-10 lg:mx-0 lg:max-w-none   lg:grid-cols-3 lg:gap-20 2xl:h-[600px]">
            <article class="flex max-w-xl flex-col items-start justify-between ">
              <div class="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" class="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
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
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Adopcion RESPONSABLE
                  </a>
                </h3>
                <p class="line-clamp-3 mt-5 text-sm leading-6 text-gray-600">
                  este texto es para una descripcion breve de las
                  caracteristicas correspondientes a la mascota, situacion
                  medica, zona donde se encuentra, requisitos para adopcion en
                  caso de ser requeridos
                </p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="h-10 w-10 rounded-full bg-gray-50"
                />
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      <p>Raul Gimenez</p>
                      <p>3417777777</p>
                    </a>
                  </p>
                  <p class="text-gray-600">Alojamiento: hogar de transito </p>
                </div>
              </div>
            </article>
            <article class="flex max-w-xl flex-col items-start justify-between ">
              <div class="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" class="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
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
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Adopcion RESPONSABLE
                  </a>
                </h3>
                <p class="line-clamp-3 mt-5 text-sm leading-6 text-gray-600">
                  este texto es para una descripcion breve de las
                  caracteristicas correspondientes a la mascota, situacion
                  medica, zona donde se encuentra, requisitos para adopcion en
                  caso de ser requeridos
                </p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="h-10 w-10 rounded-full bg-gray-50"
                />
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      <p>Martin Garcia</p>
                      <p>341888888</p>
                    </a>
                  </p>
                  <p class="text-gray-600">Alojamiento: hogar de transito </p>
                </div>
              </div>
            </article>
            <article class="flex max-w-xl flex-col items-start justify-between ">
              <div class="flex items-center gap-x-4 text-xs">
                <time datetime="2020-03-16" class="text-gray-500">
                  Mar 16, 2020
                </time>
                <a
                  href="#"
                  class="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
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
              <div class="group relative">
                <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href="#">
                    <span class="absolute inset-0"></span>
                    Adopcion RESPONSABLE
                  </a>
                </h3>
                <p class="line-clamp-3 mt-5 text-sm leading-6 text-gray-600">
                  este texto es para una descripcion breve de las
                  caracteristicas correspondientes a la mascota, situacion
                  medica, zona donde se encuentra, requisitos para adopcion en
                  caso de ser requeridos
                </p>
              </div>
              <div class="relative mt-8 flex items-center gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  class="h-10 w-10 rounded-full bg-gray-50"
                />
                <div class="text-sm leading-6">
                  <p class="font-semibold text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0"></span>
                      <p>Diego gutierrez</p>
                      <p>34166666</p>
                    </a>
                  </p>
                  <p class="text-gray-600">Alojamiento: hogar de transito </p>
                </div>
              </div>
            </article>

            {/* <!-- More posts... --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adopcion;
