import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import interrogation from "../../../assets/general/interrogation.svg";
import edit from "../../../assets/general/edit.svg";

import React, { useEffect, useState } from "react";
import axios from "axios";
import LinkButton from "../../../components/Button/LinkButton";
import PhotoName from "./components/PhotoName";
import PersonalInfo from "./components/PersonalInfo";
import Contacts from "./components/Contacts";
import Ubication from "./components/Ubication";
import Payment from "./components/Payment";
import {
  getStoreByUser,
  getUserApi,
  getWalkerByUser,
  getDaycareByUser,
} from "../../../redux/features/users/usersActions";
import Purchase from "./components/Purchase";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showInfo, setShowInfo] = useState("profile");
  const user = useSelector((state) => state.User?.userId);
  const handleShowInfo = (e) => {
    setShowInfo(e.target.name);
  };
  console.log(user);
  const handleClickStore = () => {
    axios.post(`store/create/${user.id}`).then((res) => {
      const idStore = res.data.id;
      navigate(`/store/modify/${idStore}`);
    });
  };
  const handleClickWalker = () => {
    axios.post(`walker/create/${user.id}`).then((res) => {
      const idWalker = res.data.id;
      navigate(`/walker/modify/${idWalker}`);
    });
  };
  const handleClickDaycare = () => {
    axios.post(`daycare/create/${user.id}`).then((res) => {
      const idDaycare = res.data.id;
      navigate(`/daycare/modify/${idDaycare}`);
    });
  };
  useEffect(() => {
    dispatch(getUserApi(user.id));
  }, []);
  console.log(user);
  return (
    <div className="flex justify-start bg-adopcion  pb-28 pt-10 lg:items-center">
      <div className=" flex h-full w-full flex-col-reverse justify-end rounded-2xl">
        <div className="">
          <div className=" flex h-full w-full flex-col rounded-md  px-6  md:flex-row lg:w-full">
            <div className="mb-3  h-full rounded-2xl border-4 border-cornflowerblue  p-3 xl:w-96 ">
              <PhotoName img={user?.img} name={user?.name} />
              <div className="">
                <div className="mb-4 mt-4   dark:border-gray-700">
                  <ul className="-mb-px text-center text-sm font-medium">
                    <li className="mr-2 rounded-lg border-b-2 bg-slate-50 hover:bg-slate-100 hover:text-gray-500">
                      <button
                        onClick={handleShowInfo}
                        name="profile"
                        className="inline-block p-4"
                        title="aqui puedes ver quien es el propietario de la cuenta"
                      >
                        Perfil
                      </button>
                    </li>
                    <li className="mr-2 rounded-lg border-b-2 bg-slate-50  hover:bg-slate-100 hover:text-gray-500">
                      <button
                        onClick={handleShowInfo}
                        name="contact"
                        className="inline-block border-b-2 border-transparent p-4 "
                        title="aqui puedes ver tu informacion de contacto"
                      >
                        Contacto
                      </button>
                    </li>
                    <li className="mr-2 rounded-lg border-b-2 bg-slate-50  hover:bg-slate-100 hover:text-gray-500">
                      <button
                        onClick={handleShowInfo}
                        name="ubication"
                        className="inline-block p-4"
                        title="aqui puedes ver tus domicilios"
                      >
                        Direcciones
                      </button>
                    </li>
                    <li className="mr-2 rounded-lg border-b-2 bg-slate-50  hover:bg-slate-100 hover:text-gray-500">
                      <button
                        onClick={handleShowInfo}
                        name="purchase"
                        className="inline-block p-4"
                        title="aqui puedes ver tu historial de compras"
                      >
                        Compras
                      </button>
                    </li>
                    {user.admin && (
                      <li className="mr-2 rounded-lg border-b-2 bg-slate-50 py-3  hover:bg-slate-100 hover:text-gray-500">
                        <Link to={`/dashboardadmin`}>
                          <button title="panel de admin">Panel de admin</button>
                        </Link>
                      </li>
                    )}
                    {user.store && (
                      <li className="mr-2 rounded-lg border-b-2 bg-slate-50 py-3  hover:bg-slate-100 hover:text-gray-500">
                        <Link to={`/profile/store/${user.storeId}`}>
                          <button title="ingresa a tu tienda">Tienda</button>
                        </Link>
                      </li>
                    )}
                    {user.walker && (
                      <li className="mr-2 rounded-lg border-b-2 bg-slate-50 py-3  hover:bg-slate-100 hover:text-gray-500">
                        <Link to={`/profile/walker/${user.walkerId}`}>
                          <button title="ingresa a tu perfil de paseador">
                            Paseador
                          </button>
                        </Link>
                      </li>
                    )}
                    {user.daycare && (
                      <li className="mr-2 rounded-lg border-b-2 bg-slate-50 py-3  hover:bg-slate-100 hover:text-gray-500">
                        <Link to={`/profile/daycare/${user.daycareId}`}>
                          <button title="ingresa a tu guarderia">
                            Guarderia
                          </button>
                        </Link>
                      </li>
                    )}

                    <li className="mr-2 rounded-lg border-b-2 bg-slate-50  hover:bg-slate-100 hover:text-gray-500">
                      {/* Reveer esto de volver al hacer Health/Services */}
                      <Link to={`/shop`}>
                        <button className="inline-block p-4">Volver</button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" ml-28  flex flex-col flex-wrap rounded-2xl border-4 border-cornflowerblue  lg:w-1/2">
              {showInfo == "profile" ? (
                <div className="border-cornflowerblue p-3 lg:border-b-2">
                  <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                    Perfil
                  </h1>
                </div>
              ) : showInfo == "contact" ? (
                <div className=" border-cornflowerblue p-3 lg:border-b-2">
                  <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                    Contacto
                  </h1>
                </div>
              ) : showInfo == "location" ? (
                <div className="border-cornflowerblue p-3 lg:border-b-2">
                  <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                    Direcciones
                  </h1>
                </div>
              ) : showInfo == "purchase" ? (
                <div className="border-cornflowerblue p-3 lg:border-b-2">
                  <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                    Historial De compras
                  </h1>
                </div>
              ) : (
                <div className="border-gray-400 p-3 lg:border-b-2">
                  <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                    Metodos de Pago
                  </h1>
                </div>
              )}
              <div className="flex w-full flex-col  pt-2 lg:flex xl:flex">
                {showInfo == "profile" ? (
                  <PersonalInfo
                    name={user?.name}
                    user={user?.user}
                    lastname={user?.lastname}
                  />
                ) : showInfo == "contact" ? (
                  <Contacts
                    area_code={user?.area_code}
                    number={user?.number}
                    emergency_number={user?.emergency_number}
                    area_code_emergency={user?.area_code_emergency}
                    mail={user?.mail}
                  />
                ) : showInfo == "ubication" ? (
                  <Ubication
                    province={user?.province}
                    locality={user?.locality}
                    zip_code={user.zip_code}
                    street_name={user.street_name}
                    street_number={user.street_number}
                  />
                ) : showInfo == "purchase" ? (
                  <Purchase />
                ) : (
                  <Payment />
                )}
                <div class="flex pl-4 pt-5 sm:pl-12">
                  {user.store === false && (
                    <div class="flex py-2">
                      <img src={interrogation} alt="help" class="w-3 sm:w-5" />
                      <LinkButton
                        onClick={handleClickStore}
                        component={"Habilita tu tienda"}
                        title="Habilita tu tienda antes de poder cargar productos para su venta"
                      />
                    </div>
                  )}
                  {user.daycare === false && (
                    <div class="flex py-2">
                      <img src={interrogation} alt="help" class="w-3 sm:w-5" />
                      <LinkButton
                        onClick={handleClickDaycare}
                        component={"Habilita tu guarderia"}
                      />
                    </div>
                  )}
                  {user.walker === false && (
                    <div class="flex py-2">
                      <img src={interrogation} alt="help" class="w-3 sm:w-5" />
                      <LinkButton
                        onClick={handleClickWalker}
                        component={"Habilitate como paseador"}
                      />
                    </div>
                  )}
                  <div class="flex py-2">
                    <img src={interrogation} alt="help" class="w-5" />
                    <button
                      title="ingresa aqui para editar tu informacion personal"
                      class="mx-3 w-11 rounded-lg border-2 border-black bg-slate-100 px-2 py-1 hover:bg-slate-300"
                    >
                      <Link to={`/profile/edit/${user.id}`}>
                        <img src={edit} alt="edit" />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
