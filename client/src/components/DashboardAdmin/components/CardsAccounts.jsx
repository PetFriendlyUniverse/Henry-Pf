import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import ListAccounts from "./ListAccounts";
import Profile from "../../../assets/general/profile.svg";
import {
  getUsers,
  getUsersFilter,
  deleteDaycareByUser,
  deleteStoreByUser,
  deleteUserApi,
  deleteWalkerByUser,
  approvedUserApi,
  approvedStoreByUser,
  approvedDaycareByUser,
  approvedWalkerByUser,
} from "../../../redux/features/filters/filtersActions";

function CardsAccounts() {
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    type: "",
  });
  const list = useSelector((state) => state.Filters?.list);
  const users = useSelector((state) => state.Filters?.usersFiltered);
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getUsersFilter(user.name, user.type));
  }, []);

  const handlerChange = (e) => {
    if (e.target.name === "name") {
      setUser({
        ...user,
        [e.target.name]:
          e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1),
      });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(getUsersFilter(user.name, user.type));
  };

  const handleDelete = (e) => {
    if (user.type === "store") {
      dispatch(deleteStoreByUser(users[0]?.id));
      Swal.fire({
        icon: "success",
        title: "La Tienda fue eliminado correctamente",
        showConfirmButton: true,
        timer: 1500,
      });
    } else if (user.type === "daycare") {
      dispatch(deleteDaycareByUser(users[0]?.id));
      Swal.fire({
        icon: "success",
        title: "La Guarderia fue eliminado correctamente",
        showConfirmButton: true,
        timer: 1500,
      });
    } else if (user.type === "walker") {
      dispatch(deleteWalkerByUser(users[0]?.id));
      Swal.fire({
        icon: "success",
        title: "El Paseador fue eliminado correctamente",
        showConfirmButton: true,
        timer: 1500,
      });
    } else {
      dispatch(deleteUserApi(users[0]?.id));
      Swal.fire({
        icon: "success",
        title: "El Usuario fue eliminado correctamente",
        showConfirmButton: true,
        timer: 1500,
      });
    }
  };
  const handleApproved = (e) => {
    if (user.type === "store") {
      dispatch(approvedStoreByUser(users[0]?.id));
      Swal.fire({
        icon: "success",
        title: "La Tienda fue reincorporado correctamente",
        showConfirmButton: true,
        timer: 1500,
      });
    } else if (user.type === "daycare") {
      dispatch(approvedDaycareByUser(users[0]?.id));
      Swal.fire({
        icon: "success",
        title: "La Guarderia fue reincorporado correctamente",
        showConfirmButton: true,
        timer: 1500,
      });
    } else if (user.type === "walker") {
      dispatch(approvedWalkerByUser(users[0]?.id));
      Swal.fire({
        icon: "success",
        title: "El Paseador fue reincorporado correctamente",
        showConfirmButton: true,
        timer: 1500,
      });
    } else {
      dispatch(approvedUserApi(users[0]?.id));
      Swal.fire({
        icon: "success",
        title: "El Usuario fue reincorporado correctamente",
        showConfirmButton: true,
        timer: 1500,
      });
    }
  };
  return (
    <div>
      <div className="flex justify-center">
        <form className="flex pb-10" onSubmit={handlerSubmit}>
          <button className="rounded-l bg-cornflowerblue px-2 hover:bg-blue-600">
            Buscar
          </button>
          <input
            type="text"
            value={user.name}
            name="name"
            onChange={handlerChange}
            className="w-28 text-black md:w-32"
            autoComplete="off"
          />
          <select
            name="type"
            value={user.type}
            onChange={handlerChange}
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
            ? "flex max-h-[54vh] min-w-[70vw] flex-wrap justify-center gap-y-4 overflow-y-scroll"
            : "py-4"
        }
      >
        {users &&
          users?.map((e) => {
            return (
              <div
                key={e.id}
                className="mx-5 flex w-[500px] items-center rounded-lg border border-gray-200 bg-gray-200 px-10 dark:border-gray-700"
              >
                <div>
                  <div className="flex justify-center pb-5">
                    <img
                      src={e.img ? e.img : Profile}
                      alt=""
                      className="min-w-[100px] max-w-[100px] rounded-sm object-cover"
                    />
                  </div>
                  {users && users[0]?.enable ? (
                    <div>
                      <button
                        onClick={handleDelete}
                        className="rounded-lg bg-red-700 p-1 hover:bg-red-900"
                      >
                        Suspender
                      </button>
                    </div>
                  ) : (
                    <div>
                      <button
                        onClick={handleApproved}
                        className="rounded-lg bg-green-700 p-1 hover:bg-green-900"
                      >
                        Activar
                      </button>
                    </div>
                  )}
                </div>
                <div class="flex w-full flex-col justify-center p-4 leading-normal ">
                  <div className="flex justify-center">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-black ">
                      {`${e.name}`}
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
      </div>
      <div className="pt-10">
        <ListAccounts />
      </div>
    </div>
  );
}

export default CardsAccounts;
