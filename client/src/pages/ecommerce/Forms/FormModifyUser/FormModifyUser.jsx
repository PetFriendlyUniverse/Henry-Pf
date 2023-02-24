import axios from "axios";
import { useState } from "react";
import { ValidationProfile } from "../Validations/Profile";
import Swal from "sweetalert2";
import LinkButton from "../../../../components/Button/LinkButton";

function FormModifyUser() {
  const [formComplete, setFormComplete] = useState(false);
  const [img, setImg] = useState(null);
  const [form, setForm] = useState({
    user: "",
    name: "",
    lastname: "",
    mail: "",
    password: "",
    area_code: "",
    number: "",
    province: "",
    locality: "",
    zip_code: "",
    street_name: "",
    street_number: "",
    area_code_emergency: "",
    emergency_number: "",
  });
  const [errors, setErrors] = useState({
    user: "",
    name: "",
    lastname: "",
    mail: "",
    password: "",
    area_code: "",
    number: "",
    province: "",
    locality: "",
    zip_code: "",
    street_name: "",
    street_number: "",
    area_code_emergency: "",
    emergency_number: "",
  });
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });
    setErrors({ ...errors, ...ValidationProfile(property, value) }); //NO CAMBIAR ESTO POR DIOS
    if (value !== "") {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  };
  const handleChangeImage = (e) => {
    setImg(e.target.files[0]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const errorValues = Object.values(errors);
    const isFormValid = errorValues.every((val) => val === "");
    const newForm = new FormData();
    newForm.append("img", img);
    newForm.append("user", form.user);
    newForm.append("name", form.name);
    newForm.append("lastname", form.lastname);
    newForm.append("mail", form.mail);
    newForm.append("password", form.password);
    newForm.append("number", form.number);
    newForm.append("province", form.province);
    newForm.append("locality", form.locality);
    newForm.append("zip_code", form.zip_code);
    newForm.append("street_name", form.street_name);
    newForm.append("street_number", form.street_number);
    newForm.append("area_code_emergency", form.area_code_emergency);
    newForm.append("emergency_number", form.emergency_number);
    if (isFormValid) {
      axios
        .post("/user/create", newForm, {
          headers: {
            "Content-Type": "multipart/form-data",
          }, //importante en form de imagen poner este headers
        })
        .then(() => {
          Swal.fire({
            title: "Perfil actualizado",
            icon: "success",
            text: "El perfil ha sido actualizado correctamente",
          });
        })
        .catch((err) => console.log(err));
      setForm({
        user: "",
        name: "",
        lastname: "",
        mail: "",
        password: "",
        area_code: "",
        number: "",
        province: "",
        locality: "",
        zip_code: "",
        street_name: "",
        street_number: "",
        area_code_emergency: "",
        emergency_number: "",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error en el formulario",
        text: "Por favor, revisa los campos del formulario",
      });
    }
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
            type="file"
            accept="image/*"
            onChange={handleChangeImage}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Imagen
          </label>
          {errors.image && <span className="text-red-500">{errors.image}</span>}
        </div>
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
            Nombre de Usuario (max: 15 caracteres)
          </label>
          {errors.user && <span className="text-red-500">{errors.user}</span>}
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
            Correo Electronico (max: 50 caracteres)
          </label>
          {errors.mail && <span className="text-red-500">{errors.mail}</span>}
        </div>

        <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={form.password}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Contraseña (max: 20 caracteres)
          </label>
          {errors.password && (
            <span className="text-red-500">{errors.password}</span>
          )}
        </div>
        {/* <div className="group relative z-0 mb-6 h-11 w-full">
          <input
            onChange={handleChangeRepeat}
            type="password"
            name="repeatPassword"
            value={repeat.repeatPassword}
            className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
            placeholder=" "
            autoComplete="off"
          />
          <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
            Confirmar Contraseña
          </label>
          {errors.repeatPassword && (
            <span className="text-red-500">{errors.repeatPassword}</span>
          )}
        </div> */}
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
              Nombre (max: 30 caracteres)
            </label>
            {errors.name && <span className="text-red-500">{errors.name}</span>}
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
              Apellido (max: 30 caracteres)
            </label>
            {errors.lastname && (
              <span className="text-red-500">{errors.lastname}</span>
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
              Telefono (max: 20 caracteres)
            </label>
            {errors.phone && (
              <span className="text-red-500">{errors.phone}</span>
            )}
          </div>
          <div className="group relative z-0 mb-6 h-11 w-full">
            <input
              onChange={handleChange}
              type="number"
              name="emergencyphone"
              value={form.emergencyphone}
              className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
              placeholder=" "
              autoComplete="off"
            />
            <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
              Telefono de Emergencia
            </label>
            {errors.emergencyphone && (
              <span className="text-red-500">{errors.emergencyphone}</span>
            )}
          </div>
        </div>
        {formComplete && <LinkButton component={"Enviar"} />}
      </form>
    </div>
  );
}

export default FormModifyUser;
