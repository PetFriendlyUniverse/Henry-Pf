function Services() {
  return (
    // contenedor completo
    <div className="flex h-full w-full flex-col  items-center justify-center   pt-24 align-middle ">
      {/* aca va una segunda navbar con filtros generales por ubicacion, raza, y servicios */}
      <div className="flex h-24">
        <select
          name="ubicacion"
          id="location"
          required="true"
          visible="5"
          className="h-8 self-center border-2 border-black"
        >
          <label for="location">Ubicación</label>
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
      </div>
      {/* subcontenedor que contiene las 2 card containers (de walkers y de daycare) */}
      <div className="flex h-full w-full justify-around gap-4  border-2 border-black">
        {/* card container daycare */}
        <div className="flex h-full w-1/2 flex-wrap justify-center gap-4  border-2 border-black p-4">
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
        </div>
        {/* card container dogwalkers */}
        <div className="flex h-full w-1/2 flex-wrap justify-center gap-4 border-2 border-black p-4">
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
        </div>
      </div>
    </div>
  );
}

export default Services;
