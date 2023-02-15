import React from "react";
import alimento from "../../../assets/alimento.png";
import MoarButton from "../../../components/Button/MoarButton";
import CountProduct from "../../../components/CountProduct/CountProduct";
import cardCredit from "../../../assets/cardCredit/cardCredit.svg";
import transport from "../../../assets/transport/transport.svg";
function ProductDetail() {
  return (
    <div className="flex min-h-screen w-screen flex-col items-center justify-center pt-20 ">
      <div className="max-h-[80vh] max-w-[60vw] ">
        <div className="flex ">
          <picture className="block w-6/12 items-center  justify-center">
            <img src={alimento} alt="" className="w-[460px] " />
          </picture>
          <div className="inline-block w-6/12 ">
            <div>
              <h1 className="text-3xl font-bold ">Nombre del Alimento</h1>
              <a href="">brand</a>
              <span className="text-xs">-codigo del producto</span>

              <div class="flex items-center">
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>First star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Second star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Third star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fourth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg
                  aria-hidden="true"
                  class="h-5 w-5 text-gray-300 dark:text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Fifth star</title>
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <h3>Precio</h3>
              <button className="flex items-center text-[12px] font-bold uppercase text-pink-700">
                <img src={cardCredit} alt="" /> Ver medios de pagos
              </button>
              <button className="flex  items-center text-[12px] font-bold uppercase text-pink-700">
                <img src={transport} alt="" />
                Producto con envio gratis
              </button>
            </div>
            <div>
              <span> Precio por kilo</span>
              <h3>Seleccione Tamaño:</h3>
              <div className="w-1/6">
                <MoarButton component={"15kg"} />
              </div>
            </div>
            <div>
              <span> Seleccione Cantidad:</span>
              <div className="w-1/2">
                <CountProduct />
              </div>
              <button className="my-2 w-1/2 rounded-lg bg-emerald-400 py-2 px-4">
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
                Envío gratis +$7500 en CABA y zonas de GBA. No aplica para
                Envíos al Interior
              </div>

              <div>
                Envío Flash
                <span></span>
              </div>
              <div className="text-xs">
                Envíos a todo CABA y zonas seleccionadas de AMBA. Envíos a todo
                CABA y zonas seleccionadas de AMBA. Envíos a todo CABA y zonas
                seleccionadas de AMBA.
              </div>

              {/* <div>Stock</div>
          <div>Especie</div>
        <div>Raza</div> */}
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
          </div>
        </div>
      </div>

      <div>
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul
            class="-mb-px flex flex-wrap text-center text-sm font-medium"
            id="myTab"
            data-tabs-toggle="#myTabContent"
            role="tablist"
          >
            <li class="mr-2" role="presentation">
              <button
                class="inline-block rounded-t-lg border-b-2 p-4"
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Descripcion
              </button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block rounded-t-lg border-b-2 border-transparent p-4 hover:border-gray-300 hover:text-gray-600 dark:hover:text-gray-300"
                id="dashboard-tab"
                data-tabs-target="#dashboard"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected="false"
              >
                Opiniones
              </button>
            </li>
          </ul>
        </div>
        <div id="myTabContent">
          <div
            class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Profile tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
            id="dashboard"
            role="tabpanel"
            aria-labelledby="dashboard-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Dashboard tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
            id="settings"
            role="tabpanel"
            aria-labelledby="settings-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Settings tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
          <div
            class="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
            id="contacts"
            role="tabpanel"
            aria-labelledby="contacts-tab"
          >
            <p class="text-sm text-gray-500 dark:text-gray-400">
              This is some placeholder content the{" "}
              <strong class="font-medium text-gray-800 dark:text-white">
                Contacts tab's associated content
              </strong>
              . Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </p>
          </div>
        </div>
      </div>
    </div>
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
