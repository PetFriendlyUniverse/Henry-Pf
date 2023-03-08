import { useState } from "react";

import CardsAccounts from "./components/CardsAccounts";
import ListAccounts from "./components/ListAccounts";
import Graphs from "./components/Graphs";
import BarGraphs from "./components/BarGraphs";
import DonutGraphs from "./components/DonutGraphs";
import LineGraphsSales from "./components/LineGraphsSales";
import LineGraphsTraffic from "./components/LineGraphsTraffic";
import Tickets from "./components/Tickets";
import UrlPostInput from "./components/UrlPostInput";

function DashboardAdmin() {
  const [show, setShow] = useState("accounts");
  const handleShow = (e) => {
    setShow(e.target.name);
  };
  return (
    <div className="flex w-full justify-center text-center">
      <div className="w-full py-32 text-white lg:w-4/5">
        <div className="flex justify-between rounded-t-lg border-b-2 border-white bg-russianviolet">
          <div className="flex justify-between px-6">
            <div className="mt-2 flex">
              <ul className="flex text-center text-sm font-medium md:ml-10">
                <li
                  className={
                    show === "accounts"
                      ? "mr-2 h-12 rounded-tr-lg rounded-tl-lg bg-cornflowerblue text-neutral-900 hover:bg-cornflowerblue hover:text-neutral-900 lg:w-32"
                      : "mr-2 h-12 rounded-tr-lg rounded-tl-lg hover:bg-cornflowerblue hover:text-neutral-900 lg:w-32"
                  }
                >
                  <button
                    onClick={handleShow}
                    name="accounts"
                    className="inline-block p-4"
                  >
                    Cuentas
                  </button>
                </li>
                <li
                  className={
                    show === "posts"
                      ? "mr-2 h-12 rounded-tr-lg rounded-tl-lg bg-cornflowerblue text-neutral-900 hover:bg-cornflowerblue hover:text-neutral-900 lg:w-32"
                      : "mr-2 h-12 rounded-tr-lg rounded-tl-lg hover:bg-cornflowerblue hover:text-neutral-900 lg:w-32"
                  }
                >
                  <button
                    onClick={handleShow}
                    name="posts"
                    className="inline-block p-4"
                  >
                    Posts
                  </button>
                </li>
                {/*  <li
                  className={
                    show === "sales"
                      ? "mr-2 h-12 rounded-tr-lg rounded-tl-lg border-b-2 bg-cornflowerblue text-neutral-900 hover:bg-cornflowerblue hover:text-neutral-900 lg:w-32"
                      : "mr-2 h-12 rounded-tr-lg rounded-tl-lg border-b-2 hover:bg-cornflowerblue hover:text-neutral-900 lg:w-32"
                  }
                >
                  <button
                    onClick={handleShow}
                    name="sales"
                    className="inline-block border-b-2 border-transparent p-4 "
                  >
                    Ventas
                  </button>
                </li>
                <li
                  className={
                    show === "traffic"
                      ? "mr-2 h-12 rounded-tr-lg rounded-tl-lg border-b-2 bg-cornflowerblue text-neutral-900 hover:bg-cornflowerblue hover:text-neutral-900 lg:w-32"
                      : "mr-2 h-12 rounded-tr-lg rounded-tl-lg border-b-2 hover:bg-cornflowerblue hover:text-neutral-900 lg:w-32"
                  }
                >
                  <button
                    onClick={handleShow}
                    name="traffic"
                    className="inline-block p-4"
                  >
                    Trafico
                  </button>
                </li>
                <li
                  className={
                    show === "requests"
                      ? "mr-2 h-12 rounded-tr-lg rounded-tl-lg border-b-2 bg-cornflowerblue text-neutral-900 hover:bg-cornflowerblue hover:text-neutral-900 lg:w-32"
                      : "mr-2 h-12 rounded-tr-lg rounded-tl-lg border-b-2 hover:bg-cornflowerblue hover:text-neutral-900 lg:w-32"
                  }
                >
                  <button
                    onClick={handleShow}
                    name="requests"
                    className="inline-block p-4"
                  >
                    Soporte
                  </button>
                </li> */}
              </ul>
            </div>
          </div>
          <h1 className="flex items-center pr-10 text-center align-middle font-bold md:text-3xl">
            Panel de Administrador
          </h1>
        </div>
        <div className="bg-colorFilter">
          <div className="w-full">
            {show === "accounts" ? (
              <div className="px-10">
                <div className="flex justify-center py-10 px-3">
                  <CardsAccounts />
                </div>
                <div className="py-10">
                  <BarGraphs />
                </div>
                <div className="flex justify-center py-10 px-3">
                  <ListAccounts />
                </div>
              </div>
            ) : (
              <UrlPostInput />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
