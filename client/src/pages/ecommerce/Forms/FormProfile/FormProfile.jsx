import { useState } from "react";

import LinkButton from "../../../../components/Button/LinkButton";

function FormProfile() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    name: "",
    lastname: "",
    phone: "",
    pets: [],
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    name: "",
    lastname: "",
    phone: "",
  });
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    if (property === "pets") {
      setForm({ ...form, [property]: [value] });
    } else {
      setForm({ ...form, [property]: value });
      //setErrors({...errors, ...validation({[property]: [value]})})
    }
    console.log(form);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-14 flex h-screen justify-center">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-3 shadow-2xl lg:h-2/3 lg:w-2/5"
      >
        <h3 className="mb-6">Registrate</h3>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChange}
            type="text"
            name="email"
            value={form.email}
            className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 "
            placeholder=" "
          />
          <label className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400">
            Email
          </label>
          {!form.email ? null : (
            <div>
              <p className="text-red">{`Por favor escribe un email valido`}</p>
            </div>
          )}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChange}
            type="text"
            name="password"
            value={form.password}
            className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 "
            placeholder=" "
            required
          />
          <label
            for="password"
            className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
          >
            Contraseña
          </label>
          {!form.email ? null : (
            <div>
              <p className="text-red">{`Por favor escribe un email valido`}</p>
            </div>
          )}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChange}
            type="text"
            name="repeatPassword"
            value={form.repeatPassword}
            className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 "
            placeholder=" "
            required
          />
          <label
            for="repeatPassword"
            className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
          >
            Confirme Contraseña
          </label>
          {!form.email ? null : (
            <div>
              <p className="text-red">{`Por favor escribe un email valido`}</p>
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
              className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 "
              placeholder=" "
              required
            />
            <label
              for="name"
              className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
            >
              Nombre
            </label>
            {!form.email ? null : (
              <div>
                <p className="text-red">{`Por favor escribe un email valido`}</p>
              </div>
            )}
          </div>
          <div className="group relative z-0 mb-6 h-11 w-full">
            <input
              onChange={handleChange}
              type="text"
              name="lastname"
              value={form.lastname}
              className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 "
              placeholder=" "
              required
            />
            <label
              for="lastname"
              className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
            >
              Apellido
            </label>
            {!form.email ? null : (
              <div>
                <p className="text-red">{`Por favor escribe un email valido`}</p>
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
              className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 "
              placeholder=" "
              required
            />
            <label
              for="phone"
              className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
            >
              Numero de telefono
            </label>
            {!form.email ? null : (
              <div>
                <p className="text-red">{`Por favor escribe un email valido`}</p>
              </div>
            )}
          </div>
          <div className="group relative z-0 mb-6 h-11 w-full">
            <input
              onChange={handleChange}
              type="text"
              name="pets"
              value={form.pets}
              id="pets"
              className="dark:focus:border-blue-500 focus:border-blue-600 peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 "
              placeholder=" "
              required
            />
            <label
              for="pet"
              className="peer-focus:text-blue-600 peer-focus:dark:text-blue-500 absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium dark:text-gray-400"
            >
              Mascotas
            </label>
            {!form.email ? null : (
              <div>
                <p className="text-red">{`Por favor escribe un email valido`}</p>
              </div>
            )}
          </div>
        </div>
        <LinkButton component={"Enviar"} />
      </form>
    </div>
  );
}

export default FormProfile;
