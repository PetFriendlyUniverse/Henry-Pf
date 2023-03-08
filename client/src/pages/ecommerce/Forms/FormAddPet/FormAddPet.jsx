import axios from "axios";
import { useState } from "react";

import { Carousel } from "flowbite-react";
import Swal from "sweetalert2";

import LinkButton from "../../../../components/Button/LinkButton";

function FormAddPet() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [imgFile, setImgFile] = useState(null);
  const [img, setImg] = useState(null);
  const id = localStorage.getItem("id");

  const [form, setForm] = useState({
    name: "",
    specie: "",
    size: "",
    race: "",
    age: "",
  });
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

  const handleChange = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    setForm({ ...form, [property]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /*  const newForm = new FormData();
    newForm.append("img", img);
    newForm.append("name", form.name);
    newForm.append("specie", form.specie);
    newForm.append("race", form.race);
    newForm.append("age", form.age);
    console.log(newForm); */
    await axios
      .post(`/pets/create/${id}`, form)
      .then(() => {
        Swal.fire({
          title: "Mascota creada exitosamente",
          icon: "success",
          text: "La mascota ha sido registrada correctamente",
          closeOnEsc: true,
          closeOnClickOutside: true,
        });
      })
      .then(() => {
        setForm({
          name: "",
          specie: "",
          size: "",
          race: "",
          age: "",
        });
        setImg(null);
        setImgFile(null);
        setSelectedFiles([]);
      });
  };

  return (
    <div className=" w-full justify-center bg-[url('https://petfood.com.ar/img/cms/symphony.png')] ">
      <div className="flex justify-center">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <label className="mb-2 block pr-2 text-sm font-medium text-gray-900">
              Nombre
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              value={form.name}
              className="block w-28 rounded-lg border border-cornflowerblue"
            />
          </div>
          <div className="flex justify-between pt-1">
            <label className="mb-2 block pr-2 text-sm font-medium text-gray-900">
              Especie
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="specie"
              value={form.specie}
              className="block w-28 rounded-lg border border-cornflowerblue"
            />
          </div>
          <div className="flex justify-between pt-1">
            <label className="mb-2 block pr-2 text-sm font-medium text-gray-900">
              Raza
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="race"
              value={form.race}
              className="block w-28 rounded-lg border border-cornflowerblue"
            />
          </div>
          <div className="flex justify-between pt-1">
            <label className="mb-2 block pr-2 text-sm font-medium text-gray-900">
              Tamaño:
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="size"
              value={form.size}
              className="block w-28 rounded-lg border border-cornflowerblue"
            />
          </div>
          <div className="flex justify-between pt-1 pb-3">
            <label className="mb-2 block pr-2 text-sm font-medium text-gray-900">
              Edad
            </label>
            <input
              onChange={handleChange}
              type="number"
              name="age"
              value={form.age}
              className="block w-28 rounded-lg border border-cornflowerblue"
            />
          </div>
          <LinkButton component={"Registra tu mascota"} />
        </form>
      </div>
    </div>
  );
}

export default FormAddPet;
