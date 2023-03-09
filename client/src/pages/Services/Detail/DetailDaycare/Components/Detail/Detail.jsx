import Qualification from "../Qualification/Qualification";

import Description from "../Description/Description";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDaycareApi } from "../../../../../../redux/features/services/servicesActions";

function Detail({
  name,
  img,
  price_hour,
  price_day,
  province,
  locality,
  area_code,
  number,
  mail,
  street_name,
  street_number,
}) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const walker = useSelector((state) => state.Services?.walkerId);
  useEffect(() => {
    dispatch(getDaycareApi(id));
  }, []);

  return (
    <div className="flex justify-center text-black">
      <div className="shadow-2xl">
        <div className="max-w-[1000px] rounded-t-lg border-t-2 border-r-2 border-l-2 border-russianviolet bg-zinc-100 lg:flex">
          <div className="flex justify-center">
            <img src={`${img}`} alt={`${img}`} className=" rounded-tl-md" />
          </div>
          <div className="border-b-2">
            <div className="flex justify-center border-b-2 bg-zinc-200 py-4 lg:w-[500px] lg:rounded-tr-md">
              <p className="font-bold md:text-2xl lg:text-3xl">{`${name}`}</p>
            </div>
            <div className="px-10 py-2">
              <p className="font-medium">
                Precio por hora: ${`${price_hour}`} (c/u)
              </p>
              {price_day ? (
                <p className="font-medium">
                  Precio por dia: {`${price_day}`} (c/u)
                </p>
              ) : null}
            </div>
            <div className="px-10 py-2">
              <p className="py-4 font-medium">
                Provincia:
                {province ? ` ${province} ` : " No disponible"}
              </p>
              <p className="py-4 font-medium">
                Localidad:
                {locality ? ` ${locality}` : " No disponible"}
              </p>
              {street_name && (
                <p>Dirección: {`${street_name} - ${street_number}`}</p>
              )}
            </div>
            <div className="px-10 py-2">
              <h6 className="pb-5 font-medium">Contacto:</h6>
              <div className="ml-20 font-medium sm:ml-40 md:ml-44 lg:ml-0">
                {area_code ? (
                  <p>{`${area_code} - ${number}`}</p>
                ) : (
                  "Telefono no disponible"
                )}
                {mail && <p>{`${mail}`}</p>}
              </div>
            </div>
          </div>
        </div>
        <div>
          <Description />
        </div>
      </div>
    </div>
  );
}

export default Detail;
