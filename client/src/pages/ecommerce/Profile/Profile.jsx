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
  const titles = {
    profile: "Perfil",
    contact: "Contacto",
    purchase: "Mis compras",
    location: "Direcciones",
  };

  const components = {
    profile: (
      <PersonalInfo
        name={user?.name}
        user={user?.user}
        lastname={user?.lastname}
      />
    ),
    contact: (
      <Contacts
        area_code={user?.area_code}
        number={user?.number}
        emergency_number={user?.emergency_number}
        area_code_emergency={user?.area_code_emergency}
        mail={user?.mail}
      />
    ),
    purchase: <Purchase />,
    location: (
      <Ubication
        province={user?.province}
        locality={user?.locality}
        zip_code={user.zip_code}
        street_name={user.street_name}
        street_number={user.street_number}
      />
    ),
  };
  useEffect(() => {
    dispatch(getStoreByUser(user?.id));
    dispatch(getUserApi(user.id));
  }, []);
  return (
    <div className="flex min-h-[80vh] justify-start  bg-adopcion pb-28 pt-10 lg:items-center lg:justify-center">
      <div className="flex h-full w-full flex-col items-center justify-end gap-3 rounded-2xl  px-6 lg:w-full  lg:flex-row lg:justify-start   lg:gap-10 2xl:px-16 ">
        {/* container profile */}
        <div className="h-full w-full max-w-xs rounded-2xl border-4 border-cornflowerblue  p-3 xl:w-96 ">
          <PhotoName img={user?.img} name={user?.name} />
          <div className="mb-4 mt-4   dark:border-gray-700">
            <ul className="-mb-px text-center text-sm font-medium">
              <li
                className={`mr-2 rounded-lg border-b-2 bg-slate-50 hover:cursor-pointer hover:bg-ultravioletLight hover:text-black active:shadow-inner active:shadow-black ${
                  showInfo == "profile" &&
                  "  bg-ultraviolet text-slate-300 hover:text-slate-300"
                } hover:text-gray-500`}
              >
                <button
                  onClick={handleShowInfo}
                  id="Perfil"
                  name="profile"
                  className={`inline-block  p-4 tracking-wider ${
                    showInfo == "profile" &&
                    "tracking-wider underline underline-offset-4"
                  }`}
                  title="aqui puedes ver quien es el propietario de la cuenta"
                >
                  Perfil
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
                  title="aqui puedes ver tu informacion de contacto"
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
                  title="aqui puedes ver tus domicilios"
                >
                  Direcciones
                </button>
              </li>
              <li
                className={`mr-2 rounded-lg border-b-2 bg-slate-50 hover:cursor-pointer hover:bg-ultravioletLight hover:text-black active:shadow-inner active:shadow-black ${
                  showInfo == "purchase" &&
                  "  bg-ultraviolet text-slate-300 hover:text-slate-300"
                } hover:text-gray-500`}
              >
                <button
                  onClick={handleShowInfo}
                  name="purchase"
                  className={`inline-block  p-4 tracking-wider ${
                    showInfo == "purchase" &&
                    "tracking-wider underline underline-offset-4"
                  }`}
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
                    <button title="ingresa a tu guarderia">Guarderia</button>
                  </Link>
                </li>
              )}

              <li
                className={`mr-2 rounded-lg border-b-2 bg-ultraviolet text-slate-300 hover:cursor-pointer hover:bg-ultravioletLight hover:text-black  active:shadow-inner active:shadow-black`}
              >
                {/* Reveer esto de volver al hacer Health/Services */}
                <Link to={`/shop`}>
                  <button className="inline-block p-4">Volver</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* container main */}
        <div className="flex h-full min-h-[450px] w-full flex-col  flex-wrap rounded-2xl border-4 border-cornflowerblue py-3   ">
          <div className="border-cornflowerblue p-3 lg:border-b-2">
            <h1 className="flex justify-center pl-2 text-3xl font-semibold">
              {titles[showInfo]}
            </h1>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-3 py-2  ">
            {components[showInfo]}

            <div className="flex flex-col items-center sm:flex-row sm:justify-around  md:w-11/12">
              {user.store === false && (
                <div className="flex  justify-center py-2">
                  <img src={interrogation} alt="help" className="w-3 sm:w-5" />
                  <LinkButton
                    onClick={handleClickStore}
                    component={"Crear tienda"}
                    title="Habilita tu tienda antes de poder cargar productos para su venta"
                  />
                </div>
              )}
              {user.daycare === false && (
                <div className="flex  justify-center py-2">
                  <img src={interrogation} alt="help" className="w-3 sm:w-5" />
                  <LinkButton
                    onClick={handleClickDaycare}
                    component={"Crear guarderia"}
                  />
                </div>
              )}
              {user.walker === false && (
                <div className="flex  justify-center py-2">
                  <img src={interrogation} alt="help" className="w-3 sm:w-5" />
                  <LinkButton
                    onClick={handleClickWalker}
                    component={"Crear paseador"}
                  />
                </div>
              )}
              <div className="flex justify-center  gap-2 py-2">
                <img src={interrogation} alt="help" className="w-5" />
                <button
                  title="ingresa aqui para editar tu informacion personal"
                  className="active:traslate-y-1 w-14 rounded-lg border-2 border-black bg-slate-100 px-2 py-1 shadow-md shadow-black transition-all duration-200 hover:bg-slate-300"
                >
                  <Link to={`/profile/edit/${user.id}`}>
                    <img src={edit} alt="edit" />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* container pets form */}
        <div className="h-full w-full max-w-xs rounded-2xl border-4 border-cornflowerblue  p-3 xl:w-96 ">
          <PhotoName img={user?.img} name={user?.name} />
          <div className="mb-4 mt-4   dark:border-gray-700">
            <ul className="-mb-px text-center text-sm font-medium">
              <li
                className={`mr-2 rounded-lg border-b-2 bg-slate-50 hover:cursor-pointer hover:bg-ultravioletLight hover:text-black active:shadow-inner active:shadow-black ${
                  showInfo == "profile" &&
                  "  bg-ultraviolet text-slate-300 hover:text-slate-300"
                } hover:text-gray-500`}
              >
                <button
                  onClick={handleShowInfo}
                  id="Perfil"
                  name="profile"
                  className={`inline-block  p-4 tracking-wider ${
                    showInfo == "profile" &&
                    "tracking-wider underline underline-offset-4"
                  }`}
                  title="aqui puedes ver quien es el propietario de la cuenta"
                >
                  Perfil
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
                  title="aqui puedes ver tu informacion de contacto"
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
                  title="aqui puedes ver tus domicilios"
                >
                  Direcciones
                </button>
              </li>
              <li
                className={`mr-2 rounded-lg border-b-2 bg-slate-50 hover:cursor-pointer hover:bg-ultravioletLight hover:text-black active:shadow-inner active:shadow-black ${
                  showInfo == "purchase" &&
                  "  bg-ultraviolet text-slate-300 hover:text-slate-300"
                } hover:text-gray-500`}
              >
                <button
                  onClick={handleShowInfo}
                  name="purchase"
                  className={`inline-block  p-4 tracking-wider ${
                    showInfo == "purchase" &&
                    "tracking-wider underline underline-offset-4"
                  }`}
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
                    <button title="ingresa a tu guarderia">Guarderia</button>
                  </Link>
                </li>
              )}

              <li
                className={`mr-2 rounded-lg border-b-2 bg-ultraviolet text-slate-300 hover:cursor-pointer hover:bg-ultravioletLight hover:text-black  active:shadow-inner active:shadow-black`}
              >
                {/* Reveer esto de volver al hacer Health/Services */}
                <Link to={`/shop`}>
                  <button className="inline-block p-4">Volver</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
