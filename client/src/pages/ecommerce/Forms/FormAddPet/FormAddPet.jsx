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

  console.log(form);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newForm = new FormData();
    newForm.append("img", img);
    newForm.append("name", form.name);
    newForm.append("specie", form.specie);
    newForm.append("race", form.race);
    newForm.append("age", form.age);
    axios
      .post(`/pets/create/${id}`, newForm, {
        headers: {
          "Content-Type": "multipart/form-data",
        }, //importante en form de imagen poner este headers
      })
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
          <div className="flex w-52 flex-col justify-center overflow-hidden">
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={changeHandlerImg}
              value=""
            />
          </div>
          <div className="flex h-1/2 justify-center">
            <Carousel className="w-10/12 ">
              {selectedFiles &&
                selectedFiles.map((file) => (
                  <picture className="flex aspect-square h-full items-center justify-center ">
                    <img src={file} alt="" className="h-full" />
                  </picture>
                ))}
            </Carousel>
          </div>

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
