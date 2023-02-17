import { useState } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../../../components/Button/LinkButton";

import PersonalInfo from "./components/PersonalInfo";
import Contacts from "./components/Contacts";
import Ubication from "./components/Ubication";
import Payment from "./components/Payment";

import photoUser from "../../../assets/borrador/profile.jpg";
import edit from "../../../assets/general/edit.svg";
import interrogation from "../../../assets/general/interrogation.svg";

function Profile() {
  const [showInfo, setShowInfo] = useState("profile");
  const handleShowInfo = (e) => {
    setShowInfo(e.target.name);
  };
  return (
    <div className="flex justify-center py-28 px-3 pt-20 md:max-w-fit ">
      <div className="flex h-full w-10/12 rounded-md border-2">
        <div className="mb-3 p-3 xl:w-96 ">
          <div className="flex lg:w-40 ">
            <div className="px-3 lg:max-w-3xl">
              <img src={photoUser} alt="profile" className="rounded-full" />
            </div>
            <div>
              <h1 className="text-2xl font-black">{`Nombre`}</h1>
            </div>
          </div>
          <div className="">
            <div className="mb-4 mt-4 border-gray-200 dark:border-gray-700">
              <ul
                className="-mb-px text-center text-sm font-medium"
                id="myTab"
                data-tabs-toggle="#myTabContent"
                role="tablist"
              >
                <li
                  className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500"
                  role="presentation"
                >
                  <button
                    onClick={handleShowInfo}
                    name="profile"
                    className="inline-block p-4"
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Perfil
                  </button>
                </li>
                <li
                  className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500"
                  role="presentation"
                >
                  <button
                    onClick={handleShowInfo}
                    name="contact"
                    className="inline-block border-b-2 border-transparent p-4 "
                    id="contacts-tab"
                    data-tabs-target="#contacts"
                    type="button"
                    role="tab"
                    aria-controls="contacts"
                    aria-selected="false"
                  >
                    Contacto
                  </button>
                </li>
                <li
                  className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500"
                  role="presentation"
                >
                  <button
                    onClick={handleShowInfo}
                    name="ubication"
                    className="inline-block p-4"
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Direcciones
                  </button>
                </li>
                <li
                  className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500"
                  role="presentation"
                >
                  <button
                    onClick={handleShowInfo}
                    name="payment"
                    className="inline-block p-4"
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Formas de Pago
                  </button>
                </li>
                <li
                  className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500"
                  role="presentation"
                >
                  {/* Reveer esto de volver al hacer Health/Services */}
                  <Link to="/shop">
                    <button
                      className="inline-block p-4 "
                      id="profile-tab"
                      data-tabs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Volver
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div id="myTabContent">
              <div
                className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong className="font-medium text-gray-800 dark:text-white">
                    Profile tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classNamees to control
                  the content visibility and styling.
                </p>
              </div>
              <div
                className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                id="dashboard"
                role="tabpanel"
                aria-labelledby="dashboard-tab"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong className="font-medium text-gray-800 dark:text-white">
                    Dashboard tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classNamees to control
                  the content visibility and styling.
                </p>
              </div>
              <div
                className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                id="settings"
                role="tabpanel"
                aria-labelledby="settings-tab"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong className="font-medium text-gray-800 dark:text-white">
                    Settings tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classNamees to control
                  the content visibility and styling.
                </p>
              </div>
              <div
                className="hidden rounded-lg bg-gray-50 p-4 dark:bg-gray-800"
                id="contacts"
                role="tabpanel"
                aria-labelledby="contacts-tab"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  This is some placeholder content the{" "}
                  <strong className="font-medium text-gray-800 dark:text-white">
                    Contacts tab's associated content
                  </strong>
                  . Clicking another tab will toggle the visibility of this one
                  for the next. The tab JavaScript swaps classNamees to control
                  the content visibility and styling.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-l-2 border-gray-400 lg:w-[1200px]">
          {showInfo == "profile" ? (
            <div className="border-b-2 border-gray-400 p-3">
              <h1 className="pl-2 text-3xl font-semibold">Perfil</h1>
            </div>
          ) : showInfo == "contact" ? (
            <div className="border-b-2 border-gray-400 p-3">
              <h1 className="pl-2 text-3xl font-semibold">Contacto</h1>
            </div>
          ) : showInfo == "ubication" ? (
            <div className="border-b-2 border-gray-400 p-3">
              <h1 className="pl-2 text-3xl font-semibold">Direcciones</h1>
            </div>
          ) : (
            <div className="border-b-2 border-gray-400 p-3">
              <h1 className="pl-2 text-3xl font-semibold">Formas de Pago</h1>
            </div>
          )}
          <div className="flex">
            {showInfo == "profile" ? (
              <PersonalInfo />
            ) : showInfo == "contact" ? (
              <Contacts />
            ) : showInfo == "ubication" ? (
              <Ubication />
            ) : (
              <Payment />
            )}
            <div className="pl-12 pt-5">
              <div className="flex py-2">
                <img src={interrogation} alt="help" className="w-5" />
                <Link to="/profile/store/create">
                  <LinkButton component={"Crea tu producto"} />
                </Link>
              </div>
              <div className="flex py-2">
                <img src={interrogation} alt="help" className="w-5" />
                <button className="mx-3 w-11 rounded-lg border-2 border-black bg-slate-100 px-2 py-1 hover:bg-slate-300">
                  <img src={edit} alt="edit" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
