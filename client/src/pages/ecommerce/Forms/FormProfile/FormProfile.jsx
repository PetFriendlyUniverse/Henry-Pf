import axios from "axios";
import { useState } from "react";

import validationProfile from "../Validations/Profile";

import LinkButton from "../../../../components/Button/LinkButton";

function FormProfile() {
  const [form, setForm] = useState({
    user: "",
    name: "",
    lastname: "",
    mail: "",
    password: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    user: "",
    name: "",
    lastname: "",
    mail: "",
    password: "",
    phone: "",
  });
  const [repeat, setRepeat] = useState({
    repeatPassword: "",
  });
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if (property === "pets") {
      setForm({ ...form, [property]: [value] });
    } else {
      setForm({ ...form, [property]: value });
      setErrors({
        ...errors,
        ...validationProfile({ property: [property], value: [value] }),
      });
    }
  };
  const handleChangeRepeat = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setRepeat({ [property]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("user/create", form);
    setForm({
      user: "",
      name: "",
      lastname: "",
      mail: "",
      password: "",
      phone: "",
    });
    setRepeat({
      repeatPassword: "",
    });
  };
  return (
    <div className="flex h-screen justify-center py-28">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-3 shadow-2xl lg:h-[550px] lg:w-2/5"
      >
        <h3 className="mb-6">Registrate</h3>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChange}
            type="text"
            name="user"
            value={form.user}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Nickname max: 15 caracteres
          </label>
          {form.user ? null : (
            <div>
              <p className="text-red-700">{`${errors.user}`}</p>
            </div>
          )}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChange}
            type="text"
            name="mail"
            value={form.mail}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            E-mail max: 50 caracteres
          </label>
          {form.mail ? null : (
            <div>
              <p className="text-red-700">{`${errors.mail}`}</p>
            </div>
          )}
        </div>

        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChange}
            type="text"
            name="password"
            value={form.password}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Contraseña max: 20 caracteres
          </label>
          {form.password ? null : (
            <div>
              <p className="text-red-700">{`${errors.password}`}</p>
            </div>
          )}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChangeRepeat}
            type="text"
            name="repeatPassword"
            value={repeat.repeatPassword}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Confirmar Contraseña
          </label>
          {form.password === repeat.repeatPassword ? null : (
            <div>
              <p className="text-red-700">{`Passwords does not match`}</p>
            </div>
          )}
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="group relative z-0 mb-6 h-11 w-full">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={form.name}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
              placeholder=" "
              autoComplete="off"
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
              Nombre max: 30 caracteres
            </label>
            {form.name ? null : (
              <div>
                <p className="text-red-700">{`${errors.name}`}</p>
              </div>
            )}
          </div>
          <div className="group relative z-0 mb-6 h-11 w-full">
            <input
              onChange={handleChange}
              type="text"
              name="lastname"
              value={form.lastname}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
              placeholder=" "
              autoComplete="off"
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
              Apellido max: 30 caracteres
            </label>
            {form.lastname ? null : (
              <div>
                <p className="text-red-700">{`${errors.lastname}`}</p>
              </div>
            )}
          </div>
        </div>
        <div className="mb-7 grid md:grid-cols-2 md:gap-6">
          <div className="group relative z-0 mb-6 h-11 w-full">
            <input
              onChange={handleChange}
              type="number"
              name="phone"
              value={form.phone}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
              placeholder=" "
              autoComplete="off"
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
              Telefono max: 20 caracteres
            </label>
            {form.phone ? null : (
              <div>
                <p className="text-red-700">{`${errors.phone}`}</p>
              </div>
            )}
          </div>
          {/* <div className="group relative z-0 mb-6 h-11 w-full">
            <input
              onChange={handleChange}
              type="text"
              name="pets"
              value={form.pets}
              id="pets"
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
              placeholder=" "
              autoComplete="off"
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
              Mascotas
            </label>
            {!form.mail ? null : (
              <div>
                <p className="text-red-700">{`Por favor escribe un mail valido`}</p>
              </div>
            )}
          </div> */}
        </div>
        <LinkButton component={"Enviar"} />
      </form>
    </div>
  );
}

export default FormProfile;
