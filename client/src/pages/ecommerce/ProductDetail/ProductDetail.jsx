import React from "react";
import alimento from "../../../assets/alimento.png";

function ProductDetail() {
  return (
    <>
      <div className="flex w-screen flex-row">
        <picture className="block w-6/12 items-center  justify-center">
          <img src={alimento} alt="" className="w-[460px] " />
        </picture>
        <div className="inline-block w-6/12 ">
          <h2>Nombre del Alimento</h2>
          <div className="text-xs">brand-codigo del producto - estrellas</div>
          <div>
            <h3>Precio</h3>
            <button>Ver medios de pagos</button>
            <button>-Producto con envio gratis</button>
          </div>
          <div>Precio por kilo</div>
          <div>
            <h3>Seleccione Tamaño:</h3>
            <button>15kg</button>
          </div>
          <div>
            Seleccione Cantidad:
            <br />
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <div>
            <button className="border-2 border-black">
              Agregar al carrito
            </button>
          </div>

          <div className="text-sm">
            <div>
              Opciones de Envio
              <span></span>
            </div>
            <div> Envío a Domicilio </div>
            <div className="text-xs">
              Envío gratis +$7500 en CABA y zonas de GBA.
              <br />
              No aplica para Envíos al Interior
            </div>

            <div>
              Envío Flash
              <span></span>
            </div>
            <div className="text-xs">
              Envíos a todo CABA y zonas seleccionadas de AMBA.
              <br />
              Envíos a todo CABA y zonas seleccionadas de AMBA.
              <br />
              Envíos a todo CABA y zonas seleccionadas de AMBA.
            </div>
            <div>
              <div>
                <div>Retiro en Sucursal</div>
                <div>
                  <div className="text-xs">
                    Retirá sin cargo por tu sucursal preferida
                  </div>
                </div>
              </div>
            </div>

            {/* <div>Stock</div>
          <div>Especie</div>
          <div>Raza</div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="flex w-screen flex-row">Descripción: </div>
        <div className="flex w-screen flex-row">Opiniones </div>
        <div className="flex w-screen flex-row">Informacion Nutricional</div>
      </div>
    </>
  );
}

export default ProductDetail;
// name,
// price,
// description,
// stock,
// specie,
// breed,
//Desde aca para abajo dependera del producto que tipo de propiedad tendra, asi que no es necesario que todas estas propiedades este presente en un producto
// weight,
// color,
// size,
// storeId
