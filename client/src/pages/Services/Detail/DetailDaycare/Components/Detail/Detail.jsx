import Qualification from "../Qualification/Qualification";

import Description from "../Description/Description";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDaycareApi } from "../../../../../../redux/features/services/servicesActions";
import { Carousel } from "flowbite-react";

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
    <div className="flex flex-col gap-8">
      <div className="container mx-auto min-h-[70vh] max-w-sm overflow-hidden rounded-2xl border border-black lg:max-w-xl">
        <div className="grid h-14 place-content-center bg-zinc-400">
          <p className="text-base font-bold tracking-[1px] md:text-2xl lg:text-3xl">
            {name}
          </p>
        </div>
        <div className="flex h-full flex-col">
          <div className="flex h-60 items-center justify-center">
            <Carousel className="lg:w-4/5">
              <img src={img} alt={img} className="h-full" />
            </Carousel>
          </div>
          <div className="mx-auto flex h-full w-4/5 flex-col justify-around gap-4 p-3">
            {/* ubicacion */}
            <div className="flex flex-col gap-1">
              <p className="">
                <span className="font-bold">Provincia:</span>
                {province ? ` ${province} ` : " No disponible"}
              </p>
              <p className="">
                <span className="font-bold">Localidad:</span>
                {locality ? ` ${locality}` : " No disponible"}
              </p>
              {street_name && (
                <p>Dirección: {`${street_name} - ${street_number}`}</p>
              )}
            </div>
            {/* contacto */}
            <div className="flex flex-col gap-1">
              <h6 className="text-center font-bold uppercase">Contacto:</h6>
              <div className="flex flex-col gap-1">
                <div>
                  <span className="font-bold">Teléfono: </span>
                  {area_code ? (
                    <p>{`${area_code} - ${number}`}</p>
                  ) : (
                    <p>No disponible</p>
                  )}
                </div>
                <div>
                  <span className="font-bold">Email: </span>
                  {mail && <p>{`${mail}`}</p>}
                </div>
              </div>
            </div>
            {/* precios */}
            <div className="flex flex-col gap-3">
              <p className="rounded-lg bg-pastelgreen py-1 px-2 font-medium shadow-xl shadow-black">
                Precio por hora: ${`${price_hour}`} (c/u)
              </p>
              {price_day ? (
                <p className="rounded-lg bg-pastelgreen py-1 px-2 font-medium shadow-xl shadow-black">
                  Precio por dia: {`${price_day}`} (c/u)
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <Description />
    </div>
  );
}

export default Detail;
