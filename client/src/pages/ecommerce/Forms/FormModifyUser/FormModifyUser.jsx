import axios from "axios";
import { useEffect, useState } from "react";
import { ValidationProfile } from "../Validations/Profile";
import Swal from "sweetalert2";
import LinkButton from "../../../../components/Button/LinkButton";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "flowbite-react";
import {
  getLocalidadesAsync,
  getPronvinciasAsync,
} from "../../../../redux/features/ubicaciones/ubicacionesActions";
import { getStoreByUser } from "../../../../redux/features/users/usersActions";

function FormModifyUser() {
  const { id } = useParams();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const navigate = useNavigate();
  const user = useSelector((state) => state.User?.userId);
  const [formComplete, setFormComplete] = useState(false);
  const [img, setImg] = useState(null);
  const [imgFile, setImgFile] = useState(null);
  const dispatch = useDispatch();
  const provincia = useSelector((state) => state.Ubicaciones.provincias);
  const localidad = useSelector((state) => state.Ubicaciones.localidades);

  useEffect(() => {
    dispatch(getStoreByUser(id));
    dispatch(getPronvinciasAsync());
  }, []);

  const [form, setForm] = useState({
    user: user?.user,
    name: user?.name,
    lastname: user?.lastname,
    mail: user?.mail,
    province: user?.province,
    locality: user?.locality,
    street_name: user?.street_name,
    area_code: user?.area_code,
    number: user?.number,
    zip_code: user?.zip_code,
    street_number: user?.street_number,
  });
  const [errors, setErrors] = useState({
    user: "",
    name: "",
    lastname: "",
    mail: "",
    province: "",
    locality: "",
    street_name: "",
    area_code: "",
    number: "",
    zip_code: "",
    street_number: "",
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
    if (e.target.name === "province") {
      dispatch(getLocalidadesAsync(e.target.value));
    }
    console.log(img);
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
    newForm.append("user", form.user);
    newForm.append("name", form.name);
    newForm.append("lastname", form.lastname);
    newForm.append("mail", form.mail);
    newForm.append("province", form.province);
    newForm.append("locality", form.locality);
    newForm.append("street_name", form.street_name);
    newForm.append("area_code", form.area_code);
    newForm.append("number", form.number);
    newForm.append("zip_code", form.zip_code);
    newForm.append("street_number", form.street_number);
    if (isFormValid) {
      axios
        .put(`/user/${id}`, newForm, {
          headers: {
            "Content-Type": "multipart/form-data",
          }, //importante en form de imagen poner este headers
        })
        .then(() => {
          Swal.fire({
            title: "Perfil actualizado correctamente!",
            icon: "success",
            text: "El perfil ha sido actualizado correctamente",
            closeOnEsc: true,
            closeOnClickOutside: true,
          });
        })
        .then(() => {
          setForm({
            user: "",
            name: "",
            lastname: "",
            mail: "",
            province: "",
            locality: "",
            street_name: "",
            area_code: "",
            number: "",
            zip_code: "",
            street_number: "",
          });
        })
        .then(() => {
          navigate(-1);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error en el formulario",
        text: "Por favor, revisa los campos del formulario",
        closeOnEsc: true,
        closeOnClickOutside: true,
      });
    }
  };
  return (
    <div className="flex h-full justify-center ">
      <form
        onSubmit={handleSubmit}
        className="mt-10 flex max-h-screen w-full flex-col items-center rounded-xl bg-russianviolet p-3 text-lg font-extrabold text-cornflowerblue drop-shadow-2xl md:w-3/5 lg:h-auto "
      >
        <h3 className="mb-6">Modifica o agrega información</h3>
        <div className="flex h-full w-full flex-row justify-between overflow-hidden rounded-2xl bg-slate-50 pb-20">
          {/* //div con el fomulario izquierdo */}
          <div className="w-full pl-4 pt-4">
            <div className="group relative z-0 mb-6 h-11 w-4/5">
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
                Nombre de Usuario
              </label>
              {errors.user && (
                <span className="text-red-500">{errors.user}</span>
              )}
            </div>
            <div className="group relative z-0 mb-6 h-11 w-4/5">
              <input
                onChange={handleChange}
                type="text"
                name="mail"
                value={form.mail}
                className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900  focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 "
                placeholder=" "
                autoComplete="off"
                readOnly
              />
              <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                Correo Electrónico
              </label>
              {errors.mail && (
                <span className="text-red-500">{errors.mail}</span>
              )}
            </div>
            <div className="grid w-full md:grid-cols-2 md:gap-6">
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
                  Nombre
                </label>
                {errors.name && (
                  <span className="text-red-500">{errors.name}</span>
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
                  Apellido
                </label>
                {errors.lastname && (
                  <span className="text-red-500">{errors.lastname}</span>
                )}
              </div>
            </div>
            <div className="mb-7 grid w-full md:grid-cols-2 md:gap-6">
              <div className="group relative  z-0 mb-6 h-11 ">
                <select
                  onChange={handleChange}
                  name="province"
                  className="max-w-full bg-transparent"
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
                  className="max-w-full bg-transparent"
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
                  Código Postal
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

            <div className="mb-7 grid md:grid-cols-2 md:gap-6"></div>
          </div>
          {/* //empieza el div con imagenes */}
          <div className="w-1/2">
            <div className="flex h-1/2 justify-center">
              <Carousel className="w-10/12 ">
                {selectedFiles &&
                  selectedFiles.map((file) => (
                    <picture className="flex aspect-square h-full items-center justify-center ">
                      <img src={file} alt="" key={id} className="h-full" />
                    </picture>
                  ))}
              </Carousel>
            </div>
            <div className="h-1/2 p-8 px-8 ">
              <div className="group relative z-0 mb-14 flex h-11 w-full ">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={changeHandlerImg}
                  value=""
                />
              </div>

              <div className="grid md:grid-cols-2 md:gap-6">
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
                    Cdigo de área
                  </label>
                  {errors.area_code && (
                    <span className="text-red-500">{errors.area_code}</span>
                  )}
                </div>
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
                    <span className="text-red-500">{errors.number}</span>
                  )}
                </div>
                <LinkButton component={"Enviar"} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormModifyUser;
