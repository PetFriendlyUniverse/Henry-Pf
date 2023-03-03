import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useState, useEffect } from "react";
import "react-loading-skeleton/dist/skeleton.css";

function Services() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const loaderr = () => {
    return (
      // contenedor completo
      <SkeletonTheme baseColor="#9c9c9c" highlightColor="white">
        <div className="  m-12 mx-auto flex w-1/2 select-none flex-col  gap-10 rounded-2xl bg-white p-2 shadow-lg sm:h-64 sm:flex-row sm:p-4 ">
          <div className=" flex flex-1 flex-col gap-16 sm:p-2">
            <div className="flex flex-1 flex-col gap-3">
              <div className="h-14 w-full animate-pulse rounded-2xl bg-gray-200"></div>
              <div className="h-14 w-full animate-pulse rounded-2xl bg-gray-200"></div>
              <div className="h-14 w-full animate-pulse rounded-2xl bg-gray-200"></div>
            </div>
          </div>
          <div className="h-60 w-64 animate-pulse rounded-xl bg-gray-200 sm:h-full sm:w-72"></div>
        </div>
      </SkeletonTheme>
    );
  };

  if (loading) {
    return loaderr();
  } else {
    return (
      // contenedor completo
      <div className="flex  items-center justify-center  ">
        <div className="mx-auto flex h-full w-4/5 items-center justify-center">
          <div className="flex w-1/2 flex-col items-center justify-center gap-16">
            <h2 className="text-center text-5xl font-bold uppercase">
              Este sector se encuentra
              <span className="text-russianviolet"> en construcción</span>
            </h2>
            {/* <img
            src="https://w7.pngwing.com/pngs/973/337/png-transparent-dog-graphy-architectural-engineering-illustration-creative-puppy-anthropomorphic-design-infographic-animals-carnivoran.png"
            alt=""
            className="bg-blend-multiply brightness-[1.1] "
          /> */}
          </div>
          <div className="flex w-1/2 items-end">
            <img
              src="https://img.freepik.com/premium-vector/dog-handler-volunteering-with-pets-dog-walking-service-vector-illustration_131590-418.jpg?w=2000"
              alt=""
              className=""
            />
          </div>
        </div>
        {/* aca va una segunda navbar con filtros generales por ubicacion, raza, y servicios */}
        {/* <div className="flex h-24">
        <select
          name="ubicacion"
          id="location"
          required="true"
          visible="5"
          className="h-8 self-center border-2 border-black"
        >
          <label htmlFor="location">Ubicación</label>
          <option>ubicacion</option>
          <option>buenos aires</option>
          <option>tucuman</option>
          <option>mendoza</option>
          <option>misiones</option>
        </select>
        <select className="h-8 self-center border-2  border-black">
          <option>precio </option>
          <option>mayor a menor</option>
          <option>menor a mayo</option>
        </select>
        <select className="h-8 self-center border-2  border-black">
          <option>especie </option>
          <option>gatos</option>
          <option>perros</option>
        </select>
      </div> */}
        {/* subcontenedor que contiene las 2 card containers (de walkers y de daycare) */}
        {/* <div className="flex h-full w-full justify-around gap-4  border-2 border-black"> */}
        {/* card container daycare */}
        {/* <div className="flex h-full w-1/2 flex-wrap justify-center gap-4  border-2 border-black p-4">
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre de guarderia</h3>
            <img src="" alt="foto del lugar" />
            <p>precio por dia</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre de guarderia</h3>
            <img src="" alt="foto del lugar" />
            <p>precio por dia</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre de guarderia</h3>
            <img src="" alt="foto del lugar" />
            <p>precio por dia</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre de guarderia</h3>
            <img src="" alt="foto del lugar" />
            <p>precio por dia</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre de guarderia</h3>
            <img src="" alt="foto del lugar" />
            <p>precio por dia</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre de guarderia</h3>
            <img src="" alt="foto del lugar" />
            <p>precio por dia</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre de guarderia</h3>
            <img src="" alt="foto del lugar" />
            <p>precio por dia</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre de guarderia</h3>
            <img src="" alt="foto del lugar" />
            <p>precio por dia</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre de guarderia</h3>
            <img src="" alt="foto del lugar" />
            <p>precio por dia</p>
            <button>agregar al carrito</button>
          </div>
        </div> */}
        {/* card container dogwalkers */}
        {/* <div className="flex h-full w-1/2 flex-wrap justify-center gap-4 border-2 border-black p-4">
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre del paseador</h3>
            <img src="" alt="foto del paseador" />
            <p>precio por hora</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre del paseador</h3>
            <img src="" alt="foto del paseador" />
            <p>precio por hora</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre del paseador</h3>
            <img src="" alt="foto del paseador" />
            <p>precio por hora</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre del paseador</h3>
            <img src="" alt="foto del paseador" />
            <p>precio por hora</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre del paseador</h3>
            <img src="" alt="foto del paseador" />
            <p>precio por hora</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre del paseador</h3>
            <img src="" alt="foto del paseador" />
            <p>precio por hora</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre del paseador</h3>
            <img src="" alt="foto del paseador" />
            <p>precio por hora</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre del paseador</h3>
            <img src="" alt="foto del paseador" />
            <p>precio por hora</p>
            <button>agregar al carrito</button>
          </div>
          <div className="aspect-square h-64 border-2 border-black">
            <h3>nombre del paseador</h3>
            <img src="" alt="foto del paseador" />
            <p>precio por hora</p>
            <button>agregar al carrito</button>
          </div>
        </div> */}
        {/* </div> */}
      </div>
    );
  }
}
export default Services;
