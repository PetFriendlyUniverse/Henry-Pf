import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Profile from "../../../assets/general/profile.svg";
import { getUsersFilter } from "../../../redux/features/filters/filtersActions";

function CardsAccounts() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    type: "",
  });

  const users = useSelector((state) => state.Filters?.usersFiltered);
  useEffect(() => {
    dispatch(getUsersFilter(user.name, user.type));
  }, []);

  const hadlerChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(getUsersFilter(user.name, user.type));
  };

  return (
    <div className="">
      <div className="flex justify-center">
        <form className="flex pb-10" onSubmit={handlerSubmit}>
          <button className="rounded-l bg-cornflowerblue px-2 hover:bg-blue-600">
            Buscar Usuarios
          </button>
          <input
            type="text"
            value={user.name}
            name="name"
            onChange={hadlerChange}
            className="text-black"
            autoComplete="off"
          />
          <select
            name="type"
            value={user.type}
            onChange={hadlerChange}
            className="h-6 rounded-r bg-cornflowerblue hover:bg-blue-600"
          >
            <option value="" hidden>
              Tipo de Usuario
            </option>
            <option value="user" key="user">
              Usuario
            </option>
            <option value="store" key="store">
              Tiendas
            </option>
            <option value="walker" key="walker">
              Paseadores
            </option>
            <option value="daycare" key="daycare">
              Guarderias
            </option>
          </select>
        </form>
      </div>
      <div
        className={
          users
            ? "flex max-h-[54vh] min-w-[70vw] flex-wrap justify-center gap-y-4 overflow-y-scroll border-t-2 border-b-2 py-4"
            : "py-4"
        }
      >
        {users &&
          users?.map((e) => {
            return (
              <div className="mx-10 min-w-[250px] items-center rounded-lg border  border-gray-200 bg-gray-200 px-10 dark:border-gray-700 md:max-w-xl md:flex-row">
                <div>
                  <div className="flex justify-center">
                    <img
                      src={e.img ? e.img : Profile}
                      alt=""
                      class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    />
                  </div>
                  <div className="">
                    <button className="rounded-lg bg-red-700 p-1 hover:bg-red-900">
                      Suspender
                    </button>
                  </div>
                </div>
                <div class="flex flex-col justify-between p-4 leading-normal">
                  <div>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">
                      {`${e.name}`}
                    </h5>
                    {e.lastname ? <h5>{`${e.lastname}`}</h5> : null}
                  </div>
                  <p class="mb-3 font-normal text-black ">
                    Finalidad del Usuario
                  </p>
                  <div>
                    <p class="mb-3 font-normal text-black ">
                      {e.Province && e.Locality ? (
                        `${e.Province} - ${e.Locality}`
                      ) : (
                        <p>Sin Provincia - Sin Localidad</p>
                      )}
                    </p>
                    <p class="mb-3 flex font-normal text-black">
                      {e.mail ? `${e.mail}` : null}
                    </p>
                    <p class="mb-3 flex justify-center font-normal text-black ">
                      {e.area_code && e.number ? (
                        `${e.area_code}${e.number}`
                      ) : (
                        <p>Sin Telefono</p>
                      )}
                    </p>
                    <p class="mb-3 font-normal text-black ">
                      {e.street_name && e.street_number ? (
                        `${e.street_name} - ${e.street_number}`
                      ) : (
                        <p>Sin Direccion</p>
                      )}
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

export default CardsAccounts;
