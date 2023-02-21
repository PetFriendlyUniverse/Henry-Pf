import { useState } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../../../components/Button/LinkButton";
import { useSelector } from "react-redux";

import PhotoName from "./components/PhotoName";
import PersonalInfo from "./components/PersonalInfo";
import Contacts from "./components/Contacts";
import Ubication from "./components/Ubication";
import Payment from "./components/Payment";

import edit from "../../../assets/general/edit.svg";
import interrogation from "../../../assets/general/interrogation.svg";

function Profile() {
  const [showInfo, setShowInfo] = useState("profile");
  const user = useSelector((state) => state.User.userId);
  console.log(user);
  const handleShowInfo = (e) => {
    setShowInfo(e.target.name);
  };
  return (
    <div className="flex justify-center pb-28 pt-36 lg:items-center">
      <div className="mt-6 flex h-full w-full flex-col rounded-md border-2 pt-2 md:flex-row lg:w-3/5">
        <div className="mb-3 p-3 xl:w-96 ">
          <PhotoName img={user.img} name={user.name} />
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
        <div className="border-gray-400 lg:w-full lg:border-l-2">
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
          ) : showInfo == "ubication" ? (
            <div className="border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                Direcciones
              </h1>
            </div>
          ) : (
            <div className="border-gray-400 p-3 lg:border-b-2">
              <h1 className="flex justify-center pl-2 text-3xl font-semibold">
                Metodos de Pago
              </h1>
            </div>
          )}
          <div className="flex flex-col pt-2 lg:flex xl:flex">
            {showInfo == "profile" ? (
              <PersonalInfo name={user.name} user={user.user} />
            ) : showInfo == "contact" ? (
              <Contacts
                phone={user.phone}
                emergencyphone={user.emergencyphone}
                mail={user.mail}
              />
            ) : showInfo == "ubication" ? (
              <Ubication province={user.province} locality={user.locality} />
            ) : (
              <Payment />
            )}
            <div class="flex pl-4 pt-5 sm:pl-12">
              <div class="flex py-2">
                <img src={interrogation} alt="help" class="w-3 sm:w-5" />
                <Link to="/profile/store/create">
                  <LinkButton component={"Crear producto"} />
                </Link>
              </div>
              {/* <div class="flex py-2">
                <img src={interrogation} alt="help" class="w-5" />
                <button class="mx-3 w-11 rounded-lg border-2 border-black bg-slate-100 px-2 py-1 hover:bg-slate-300">
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

export default Profile;
