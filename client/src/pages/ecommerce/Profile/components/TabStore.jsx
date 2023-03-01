import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LinkButton from "../../../../components/Button/LinkButton";
import { useDispatch, useSelector } from "react-redux";
import CardStoreIdContainer from "../../../../components/CardStoreIdContainer/CardStoreIdContainer";
import Contruccion from "../../../Services/Services";

import PhotoStore from "./Store/PhotoStore";
import InfoStore from "./Store/InfoStore";
import ContactsStore from "./Store/ContactsStore";
import UbicationStore from "./Store/UbicationStore";
import SearchForm from "../../../../components/NavBar/components/SearchForm";

import interrogation from "../../../../assets/general/interrogation.svg";

import React from "react";
import { getStoreByUser } from "../../../../redux/features/users/usersActions";
import Ubication from "./Ubication";

function TabStore() {
  const id = localStorage.getItem("id");
  const dispatch = useDispatch();
  const [showInfo, setShowInfo] = useState("profile");
  const user = useSelector((state) => state.User?.userStoreId);
  const handleShowInfo = (e) => {
    setShowInfo(e.target.name);
  };
  useEffect(() => {
    dispatch(getStoreByUser(id));
  }, []);

  return (
    <div className="flex justify-start bg-adopcion pb-28 pt-10 lg:items-center">
      <div className=" jborder-2 flex h-full w-full flex-row ">
        <div className="mb-3p-3 xl:w-96 ">
          <div className="mb-3  h-full rounded-2xl border-4 border-cornflowerblue  p-3 xl:w-96 ">
            <PhotoStore img={user?.img} name={user?.name} />
            <div className="mb-4 mt-4 border-gray-200  dark:border-gray-200">
              <ul className="-mb-px text-center text-sm font-medium">
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="profile"
                    className="inline-block p-4"
                    title="informacion del propietario"
                  >
                    Perfil de Tienda
                  </button>
                </li>
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="contact"
                    className="inline-block border-b-2 border-transparent p-4 "
                    title="aquie puede ver la informacion de contacto de la tienda"
                  >
                    Contacto
                  </button>
                </li>
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="location"
                    className="inline-block p-4"
                    title="aqui puedes ver la direccion de la tienda"
                  >
                    Direcciones
                  </button>
                </li>
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="products"
                    className="inline-block p-4"
                    title="aqui puedes ver tus productos disponibles"
                  >
                    Productos
                  </button>
                </li>
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  {/* Reveer esto de volver al hacer Health/Services */}
                  <Link to={`/profile/${user.id}`}>
                    <button
                      title="vuelve a tu perfil"
                      className="inline-block p-4"
                    >
                      Volver
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* este es el div que contiene el renderizado condicional del titulo */}
        <div className=" ml-28  flex w-full flex-col flex-wrap rounded-2xl border-4  border-cornflowerblue">
          {showInfo == "profile" ? (
            <div className="border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                Perfil de la Tienda
              </h1>
            </div>
          ) : showInfo == "contact" ? (
            <div className="border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                Contacto
              </h1>
            </div>
          ) : showInfo == "location" ? (
            <div className="border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                Direcciones
              </h1>
            </div>
          ) : showInfo == "storeProfile" ? (
            <div className="border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                Perfil de la Tienda
              </h1>
            </div>
          ) : (
            <div className="flex justify-between gap-4 border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex items-center justify-center pl-2 text-3xl font-semibold">
                Productos Disponibles
              </h1>
              <div className="rounded-2xl border-2">
                <SearchForm />
              </div>
            </div>
          )}
          <div className="flex flex-col pt-2 lg:flex xl:flex">
            {showInfo == "profile" ? (
              <InfoStore name={user?.name} />
            ) : showInfo == "contact" ? (
              <ContactsStore
                area_code={user?.area_code}
                number={user?.number}
                mail={user?.mail}
              />
            ) : showInfo == "location" ? (
              <Ubication
                province={user?.province}
                locality={user?.locality}
                zip_code={user.zip_code}
                street_name={user.street_name}
                street_number={user.street_number}
              />
            ) : showInfo == "products" ? (
              <div className="w-full ">
                {" "}
                <CardStoreIdContainer id={user?.id} />
              </div>
            ) : (
              <Contruccion />
            )}

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
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default TabStore;
