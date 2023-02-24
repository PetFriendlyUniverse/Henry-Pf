import React, { useState } from "react";
import axios from "axios";
import { ValidateStore } from "../Validations/ValidateStore";

import LinkButton from "../../../../components/Button/LinkButton";

function FormCreateStore() {
  const provinces = [
    "Buenos Aires",
    "Catamarca",
    "Chaco",
    "Chubut",
    "Ciudad Autónoma de Buenos Aires",
    "Córdoba",
    "Corrientes",
    "Entre Ríos",
    "Formosa",
    "Jujuy",
    "La Pampa",
    "La Rioja",
    "Mendoza",
    "Misiones",
    "Neuquén",
    "Río Negro",
    "Salta",
    "San Juan",
    "San Luis",
    "Santa Cruz",
    "Santa Fe",
    "Santiago del Estero",
    "Tierra del Fuego",
    "Tucumán",
  ];

  const [form, setForm] = useState({
    name: "",
    phone: "",
    province: "",
    locality: "",
    streets: "",
    description: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    province: "",
    locality: "",
    streets: "",
    description: "",
  });
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });

    console.log(form);
    setErrors({ ...errors, ...ValidateStore(property, value) });

  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorValues = Object.values(errors);
    const isFormValid = errorValues.every((val) => val === "");
    if (isFormValid) {
      axios
        .post("store/create", form)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      setForm({
        name: "",
        phone: "",
        province: "",
        locality: "",
        streets: "",
        description: "",
      });
    } else {
      console.log("Hay errores en el formulario");
    }
  };
  return (
    <div className="flex h-screen justify-center py-28">
      <form
        onSubmit={handleSubmit}
        className="rounded-xl p-3 shadow-2xl lg:h-[550px] lg:w-2/5"
      >
        <h3 className="mb-6">Registra tu Tienda</h3>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={form.name}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Nombre de la Tienda (max: 30 caracteres)
          </label>
          {errors.name && <span className="text-red-500">{errors.name}</span>}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <select
            onChange={handleChange}
            name="province"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          >
            <option hidden>Selecciona una Provincia</option>
            {provinces.map((e, i) => (
              <option key={i} value={e}>
                {e}
              </option>
            ))}
          </select>
          {errors.province && (
            <span className="text-red-500">{errors.province}</span>
          )}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChange}
            type="text"
            name="locality"
            value={form.locality}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Nombre de la Localidad (max: 30 caracteres)
          </label>
          {errors.locality && (
            <span className="text-red-500">{errors.locality}</span>
          )}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChange}
            type="text"
            name="streets"
            value={form.streets}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Direccion (max: 100 caracteres)
          </label>
          {errors.streets && (
            <span className="text-red-500">{errors.streets}</span>
          )}
        </div>
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
            Telefono (max: 20 caracteres)
          </label>
          {errors.phone && <span className="text-red-500">{errors.phone}</span>}
        </div>
        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChange}
            type="text"
            name="description"
            value={form.description}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Descripcion (max: 2000 caracteres)
          </label>
          {errors.description && (
            <span className="text-red-500">{errors.description}</span>
          )}
        </div>
        <LinkButton component={"Enviar"} />
      </form>
    </div>
  );
}

export default FormCreateStore;
