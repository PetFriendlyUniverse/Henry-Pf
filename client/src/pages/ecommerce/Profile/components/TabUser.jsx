import { Link, useNavigate } from "react-router-dom";
import LinkButton from "../../../../components/Button/LinkButton";
import { useSelector } from "react-redux";

import PhotoName from "./PhotoName";
import PersonalInfo from "./PersonalInfo";
import Contacts from "./Contacts";
import Ubication from "./Ubication";
import Payment from "./Payment";

import interrogation from "../../../../assets/general/interrogation.svg";

import React, { useState } from "react";
import axios from "axios";

function TabUser() {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState("profile");
  const user = useSelector((state) => state.User?.userId);
  const handleShowInfo = (e) => {
    setShowInfo(e.target.name);
  };
  const handleClick = () => {
    axios.post(`store/create/${user.id}`).then((res) => {
      const id = res.data.id;
      navigate(`/store/modify/${id}`);
    });
  };

  return (
    <div className="flex justify-start  pb-28 pt-10 lg:items-center">
      <div className=" flex h-full  w-3/4  flex-row justify-end border-2 border-gray-200 ">
        <div className="mb-3p-3 xl:w-96 ">
          <PhotoName img={user?.img} name={user?.name} />
          <div className="">
            <div className="mb-4 mt-4 border-gray-200 dark:border-gray-700">
              <ul className="-mb-px text-center text-sm font-medium">
                <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
                  <button
                    onClick={handleShowInfo}
                    name="profile"
                    className="inline-block p-4"
                  >
                    Perfil
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
                    name="ubication"
                    className="inline-block p-4"
                  >
                    Direcciones
                  </button>
                </li>
                {/* <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
        <button
          onClick={handleShowInfo}
          name="payment"
          className="inline-block p-4"
        >
          Formas de Pago
        </button>
      </li> */}
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
        <div className=" lg:w-full lg:border-l-2">
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
            <div className="border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                Métodos de Pago
              </h1>
            </div>
          )}
          <div className="flex flex-col pt-2 lg:flex xl:flex">
            {showInfo == "profile" ? (
              <PersonalInfo name={user?.name} user={user?.user} />
            ) : showInfo == "contact" ? (
              <Contacts
                phone={user?.phone}
                emergencyphone={user?.emergencyphone}
                mail={user?.mail}
              />
            ) : showInfo == "ubication" ? (
              <Ubication province={user?.province} locality={user?.locality} />
            ) : (
              <Payment />
            )}
            <div className="flex pl-4 pt-5 sm:pl-12">
              {user.store === false && (
                <div className="flex py-2">
                  <img src={interrogation} alt="help" className="w-3 sm:w-5" />
                  <LinkButton
                    onClick={handleClick}
                    component={"Habilita tu tienda"}
                  />
                </div>
              )}
              {/* <div className="flex py-2">
      <img src={interrogation} alt="help" className="w-5" />
      <button className="mx-3 w-11 rounded-lg border-2 border-black bg-slate-100 px-2 py-1 hover:bg-slate-300">
        <img src={edit} alt="edit" />
      </button>
    </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabUser;
