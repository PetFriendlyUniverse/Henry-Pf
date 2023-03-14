import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//import { useParams } from "react-router-dom";
import { GeneralValidations } from "../../../../components/Validations/generalValidations";
import {
  getLocalidadesAsync,
  getPronvinciasAsync,
} from "../../../../redux/features/ubicaciones/ubicacionesActions";

import LinkButton from "../../../../components/Button/LinkButton";
import { Carousel } from "flowbite-react";
import Swal from "sweetalert2";
import { isPending } from "@reduxjs/toolkit";

function FormAdoption() {
  const dispatch = useDispatch();
  //const { id } = useParams();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [img, setImg] = useState(null);
  const [imgFile, setImgFile] = useState(null);

  const id = localStorage.getItem("id");
  const provincia = useSelector((state) => state.Ubicaciones.provincias);
  const localidad = useSelector((state) => state.Ubicaciones.localidades);

  useEffect(() => {
    dispatch(getPronvinciasAsync());
    dispatch(getLocalidadesAsync());
  }, []);

  const [form, setForm] = useState({
    id: "",
    name: "",
    province: "",
    locality: "",
    description: "",
    img: "",
  });
  const [errors, setErrors] = useState({
    id: "",
    name: "",
    province: "",
    locality: "",
    description: "",
    img: "",
  });
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [property]: value });
    setErrors({ ...errors, ...GeneralValidations(property, value) }); //NO CAMBIAR ESTO POR DIOS
    if (e.target.name === "province") {
      dispatch(getLocalidadesAsync(e.target.value));
    }
    console.log(form);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errorValues = Object.values(errors);
    const isFormValid = errorValues.every((val) => val === "");
    const newForm = new FormData();
    newForm.append("img", img);
    newForm.append("province", form.province);
    newForm.append("locality", form.locality);
    newForm.append("description", form.description);

    try {
      await axios
        .post(`/adoption/create/${id}`, newForm, {
          headers: {
            "Content-Type": "multipart/form-data",
          }, //importante en form de imagen poner este headers
        })
        .then(() => {
          Swal.fire({
            title: "Adopción registrada correctamente!",
            icon: "success",
            text: "La adopción se ha registrado correctamente, pendiente de aprobación",
            closeOnEsc: true,
            closeOnClickOutside: true,
          });
        })
        .then(() => {
          setForm({
            province: "",
            locality: "",
            description: "",
          });
          setImg(null);
          setImgFile(null);
          setSelectedFiles([]);
          location.reload();
        });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error en el formulario",
        text: "No se pudo crear el post",
        closeOnEsc: true,
        closeOnClickOutside: true,
      });
    }
  };
  return (
    <div className=" flex h-full  w-full   justify-center  ">
      <form
        onSubmit={handleSubmit}
        className="flex  max-h-screen w-full max-w-[700px] flex-col items-center rounded-xl bg-russianviolet p-3 text-lg font-extrabold text-cornflowerblue shadow-md drop-shadow-2xl md:w-3/5 lg:h-auto "
      >
        <h3 className="mb-6">Formulario para publicar adopciones</h3>
        <div className="flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl bg-slate-50 pb-20">
          {/* //div con el fomulario izquierdo */}
          <div className="flex w-full flex-col gap-4 pl-4 pt-4 ">
            <div className="mb-7 flex w-full flex-col justify-between md:flex-row">
              <div className="group relative  z-0 mb-6 h-11 ">
                <select
                  onChange={handleChange}
                  name="province"
                  className="min-w-[200px] max-w-[200px] bg-transparent"
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
              <div className="group relative z-0 h-11 w-full">
                <select
                  onChange={handleChange}
                  name="locality"
                  value={form.locality}
                  className="min-w-[200px] max-w-[200px] bg-transparent"
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
            <div className="group relative z-0 mb-2 h-10 w-[97%]">
              <input
                onChange={handleChange}
                type="text"
                name="name"
                value={form.name}
                className="peer block h-full w-full appearance-none rounded-md border-2 border-gray-300 bg-transparent  px-0 text-xs text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 md:text-sm "
                placeholder=" "
                autoComplete="off"
                style={{ resize: "none" }}
              />
              <label className="absolute top-1 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                nombre
              </label>
            </div>
            <div className="group relative z-0 h-24 w-[97%] ">
              <textarea
                onChange={handleChange}
                type="text"
                name="description"
                value={form.description}
                className="peer block h-full w-full appearance-none rounded-md border-2 border-gray-300 bg-transparent  px-0 text-xs text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-0 dark:border-gray-600 dark:focus:border-gray-900 md:text-sm "
                placeholder=" "
                autoComplete="off"
                style={{ resize: "none" }}
              />
              <label className="absolute top-1 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-gray-900 dark:text-gray-400 peer-focus:dark:text-gray-900">
                Descripcion
              </label>
              {errors.description && (
                <span className="text-red-500">{errors.description}</span>
              )}
            </div>
          </div>

          <div className="flex h-1/2 justify-center">
            <Carousel className="mt-32 md:mt-20">
              {selectedFiles &&
                selectedFiles.map((file) => (
                  <picture className="flex aspect-square h-full items-center justify-center ">
                    <img src={file} alt="" key={file.id} className="h-full" />
                  </picture>
                ))}
            </Carousel>
          </div>
          <div className="pl:20 mt-24 h-1/2 p-8 md:mt-20 md:pl-28 ">
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
          <LinkButton component={"Enviar"} />
        </div>
      </form>
    </div>
  );
}

export default FormAdoption;
