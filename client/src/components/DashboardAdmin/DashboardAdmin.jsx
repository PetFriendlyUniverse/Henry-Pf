import { useState } from "react";

import Graphs from "./components/Graphs";
import BarGraphs from "./components/BarGraphs";
import DonutGraphs from "./components/DonutGraphs";
import LineGraphs from "./components/LineGraphs";

function DashboardAdmin() {
  const [show, setShow] = useState("");
  const handleShow = (e) => {
    setShow(e.target.name);
  };
  return (
    <div className="">
      <div>
        <h1>Panel de Administrador de PetShopUniverse</h1>
      </div>
      <div className="flex">
        <div>
          <ul className="-mb-px text-center text-sm font-medium">
            <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
              <button
                onClick={handleShow}
                name="accounts"
                className="inline-block p-4"
              >
                Cuentas
              </button>
            </li>
            <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
              <button
                onClick={handleShow}
                name="sales"
                className="inline-block border-b-2 border-transparent p-4 "
              >
                Ventas
              </button>
            </li>
            <li className="mr-2 rounded-lg border-b-2 hover:bg-slate-100 hover:text-gray-500">
              <button
                onClick={handleShow}
                name="traffic"
                className="inline-block p-4"
              >
                Trafico
              </button>
            </li>
          </ul>
        </div>
        <div>
          {show === "accounts" ? (
            <BarGraphs />
          ) : show === "sales" ? (
            <DonutGraphs />
          ) : show === "traffic" ? (
            <LineGraphs />
          ) : (
            <Graphs />
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
