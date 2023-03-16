import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LinkButton from "../../../../components/Button/LinkButton";
import { useDispatch, useSelector } from "react-redux";
import CardStoreIdContainer from "../../../../components/CardStoreIdContainer/CardStoreIdContainer";
import Contruccion from "../../../../components/InConstruccion/Construccion";

import PhotoStore from "./Store/PhotoStore";
import InfoStore from "./Store/InfoStore";
import ContactsStore from "./Store/ContactsStore";
import SearchForm from "../../../../components/NavBar/components/SearchForm";

import interrogation from "../../../../assets/general/interrogation.svg";
import edit from "../../../../assets/general/edit.svg";

import React from "react";
import { getStoreByUser } from "../../../../redux/features/users/usersActions";
import Ubication from "./Ubication";

function TabStore() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [showInfo, setShowInfo] = useState("profile");
  const user = useSelector((state) => state.User?.userStoreId);
  const handleShowInfo = (e) => {
    setShowInfo(e.target.name);
  };

  const titles = {
    profile: "Perfil de la tienda",
    contact: "Contacto",
    products: "Mis compras",
    location: "Direcciones",
  };

  const components = {
    profile: <InfoStore name={user?.name} />,
    contact: (
      <ContactsStore
        area_code={user?.area_code}
        number={user?.number}
        mail={user?.mail}
      />
    ),
    location: (
      <Ubication
        province={user?.province}
        locality={user?.locality}
        zip_code={user.zip_code}
        street_name={user.street_name}
        street_number={user.street_number}
      />
    ),
    products: <CardStoreIdContainer id={user?.id} />,
  };

  useEffect(() => {
    dispatch(getStoreByUser());
  }, []);

  return (
    <div className="flex min-h-[80vh] justify-start  bg-adopcion pb-28 pt-10 lg:items-center lg:justify-center">
      <div className="flex h-full w-full flex-col items-center justify-end gap-3 rounded-2xl  px-6 lg:w-full  lg:flex-row lg:justify-start   lg:gap-10 2xl:px-16 ">
        <div className="h-full w-full max-w-xs rounded-2xl border-4 border-cornflowerblue  p-3 xl:w-96 ">
          <PhotoStore img={user?.img} name={user?.name} />
          <div className="mb-4 mt-4   dark:border-gray-700">
            <ul className="-mb-px text-center text-sm font-medium">
              <li
                className={`mr-2 rounded-lg border-b-2 bg-slate-50 hover:cursor-pointer hover:bg-ultravioletLight hover:text-black active:shadow-inner active:shadow-black ${
                  showInfo == "profile" &&
                  "  bg-ultraviolet text-slate-300 hover:text-black"
                } hover:text-gray-500`}
              >
                <button
                  onClick={handleShowInfo}
                  name="profile"
                  className={`inline-block  p-4 tracking-wider ${
                    showInfo == "profile" &&
                    "tracking-wider underline underline-offset-4"
                  }`}
                  title="informacion del propietario"
                >
                  Perfil de Tienda
                </button>
              </li>
              <li
                className={`mr-2 rounded-lg border-b-2 bg-slate-50 hover:cursor-pointer hover:bg-ultravioletLight hover:text-black active:shadow-inner active:shadow-black ${
                  showInfo == "contact" &&
                  "  bg-ultraviolet text-slate-300 hover:text-slate-300"
                } hover:text-gray-500`}
              >
                <button
                  onClick={handleShowInfo}
                  name="contact"
                  className={`inline-block  p-4 tracking-wider ${
                    showInfo == "contact" &&
                    "tracking-wider underline underline-offset-4"
                  }`}
                  title="aquie puede ver la informacion de contacto de la tienda"
                >
                  Contacto
                </button>
              </li>
              <li
                className={`mr-2 rounded-lg border-b-2 bg-slate-50 hover:cursor-pointer hover:bg-ultravioletLight hover:text-black active:shadow-inner active:shadow-black ${
                  showInfo == "location" &&
                  "  bg-ultraviolet text-slate-300 hover:text-slate-300"
                } hover:text-gray-500`}
              >
                <button
                  onClick={handleShowInfo}
                  name="location"
                  className={`inline-block  p-4 tracking-wider ${
                    showInfo == "location" &&
                    "tracking-wider underline underline-offset-4"
                  }`}
                  title="aqui puedes ver la direccion de la tienda"
                >
                  Direcciones
                </button>
              </li>
              <li
                className={`mr-2 rounded-lg border-b-2 bg-slate-50 hover:cursor-pointer hover:bg-ultravioletLight hover:text-black active:shadow-inner active:shadow-black ${
                  showInfo == "products" &&
                  "  bg-ultraviolet text-slate-300 hover:text-slate-300"
                } hover:text-gray-500`}
              >
                <button
                  onClick={handleShowInfo}
                  name="products"
                  className={`inline-block  p-4 tracking-wider ${
                    showInfo == "products" &&
                    "tracking-wider underline underline-offset-4"
                  }`}
                  title="aqui puedes ver tus productos disponibles"
                >
                  Productos
                </button>
              </li>
              <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                {/* Reveer esto de volver al hacer Health/Services */}
                <button
                  onClick={() => navigate(-1)}
                  title="vuelve a tu perfil"
                  className="inline-block p-4"
                >
                  Volver
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* este es el div que contiene el renderizado condicional del titulo */}
        <div className="flex h-full min-h-[450px] w-full flex-col flex-wrap  justify-between rounded-2xl border-4 border-cornflowerblue py-3   ">
          <div className="border-cornflowerblue p-3 lg:border-b-2">
            <h1 className="pl-2 text-center text-3xl font-semibold">
              {titles[showInfo]}
            </h1>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 py-2  ">
            {components[showInfo]}

            {/* boton crear producto */}

            {showInfo == "products" && (
              <div className="flex pl-4 pt-5 sm:pl-12">
                <div className="flex py-2">
                  <img
                    src={interrogation}
                    alt="help"
                    title="aqui puedes crear nuevos productos"
                    className="w-3 sm:w-5"
                  />
                  <Link to={`/profile/store/create/${user?.id}`}>
                    <LinkButton component={"Crear producto"} />
                  </Link>
                </div>
              </div>
            )}

            {/* boton editar perfil */}
            {showInfo == "profile" && (
              <div className="mr-5 flex  justify-center gap-2 self-end py-2">
                <img src={interrogation} alt="help" className="w-5" />
                <button
                  title="ingresa aqui para editar tu informacion personal"
                  className="active:traslate-y-1 w-14 rounded-lg border-2 border-black bg-slate-100 px-2 py-1 shadow-md shadow-black transition-all duration-200 hover:bg-slate-300"
                >
                  <Link to={`/store/modify/${user?.id}`}>
                    <img src={edit} alt="edit" />
                  </Link>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabStore;
