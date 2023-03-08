import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import Swal from "sweetalert2";
import { ValidateStore } from "../Validations/ValidateStore";
import { Carousel } from "flowbite-react";
import {
  getLocalidadesAsync,
  getPronvinciasAsync,
} from "../../../../redux/features/ubicaciones/ubicacionesActions";

import LinkButton from "../../../../components/Button/LinkButton";
import { useNavigate, useParams } from "react-router-dom";
import { getStoreByUser } from "../../../../redux/features/users/usersActions";
function FormCreateStore() {
  const UserId = localStorage.getItem("id");
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const provincia = useSelector((state) => state.Ubicaciones.provincias);
  const localidad = useSelector((state) => state.Ubicaciones.localidades);

  useEffect(() => {
    dispatch(getStoreByUser(id));
    dispatch(getPronvinciasAsync());
  }, []);

  const [formComplete, setFormComplete] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [img, setImg] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [form, setForm] = useState({
    name: "",
    area_code: "",
    number: "",
    province: "",
    locality: "",
    zip_code: "",
    street_name: "",
    street_number: "",
    description: "",
    mail: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    area_code: "",
    number: "",
    province: "",
    locality: "",
    zip_code: "",
    street_name: "",
    street_number: "",
    description: "",
  });
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });
    setErrors({ ...errors, ...ValidateStore(property, value) });
    if (value !== "") {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
    if (e.target.name === "province") {
      dispatch(getLocalidadesAsync(e.target.value));
    }
  };

  const changeHandlerImg = (e) => {
    setImg(e.target.files[0]);
    const files = e.target.files;
    const fileArray = [];
    for (let i = 0; i < files.length; i++) {
      fileArray.push(URL.createObjectURL(files[i]));
    }
    setSelectedFiles(fileArray);
    setImgFile(fileArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorValues = Object.values(errors);
    const isFormValid = errorValues.every((val) => val === "");
    const newForm = new FormData();
    newForm.append("img", img);
    newForm.append("name", form.name);
    newForm.append("area_code", form.area_code);
    newForm.append("number", form.number);
    newForm.append("province", form.province);
    newForm.append("locality", form.locality);
    newForm.append("zip_code", form.zip_code);
    newForm.append("street_name", form.street_name);
    newForm.append("street_number", form.street_number);
    newForm.append("description", form.description);
    newForm.append("mail", form.mail);
    if (isFormValid) {
      Swal.fire({
        title: "Now loading",
        allowEscapeKey: false,
        allowOutsideClick: false,

        didOpen: () => {
          Swal.showLoading();
        },
      });
      axios
        .post(`store/create/${id}`, newForm, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          Swal.fire({
            title: "Tienda creada",
            icon: "success",
            text: "La Tienda ha sido creada correctamente",
            closeOnEsc: true,
            closeOnClickOutside: true,
          }).then(() => {
            navigate(`/profile/${UserId}`);
          });
        })
        .catch((err) => {
          console.log(err);
          Swal.fire({
            icon: "error",
            title: "Error en el formulario",
            text: "Por favor, revisa los campos del formulario",
            closeOnEsc: true,
            closeOnClickOutside: true,
          });
        });
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex h-full justify-center pb-16 ">
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex h-full w-2/3 max-w-[900px] flex-col items-center justify-center rounded-xl bg-russianviolet p-3 text-lg font-extrabold text-cornflowerblue shadow-2xl shadow-black md:w-3/5 lg:h-auto lg:w-full "
      >

        <div>
          <h3 className="mb-6 text-center text-sm">
            Modifica o agrega informacion para crear tu tienda
          </h3>
        </div>
        <div className="flex h-full w-full flex-col justify-between overflow-hidden rounded-lg bg-slate-50 py-10 lg:flex-row">
          {/* //div con el fomulario izquierdo */}
          <div className="h-full p-4 lg:w-1/2">
            {/* nombre de tienda */}
            <div className="group relative z-0 mb-6  h-11 lg:w-4/5 ">

              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={form.name}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 sm:w-full "
                placeholder=" "
                autoComplete="off"
              />
              <label className="absolute top-3 -z-10 w-full origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900 sm:w-full">
                Nombre de la tienda
              </label>
              {errors.name && (
                <span className="text-xs text-red-500">{errors.name}</span>
              )}
            </div>
            {/* corre electronico */}

            <div className="group relative z-0 mb-6 h-11 lg:w-4/5  ">

              <input
                onChange={handleChange}
                type="text"
                name="mail"
                value={form.mail}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900"
                placeholder=" "
                autoComplete="off"
              />
              <label className="absolute top-3 -z-10 w-44 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900 sm:w-full">
                Correo Electrónico
              </label>
              {errors.mail && (
                <span className="text-xs text-red-500">{errors.mail}</span>
              )}
            </div>

            {/* provincia */}
            <div className=" grid px-10  md:grid-cols-2 md:gap-6">
              <div className="group relative z-0 mb-6 h-11 w-full">
                <select
                  onChange={handleChange}
                  name="province"
                  className="w-[240px] bg-transparent"
                  value={form.province}
                >
                  {provincia.map((p) => (
                    <option key={p.id} value={p.nombre}>
                      {p.nombre.slice(0, 25)}
                    </option>
                  ))}
                </select>
              </div>
              <div className="group relative z-0 mb-6 h-11 w-full">
                <select
                  onChange={handleChange}
                  name="locality"
                  value={form.locality}
                  className="w-[240px] bg-transparent"
                >
                  {localidad.municipios?.map((l) => (
                    <option key={l.id} value={l.nombre}>
                      {l.nombre}
                    </option>
                  ))}
                  <option>Rosario</option>
                </select>
              </div>
            </div>
            {/* cod postal */}

            <div className="mb-7 flex flex-col gap-4 lg:flex-row">
              <div className="group relative z-0 mb-6 h-11 ">

                <input
                  onChange={handleChange}
                  type="number"
                  name="zip_code"
                  value={form.zip_code}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 sm:w-full "
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="absolute top-3 -z-10 w-full origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900 sm:w-full">
                  Cod. Postal
                </label>
                {errors.zip_code && (
                  <span className="text-xs text-red-500 ">
                    {errors.zip_code}
                  </span>
                )}
              </div>

              <div className="group relative z-0 mb-6 h-11 ">

                <input
                  onChange={handleChange}
                  type="text"
                  name="street_name"
                  value={form.street_name}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 sm:w-full "
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                  Calle
                </label>
                {errors.street_name && (
                  <span className="text-xs text-red-500">
                    {errors.street_name}
                  </span>
                )}
              </div>
              <div className="group relative z-0 mb-6 h-11 ">
                <input
                  onChange={handleChange}
                  type="number"
                  name="street_number"
                  value={form.street_number}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 sm:w-full "
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                  Numeración
                </label>
                {errors.street_number && (
                  <span className="text-xs text-red-500">
                    {errors.street_number}
                  </span>
                )}
              </div>
            </div>

            <div className="group relative z-0 mb-6 flex h-2/4 w-full flex-col">

              <textarea
                type="text"
                value={form.description}
                name="description"
                onChange={handleChange}

                className=" peer block w-full appearance-none rounded-2xl border-b-2 border-gray-100 bg-gray-100 px-1 py-4 text-sm text-gray-900   focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                placeholder="Agregue una breve descrpcion de su producto  "

                autoComplete="off"
              />
              {errors.description && (
                <span className="text-xs text-red-500">
                  {errors.description}
                </span>
              )}
            </div>
          </div>
          {/* //empieza el div con imagenes */}

          <div className="lg:w-1/2">
            <div className="flex h-1/2 justify-center">
              <Carousel className="min-h-[100px] w-full lg:w-10/12 ">

                {selectedFiles &&
                  selectedFiles.map((file, i) => (
                    <picture
                      key={i}
                      className="flex min-h-[100px] items-center justify-center lg:aspect-square lg:w-1/2 "
                    >
                      <img
                        src={file}
                        alt=""
                        key={file.name}
                        className="h-full w-full"
                      />
                    </picture>
                  ))}
              </Carousel>
            </div>
            <div className="p-8 px-8 lg:h-1/2 ">
              <div className="group relative z-0 mb-14 flex h-11 w-full ">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={changeHandlerImg}
                  value=""
                  className="text-xs lg:text-base"
                />

              <div className="flex flex-col gap-10 md:grid-cols-2 md:gap-6">

                {/* cod de area */}
                <div className="group relative z-0  h-11 w-full">
                  <input
                    onChange={handleChange}
                    type="number"
                    name="area_code"
                    value={form.area_code}
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                    Cod. de área
                  </label>
                  {errors.area_code && (
                    <span className="text-xs text-red-500">
                      {errors.area_code}
                    </span>
                  )}
                </div>
                {/* telefono */}
                <div className="group relative z-0  h-11 w-full">
                  <input
                    onChange={handleChange}
                    type="number"
                    name="number"
                    value={form.number}
                    className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                    placeholder=" "
                    autoComplete="off"
                  />
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                    Teléfono
                  </label>
                  {errors.number && (
                    <span className="text-xs text-red-500">
                      {errors.number}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-8 h-[10px] lg:mt-0">
              <button>
                {formComplete && <LinkButton component={"Crear Tienda"} />}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormCreateStore;
