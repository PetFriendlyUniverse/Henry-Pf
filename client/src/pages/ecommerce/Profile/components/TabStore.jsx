import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LinkButton from "../../../../components/Button/LinkButton";
import { useDispatch, useSelector } from "react-redux";
import CardStoreIdContainer from "../../../../components/CardStoreIdContainer/CardStoreIdContainer";

import PhotoName from "./PhotoName";
import PersonalInfo from "./PersonalInfo";
import Contacts from "./Contacts";
import Ubication from "./Ubication";
import Payment from "./Payment";
import SearchForm from "../../../../components/NavBar/components/SearchForm";

import interrogation from "../../../../assets/general/interrogation.svg";

import React from "react";
import { getStoreByUser } from "../../../../redux/features/users/usersActions";

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
    <div>
      <div className=" flex h-full w-full flex-col rounded-md border-2 md:flex-row lg:w-full">
        <div className="mb-3 p-3 xl:w-96 ">
          <PhotoName img={user?.img} name={user?.name} />
          <div className="">
            <div className="mb-4 mt-4 border-gray-200  dark:border-gray-200">
              <ul className="-mb-px text-center text-sm font-medium">
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="storeProfile"
                    className="inline-block p-4"
                  >
                    Perfil de Tienda
                  </button>
                </li>
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="contact"
                    className="inline-block border-b-2 border-transparent p-4 "
                  >
                    Contacto
                  </button>
                </li>
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="location"
                    className="inline-block p-4"
                  >
                    Direcciones
                  </button>
                </li>
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="products"
                    className="inline-block p-4"
                  >
                    Productos
                  </button>
                </li>
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  {/* Reveer esto de volver al hacer Health/Services */}
                  <Link to="/shop">
                    <button className="inline-block p-4">Volver</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* este es el div que contiene el renderizado condicional del titulo */}
        <div className=" border-2 border-gray-200 lg:w-full lg:border-l-2">
          {showInfo == "profile" ? (
            <div className="border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                Perfil
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
          <div className="flex w-full flex-col  pt-2 lg:flex xl:flex">
            {showInfo == "profile" ? (
              <PersonalInfo name={user?.name} user={user?.user} />
            ) : showInfo == "contact" ? (
              <Contacts
                phone={user?.phone}
                emergencyphone={user?.emergencyphone}
                mail={user?.mail}
              />
            ) : showInfo == "location" ? (
              <Ubication province={user?.province} locality={user?.locality} />
            ) : showInfo == "products" ? (
              <div className="w-full ">
                {" "}
                <CardStoreIdContainer id={user?.id} />
              </div>
            ) : (
              <Payment />
            )}

            <div className="flex pl-4 pt-5 sm:pl-12">
              <div className="flex py-2">
                <img src={interrogation} alt="help" className="w-3 sm:w-5" />
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
