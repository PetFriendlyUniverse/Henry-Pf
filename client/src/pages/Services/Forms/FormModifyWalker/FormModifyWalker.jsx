import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { Validate } from "../Validations/Validate";
import { Carousel } from "flowbite-react";

import LinkButton from "../../../../components/Button/LinkButton";
import { useNavigate, useParams } from "react-router-dom";
import { getWalkerByUser } from "../../../../redux/features/users/usersActions";
import {
  getLocalidadesAsync,
  getPronvinciasAsync,
} from "../../../../redux/features/ubicaciones/ubicacionesActions";

function FormModifyWalker() {
  const userId = localStorage.getItem("id");
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.User?.userWalkerId);
  const provincia = useSelector((state) => state.Ubicaciones.provincias);
  const localidad = useSelector((state) => state.Ubicaciones.localidades);

  useEffect(() => {
    dispatch(getWalkerByUser(userId));
    dispatch(getPronvinciasAsync());
  }, []);

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [img, setImg] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const [form, setForm] = useState({
    name: user.name,
    area_code: user.area_code,
    number: user.number,
    province: user.province,
    locality: user.locality,
    zip_code: user.zip_code,
    street_name: user.street_name,
    street_number: user.street_number,
    description: user.description,
    mail: user.mail,
    price_hour: user.price_hour,
    price_day: user.price_day,
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
    mail: "",
    price_hour: "",
    price_day: "",
  });
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });
    setErrors({ ...errors, ...Validate(property, value) });
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
    if (img) {
      newForm.append("img", img);
    }
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
    newForm.append("price_hour", form.price_hour);
    newForm.append("price_day", form.price_day);
    if (isFormValid) {
      Swal.fire({
        title: "Cargando",
        allowEscapeKey: false,
        allowOutsideClick: false,

        didOpen: () => {
          Swal.showLoading();
        },
      });
      axios
        .put(`walker/${id}`, newForm, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          Swal.fire({
            title: "Habilitado como paseador",
            icon: "success",
            text: "Te habilitaste como paseador correctamente",
            closeOnEsc: true,
            closeOnClickOutside: true,
          }).then(() => {
            navigate(-1);
          });
        })
        .catch((err) => {
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
  return (
    <div className="flex h-full flex-col items-center justify-center pb-16 ">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="mt-6  rounded-md bg-ultraviolet p-2 text-lg text-white hover:bg-russianviolet"
        type="button"
      >
        Volver
      </button>
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex h-full w-full flex-col items-center rounded-xl bg-russianviolet p-3 text-lg font-extrabold text-cornflowerblue drop-shadow-2xl md:w-3/5 lg:h-auto "
      >
        <h3 className="mb-6">
          Modifica o agrega información para tu perfil de paseador
        </h3>
        <div className="flex h-full w-full flex-row justify-between overflow-hidden rounded-2xl bg-slate-50 py-10">
          <div className="h-full w-1/2 pl-4 pt-4">
            <div className="group relative z-0 mb-6 h-11 w-4/5">
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
                Nombre de paseador
              </label>
              {errors.name && (
                <span className="text-red-500">{errors.name}</span>
              )}
            </div>
            {/* corre electronico */}
            <div className="group relative z-0 mb-6 h-11 w-4/5">
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
                Correo Electrónico
              </label>
              {errors.mail && (
                <span className="text-red-500">{errors.mail}</span>
              )}
            </div>

            {/* provincia */}
            <div className=" grid   md:grid-cols-2 md:gap-6">
              <div className="group relative  z-0 mb-6 h-11 ">
                <select
                  onChange={handleChange}
                  name="province"
                  className="max-w-full"
                  value={form.province}
                >
                  <option value="" disabled selected>
                    Provincia
                  </option>
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
                >
                  <option value="" disabled selected>
                    Localidad
                  </option>
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
            <div className="mb-7 flex">
              <div className="group relative z-0 mb-6 h-11 w-full">
                <input
                  onChange={handleChange}
                  type="number"
                  name="zip_code"
                  value={form.zip_code}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                  Cod. Postal
                </label>
                {errors.zip_code && (
                  <span className="text-red-500">{errors.zip_code}</span>
                )}
              </div>
              <div className="group relative z-0 mx-4 mb-6 h-11 w-full">
                <input
                  onChange={handleChange}
                  type="text"
                  name="street_name"
                  value={form.street_name}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                  Calle
                </label>
                {errors.street_name && (
                  <span className="text-red-500">{errors.street_name}</span>
                )}
              </div>
              <div className="group relative z-0 mb-6 h-11 w-full">
                <input
                  onChange={handleChange}
                  type="number"
                  name="street_number"
                  value={form.street_number}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                  Numeración
                </label>
                {errors.street_number && (
                  <span className="text-red-500">{errors.street_number}</span>
                )}
              </div>
            </div>
            <div className="mb-7 flex">
              <div className="group relative z-0 mb-6 h-11 w-full">
                <input
                  onChange={handleChange}
                  type="number"
                  name="price_hour"
                  value={form.price_hour}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                  Precio por Hora
                </label>
                {errors.price_hour && (
                  <span className="text-red-500">{errors.price_hour}</span>
                )}
              </div>
              <div className="group relative z-0 mb-6 h-11 w-full">
                <input
                  onChange={handleChange}
                  type="number"
                  name="price_day"
                  value={form.price_day}
                  className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                  placeholder=" "
                  autoComplete="off"
                />
                <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                  Precio por Dia
                </label>
                {errors.price_day && (
                  <span className="text-red-500">{errors.price_day}</span>
                )}
              </div>
            </div>
            <div className="group relative z-0 mb-6 flex h-2/4 w-full">
              <textarea
                type="text"
                value={form.description}
                name="description"
                onChange={handleChange}
                className=" peer block w-full appearance-none rounded-2xl border-b-2 border-gray-100 bg-gray-100 px-1 py-4 text-sm text-gray-900   focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                placeholder=" agregue una breve descrpcion de su producto  "
                autoComplete="off"
              />
              <label className="absolute bottom-2 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                Descripción:
              </label>
              {errors.description && (
                <span className="absolute -bottom-6 text-red-500">
                  {errors.description}
                </span>
              )}
            </div>
          </div>
          {/* //empieza el div con imagenes */}
          <div className="w-1/2">
            <div className="flex h-1/2 justify-center">
              <Carousel className="w-10/12 ">
                {selectedFiles &&
                  selectedFiles.map((file) => (
                    <picture className="flex aspect-square h-full items-center justify-center ">
                      <img src={file} alt="" key={file.id} className="h-full" />
                    </picture>
                  ))}
              </Carousel>
            </div>
            <div className="h-1/2 p-8 px-8 ">
              <div className="group relative z-0 mb-14 flex h-11 w-full ">
                <div className="group relative z-0 mb-14 flex h-11 w-full">
                  <label htmlFor="file-upload" className="w-full">
                    <div className="rounded border border-gray-400 bg-gray-100 py-2 px-4 font-semibold text-gray-800 shadow hover:bg-gray-200">
                      Seleccionar archivos
                    </div>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={changeHandlerImg}
                    className="hidden"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 md:gap-6">
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
                    <span className="text-red-500">{errors.area_code}</span>
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
                    Telefono
                  </label>
                  {errors.number && (
                    <span className="text-red-500">{errors.number}</span>
                  )}
                </div>
              </div>
            </div>
            <div className="h-[10px]">
              <button>
                <LinkButton component={"Habilitate como Paseador"} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormModifyWalker;
