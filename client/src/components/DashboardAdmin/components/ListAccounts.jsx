import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Profile from "../../../assets/general/profile.svg";
import { getUsers } from "../../../redux/features/filters/filtersActions";

function ListAccounts() {
  const dispatch = useDispatch();

  const listUsers = useSelector((state) => state.Filters?.listObject);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <h2 className="rounded-t-md bg-violet-800 text-lg font-medium">
        Lista total de usuarios
      </h2>
      <div className="flex max-h-[54vh] min-w-[70vw] flex-wrap justify-center gap-y-4 overflow-y-scroll border-t-2 border-b-2 border-violet-800 py-4">
        {listUsers.User?.map((e) => {
          return (
            <div
              key={e.id}
              className="mx-5 w-[300px] items-center rounded-lg border  border-gray-200 bg-gray-200 px-10 dark:border-gray-700 md:flex-row"
            >
              <div>
                <div className="flex justify-center">
                  <img
                    src={e.img ? e.img : Profile}
                    alt=""
                    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="h-[70px]">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
                    {`${e.name} `}
                  </h5>
                  {e.lastname ? (
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">{`${e.lastname}`}</h5>
                  ) : null}
                </div>
                <div>
                  <p className="mb-3 font-normal text-black ">
                    {e.Province && e.Locality
                      ? `${e.Province} - ${e.Locality}`
                      : "Sin Provincia - Sin Localidad"}
                  </p>
                  <p className="mb-3 flex justify-center font-normal text-black">
                    {e.mail ? `${e.mail}` : "Sin mail"}
                  </p>
                  <p className="mb-3 flex justify-center font-normal text-black ">
                    {e.area_code && e.number
                      ? `${e.area_code}${e.number}`
                      : "Sin telefono"}
                  </p>
                  <p className="mb-3 font-normal text-black ">
                    {e.street_name && e.street_number
                      ? `${e.street_name} - ${e.street_number}`
                      : "Sin direccion"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {listUsers.Store?.map((e) => {
          return (
            <div
              key={e.id}
              className="mx-5 w-[300px] items-center rounded-lg border  border-gray-200 bg-gray-200 px-10 dark:border-gray-700 md:flex-row"
            >
              <div>
                <div className="flex justify-center">
                  <img
                    src={e.img ? e.img : Profile}
                    alt=""
                    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  />
                </div>
              </div>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <div className="h-[70px]">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">
                    {`${e.name}`}
                  </h5>
                  {e.lastname ? <h5>{`${e.lastname}`}</h5> : null}
                </div>
                <div>
                  <p class="mb-3 font-normal text-black ">
                    {e.Province && e.Locality
                      ? `${e.Province} - ${e.Locality}`
                      : "Sin Provincia - Sin Localidad"}
                  </p>
                  <p class="mb-3 flex justify-center font-normal text-black">
                    {e.mail ? `${e.mail}` : "Sin mail"}
                  </p>
                  <p class="mb-3 flex justify-center font-normal text-black ">
                    {e.area_code && e.number
                      ? `${e.area_code}${e.number}`
                      : "Sin telefono"}
                  </p>
                  <p class="mb-3 font-normal text-black ">
                    {e.street_name && e.street_number
                      ? `${e.street_name} - ${e.street_number}`
                      : "Sin direccion"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {listUsers.Daycare?.map((e) => {
          return (
            <div
              key={e.id}
              className="mx-5 w-[300px] items-center rounded-lg border  border-gray-200 bg-gray-200 px-10 dark:border-gray-700 md:flex-row"
            >
              <div>
                <div className="flex justify-center">
                  <img
                    src={e.img ? e.img : Profile}
                    alt=""
                    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  />
                </div>
              </div>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <div className="h-[70px]">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">
                    {`${e.name}`}
                  </h5>
                  {e.lastname ? <h5>{`${e.lastname}`}</h5> : null}
                </div>
                <div>
                  <p class="mb-3 font-normal text-black ">
                    {e.Province && e.Locality
                      ? `${e.Province} - ${e.Locality}`
                      : "Sin Provincia - Sin Localidad"}
                  </p>
                  <p class="mb-3 flex justify-center font-normal text-black">
                    {e.mail ? `${e.mail}` : "Sin mail"}
                  </p>
                  <p class="mb-3 flex justify-center font-normal text-black ">
                    {e.area_code && e.number
                      ? `${e.area_code}${e.number}`
                      : "Sin telefono"}
                  </p>
                  <p class="mb-3 font-normal text-black ">
                    {e.street_name && e.street_number
                      ? `${e.street_name} - ${e.street_number}`
                      : "Sin direccion"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {listUsers.Walker?.map((e) => {
          return (
            <div
              key={e.id}
              className="mx-5 w-[300px] items-center rounded-lg border  border-gray-200 bg-gray-200 px-10 dark:border-gray-700 md:flex-row"
            >
              <div>
                <div className="flex justify-center">
                  <img
                    src={e.img ? e.img : Profile}
                    alt=""
                    class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                  />
                </div>
              </div>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <div className="h-[70px]">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">
                    {`${e.name}`}
                  </h5>
                  {e.lastname ? <h5>{`${e.lastname}`}</h5> : null}
                </div>
                <div>
                  <p class="mb-3 font-normal text-black ">
                    {e.Province && e.Locality
                      ? `${e.Province} - ${e.Locality}`
                      : "Sin Provincia - Sin Localidad"}
                  </p>
                  <p class="mb-3 flex justify-center font-normal text-black">
                    {e.mail ? `${e.mail}` : "Sin mail"}
                  </p>
                  <p class="mb-3 flex justify-center font-normal text-black ">
                    {e.area_code && e.number
                      ? `${e.area_code}${e.number}`
                      : "Sin telefono"}
                  </p>
                  <p class="mb-3 font-normal text-black ">
                    {e.street_name && e.street_number
                      ? `${e.street_name} - ${e.street_number}`
                      : "Sin direccion"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListAccounts;
