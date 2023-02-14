import { useState } from "react";
import photoUser from "../../../assets/borrador/profile.jpg";

import keyUser from "../../../assets/user/key.svg";
import profileUser from "../../../assets/user/profile.svg";
import secutiryUser from "../../../assets/user/security.svg";

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
    <div className="w-full">
      <div className="mx-0 w-3/4 p-5">
        <div className="flex">
          <div className="">
            <div className="w-64">
              <img src={photoUser} alt="profile" className="rounded-xl" />
            </div>
            <div className="py-3 pl-3">
              <div className="flex justify-between">
                <h3 className="">Mis datos</h3>
                <button onClick={handleShowInfo}>{">"}</button>
              </div>
              {showInfo ? (
                <div className="">
                  <div className="flex justify-between pb-1">
                    <p className="px-3">Nombre: Maria Lucatelli</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                  <div className="flex justify-between pb-1">
                    <p className="px-3">Mascotas: Manuelita</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="">
            <div className="py-3 pl-3">
              <div className="flex justify-between">
                <h3 className="">Seguridad</h3>
                <button onClick={handleShowSecurity}>{">"}</button>
              </div>
              {showSecurity ? (
                <div className="">
                  <div className="flex justify-between pb-1">
                    <p className="px-3">Mail: marialucatelli@gmail.com</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                  <div className="flex justify-between pb-1">
                    <p className="px-3">Contraseña: marialucatelli777</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="">
            <div className="py-3 pl-3">
              <div className="flex justify-between">
                <h3 className="">Ubicacion</h3>
                <button onClick={handleShowUbi}>{">"}</button>
              </div>
              {showUbi ? (
                <div className="">
                  <div className="flex justify-between pb-1">
                    <p className="px-3">Departamento: CABA</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                  <div className="flex justify-between pb-1">
                    <p className="px-3">Delivery: Calle falsa 123</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="">
            <div className="py-3 pl-3">
              <div className="flex justify-between">
                <h3 className="">Metodos de Pago</h3>
                <button onClick={handleShowPayment}>{">"}</button>
              </div>
              {showPayment ? (
                <div className="">
                  <div className="flex justify-between pb-1">
                    <p className="px-3">Efectivo</p>
                    <img src={keyUser} alt="edit" className="w-4" />
                  </div>
                  <div className="flex justify-between pb-1">
                    <p className="px-3">
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
    </div>
  );
}

export default Profile;
