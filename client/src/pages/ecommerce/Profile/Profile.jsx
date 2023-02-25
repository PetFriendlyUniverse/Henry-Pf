import { useState } from "react";
import { Link } from "react-router-dom";
import LinkButton from "../../../components/Button/LinkButton";
import { useSelector } from "react-redux";
import { Tabs } from "flowbite-react";

import PhotoName from "./components/PhotoName";
import PersonalInfo from "./components/PersonalInfo";
import Contacts from "./components/Contacts";
import Ubication from "./components/Ubication";
import Payment from "./components/Payment";
import SearchForm from "../../../components/NavBar/components/SearchForm";

import interrogation from "../../../assets/general/interrogation.svg";
import CardStoreIdContainer from "../../../components/CardStoreIdContainer/CardStoreIdContainer";

function Profile() {
  const [showInfo, setShowInfo] = useState("profile");
  const user = useSelector((state) => state.User?.userId);
  const handleShowInfo = (e) => {
    setShowInfo(e.target.name);
  };
  return (
    <div className="flex justify-center  pb-28 pt-10 lg:items-center">
      <div className=" flex h-full w-3/4 flex-col-reverse justify-end border-2 border-gray-200">
        <Tabs.Group
          aria-label="Tabs with underline"
          style="underline"
          className=""
        >
          <Tabs.Item title="Perfil" className="">
            <div>
              <div className=" flex h-full w-full flex-col rounded-md border-2 md:flex-row lg:w-full">
                <div className="mb-3  p-3 xl:w-96 ">
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
                    <div className="flex justify-center  gap-4 border-gray-400 p-3 lg:border-b-2">
                      <h1 className="flex items-center justify-center pl-2 text-3xl font-semibold">
                        Direcciones
                      </h1>
                      <div className="rounded-2xl border-2"></div>
                    </div>
                  )}
                  <div className="flex w-full flex-col justify-center  pt-2 lg:flex-row">
                    {showInfo == "profile" ? (
                      <PersonalInfo name={user?.name} user={user?.user} />
                    ) : showInfo == "contact" ? (
                      <Contacts
                        phone={user?.phone}
                        emergencyphone={user?.emergencyphone}
                        mail={user?.mail}
                      />
                    ) : showInfo == "ubication" ? (
                      <Ubication
                        province={user?.province}
                        locality={user?.locality}
                        zip_code={user?.zip_code}
                        street_name={user?.street_name}
                        street_number={user?.street_number}
                      />
                    ) : showInfo == "products" ? (
                      <div className="h-46 overflow-scroll">
                        <CardStoreIdContainer />
                      </div>
                    ) : (
                      <Payment />
                    )}

                    <div class="flex pl-4 pt-5 sm:pl-12">
                      <div class="flex py-2">
                        <img
                          src={interrogation}
                          alt="help"
                          class="w-3 sm:w-5"
                        />
                        <Link to="/profile/store/create">
                          <LinkButton component={"Crear producto"} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </Tabs.Item>

          <Tabs.Item title="Tienda">
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
                      <Ubication
                        province={user?.province}
                        locality={user?.locality}
                      />
                    ) : showInfo == "products" ? (
                      <div className="flex w-full justify-center ">
                        {" "}
                        <CardStoreIdContainer />
                      </div>
                    ) : (
                      <Payment />
                    )}

                    <div class="flex pl-4 pt-5 sm:pl-12">
                      <div class="flex py-2">
                        <img
                          src={interrogation}
                          alt="help"
                          class="w-3 sm:w-5"
                        />
                        <Link to="/profile/store/create">
                          <LinkButton component={"Crear producto"} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
    </div>
  );
}

export default Profile;
