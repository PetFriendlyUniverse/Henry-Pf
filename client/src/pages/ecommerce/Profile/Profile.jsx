import { useState } from "react";
import LinkButton from "../../../components/Button/LinkButton";

import photoUser from "../../../assets/borrador/profile.jpg";
import keyUser from "../../../assets/user/key.svg";

function Profile() {
  const [showInfo, setShowInfo] = useState(false);
  const [showSecurity, setShowSecurity] = useState(false);
  const [showUbi, setShowUbi] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const handleShowInfo = () => {
    if (!showInfo) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };
  const handleShowSecurity = () => {
    if (!showSecurity) {
      setShowSecurity(true);
    } else {
      setShowSecurity(false);
    }
  };
  const handleShowUbi = () => {
    if (!showUbi) {
      setShowUbi(true);
    } else {
      setShowUbi(false);
    }
  };
  const handleShowPayment = () => {
    if (!showPayment) {
      setShowPayment(true);
    } else {
      setShowPayment(false);
    }
  };
  return (
    <div className="w-9/12">
      <div className="ml-12 mt-7 w-full rounded-xl bg-customProfile p-5 shadow-2xl lg:ml-80 lg:flex">
        <div className="mx-0 w-full lg:w-1/3">
          <img src={photoUser} alt="profile" className="rounded-xl" />
        </div>
        <div className="lg:pl-16">
          <div className="lg:w-80">
            <div className="py-3 pl-3">
              <div className="flex justify-between">
                <h3 className="">Mis datos</h3>
                <button onClick={handleShowInfo}>{">"}</button>
              </div>
              {showInfo ? (
                <div className="">
                  <div className="flex justify-between pb-1">
                    <p className="">Nombre: Maria Lucatelli</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                  <div className="flex justify-between pb-1">
                    <p className="">Mascotas: Manuelita</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="lg:w-80">
            <div className="py-3 pl-3">
              <div className="flex justify-between">
                <h3 className="">Seguridad</h3>
                <button onClick={handleShowSecurity}>{">"}</button>
              </div>
              {showSecurity ? (
                <div className="">
                  <div className="flex justify-between pb-1">
                    <p className="">Mail: marialucatelli@gmail.com</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                  <div className="flex justify-between pb-1">
                    <p className="">Contraseña: marialucatelli777</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                  <div className="flex justify-between pb-1">
                    <p className="">Telefono: +5991112794823</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="lg:pl-16">
          <div className="lg:w-80">
            <div className="py-3 pl-3">
              <div className="flex justify-between">
                <h3 className="">Ubicacion</h3>
                <button onClick={handleShowUbi}>{">"}</button>
              </div>
              {showUbi ? (
                <div className="">
                  <div className="flex justify-between pb-1">
                    <p className="">Departamento: CABA</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                  <div className="flex justify-between pb-1">
                    <p className="">Delivery: Calle falsa 123</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="lg:w-80">
            <div className="py-3 pl-3">
              <div className="flex justify-between">
                <h3 className="">Metodos de Pago</h3>
                <button onClick={handleShowPayment}>{">"}</button>
              </div>
              {showPayment ? (
                <div className="">
                  <div className="flex justify-between pb-1">
                    <p className="">Efectivo</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                  <div className="flex justify-between pb-1">
                    <p className="">
                      Tarjeta:{" "}
                      {
                        <select>
                          <option value="">MasterCard</option>
                          <option value="">Galicia</option>
                          <option value="">MercadoPago</option>
                        </select>
                      }
                    </p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="ml-12 mt-7 w-full rounded-xl p-5 lg:ml-80 lg:flex">
        <LinkButton component={"Registra una mascota"} />
        <LinkButton component={"Registrate como paseador"} />
        <LinkButton component={"Crea tu tienda"} />
      </div>
    </div>
  );
}

export default Profile;
