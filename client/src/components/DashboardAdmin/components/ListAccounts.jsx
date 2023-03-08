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
      <h2 className="rounded-t-md bg-cornflowerblue text-lg font-medium">
        Lista total de usuarios
      </h2>
      <div className="flex max-h-[54vh] flex-wrap justify-center gap-y-4 overflow-y-scroll border-t-2 border-b-2 border-cornflowerblue py-4">
        {listUsers.User?.map((e) => {
          return (
            <div
              key={e.id}
              className="flex w-[500px] items-center rounded-lg border border-gray-200 bg-gray-200 px-10 dark:border-gray-700 lg:mx-5"
            >
              <div>
                <div className="flex justify-center p-2">
                  <img
                    src={e.img ? e.img : Profile}
                    alt=""
                    className="min-w-[100px] max-w-[100px] rounded-sm object-cover"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col justify-center p-4 leading-normal">
                <div className="">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
                    {`${e.name} ${e.lastname}`}
                  </h5>
                </div>
                <div>
                  <p className="mb-3 flex justify-center font-normal text-black">
                    {e.mail ? `${e.mail}` : "Sin mail"}
                  </p>
                  <p className="mb-3 flex justify-center font-normal text-black ">
                    {e.area_code && e.number
                      ? `${e.area_code}${e.number}`
                      : "Sin telefono"}
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
              className="mx-5 flex w-[500px] items-center rounded-lg border border-gray-200 bg-gray-200 px-10 dark:border-gray-700"
            >
              <div>
                <div className="flex justify-center">
                  <img
                    src={e.img ? e.img : Profile}
                    alt=""
                    className="min-w-[100px] max-w-[100px] rounded-sm object-cover"
                  />
                </div>
              </div>
              <div class="flex w-full flex-col justify-center p-4 leading-normal ">
                <div className="flex justify-center">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">
                    {`${e.name}`}
                  </h5>
                </div>
                <div>
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
              className="mx-5 flex w-[500px] items-center rounded-lg border border-gray-200 bg-gray-200 px-10 dark:border-gray-700"
            >
              <div>
                <div className="flex justify-center">
                  <img
                    src={e.img ? e.img : Profile}
                    alt=""
                    className="min-w-[100px] max-w-[100px] rounded-sm object-cover"
                  />
                </div>
              </div>
              <div class="flex w-full flex-col justify-center p-4 leading-normal">
                <div className="">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">
                    {`${e.name}`}
                  </h5>
                  {e.lastname ? <h5>{`${e.lastname}`}</h5> : null}
                </div>
                <div className="flex flex-col justify-center">
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
              className="mx-5 flex w-[500px] items-center rounded-lg border border-gray-200 bg-gray-200 px-10 dark:border-gray-700"
            >
              <div>
                <div className="flex justify-center">
                  <img
                    src={e.img ? e.img : Profile}
                    alt=""
                    className="min-w-[100px] max-w-[100px] rounded-sm object-cover"
                  />
                </div>
              </div>
              <div class="flex w-full flex-col justify-center p-4 leading-normal">
                <div className="">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">
                    {`${e.name}`}
                  </h5>
                </div>
                <div>
                  <p class="mb-3 flex justify-center font-normal text-black">
                    {e.mail ? `${e.mail}` : "Sin mail"}
                  </p>
                  <p class="mb-3 flex justify-center font-normal text-black ">
                    {e.area_code && e.number
                      ? `${e.area_code}${e.number}`
                      : "Sin telefono"}
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
